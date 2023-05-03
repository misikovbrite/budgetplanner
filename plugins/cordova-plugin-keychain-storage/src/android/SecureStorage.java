package com.adi.plugin;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Environment;
import android.util.Log;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.InvalidAlgorithmParameterException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.UnrecoverableEntryException;
import java.security.cert.CertificateException;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

import static android.content.Context.MODE_PRIVATE;

/**
 * Secure storage component
 */
public final class SecureStorage {
    private static final String TAG = SecureStorage.class.getSimpleName();
    private final KeyStorage keyStorage;
    private final Context context;
    private final String repositoryName;
    private final String keystoreSeparator = ":";
    private String storageFilePath = null;
    private final Map<String, String> valueCache = new HashMap<String, String>();

    private final static Map<String, SecureStorage> repositoryMap = new HashMap<String, SecureStorage>();

    /**
     * Static factory method to create or return singleton object
     *
     * @param context        The Android Context
     * @param repositoryName The name used for the Keystore alias and shared preference file
     * @return The singleton instance of the SecureStorage class
     */
    public synchronized static SecureStorage getInstance(final Context context,
                                                         final String repositoryName,
                                                         final boolean encryptionRequired) {
        final SecureStorage instance;
        if (!repositoryMap.containsKey(repositoryName)) {
            instance = new SecureStorage(context, repositoryName, encryptionRequired);
            repositoryMap.put(repositoryName, instance);
        } else {
            instance = repositoryMap.get(repositoryName);
        }
        return instance;
    }

    /**
     * Private constructor to ensure singleton only instanciation
     *
     * @param context        The Android Context
     * @param repositoryName The name used for the Keystore alias and shared preference file
     */
    private SecureStorage(final Context context, final String repositoryName, final boolean encryptionRequired) {
        this.context = context;
        this.repositoryName = repositoryName;
        try {
            keyStorage = new KeyStorage(context, repositoryName, encryptionRequired);
        } catch (CertificateException e) {
            throw new IllegalArgumentException(e);
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalArgumentException(e);
        } catch (KeyStoreException e) {
            throw new IllegalArgumentException(e);
        } catch (UnrecoverableEntryException e) {
            throw new IllegalArgumentException(e);
        } catch (NoSuchProviderException e) {
            throw new IllegalArgumentException(e);
        } catch (InvalidAlgorithmParameterException e) {
            throw new IllegalArgumentException(e);
        } catch (IOException e) {
            throw new IllegalArgumentException(e);
        }
    }

    /**
     * Returns the string value for the given key
     * <p>
     * Will return unecrypted value from local cache if present,
     * otherwise retrieves encrypted value from shared preferences and unencrypts before returning it
     *
     * @param key The key of the value to return
     * @return The unencrypted value or null if not found
     */
    public String getValue(final String key) {
        Log.d("[SecureStorage]", "Get value");
        if (!valueCache.containsKey(key) || valueCache.get(key) == null) {
            boolean isFileAvailable = false;

            if (storageFilePath == null) {
                storageFilePath = getStorageFilePath();
            }

            if (storageFilePath != null) {
                Log.d("[SecureStorage]", "Storage file path found");
                TreeMap<String, String> fileDataMap = getStoredDataMap(storageFilePath);

                if (fileDataMap != null) {
                    Log.d("[SecureStorage]", "file exists");

                    if (!fileDataMap.isEmpty() && fileDataMap.containsKey(key)) {
                        Log.d("[SecureStorage]", "file data map not empty");
                        String cryptedValue = fileDataMap.get(key);
                        if (cryptedValue != null && !cryptedValue.isEmpty()) {
                            String decryptedResult = null;
                            try {
                                decryptedResult = keyStorage.decryptString(cryptedValue);
                            } catch (IllegalArgumentException exception) {
                                Log.d("[SecureStorage]", "IllegalArgumentException " + exception.getLocalizedMessage());
                            }
                            valueCache.put(key, decryptedResult);
                            Log.d("[SecureStorage]", "value found");
                        } else {
                            Log.d("[SecureStorage]", "Crypted value not found");
                        }
                    } else {
                        Log.d("[SecureStorage]", "file data map EMPTY");
                    }

                    isFileAvailable = true;
                } else {
                    Log.d("[SecureStorage]", "file NOT exists");
                }

                Log.d("[SecureStorage]", "Saved");
            } else {
                Log.d("[SecureStorage]", "Storage file path NOT found");
            }

            if (!isFileAvailable) {
                Log.d("[SecureStorage]", "File not found, read SharedPreferences");
                final SharedPreferences prefs = context.getSharedPreferences(repositoryName, MODE_PRIVATE);
                final String val = prefs.getString(key, null);
                if (val != null) {
                    valueCache.put(key, keyStorage.decryptString(val));
                }
            }

        }

        return valueCache.get(key);
    }

    public TreeMap<String, String> getStoredDataMap(String filePath) {
        Log.d("[SecureStorage]", "get stored data map");
        try {
            if (filePath != null) {
                Log.d("[SecureStorage]", "Storage file path found");
                InputStream inputStream = new FileInputStream(filePath);
                if (inputStream != null) {
                    Log.d("[SecureStorage]", "Input stream found");
                    InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
                    BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
                    String line = "";

                    TreeMap<String, String> fileDataMap = new TreeMap<String, String>();
                    final int lhs = 0;
                    final int rhs = 1;

                    while ((line = bufferedReader.readLine()) != null) {
                        if (!line.startsWith("#") && !line.isEmpty()) {
                            String[] pair = line.trim().split(keystoreSeparator);
                            if (pair.length > 1) {
                                fileDataMap.put(pair[lhs].trim(), pair[rhs].trim());
                            }
                        }
                    }

                    inputStream.close();

                    return fileDataMap;
                } else {
                    Log.d("[SecureStorage]", "Input stream NOT found");
                }

                Log.d("[SecureStorage]", "Saved");
            } else {
                Log.d("[SecureStorage]", "Storage file path NOT found");
            }
        } catch (FileNotFoundException exception) {
            exception.printStackTrace();
            Log.d("[SecureStorage]", "File not found:  " + exception.getLocalizedMessage());
        } catch (IOException exception) {
            exception.printStackTrace();
            Log.d("[SecureStorage]", "Can not read file: " + exception.getLocalizedMessage());
        }

        return null;
    }

    public String getStorageDirectoryPath() {
        String directoryName = getStorageDirectoryName();
        String externalPath = getExternalStoragePath();

        if (directoryName != null && externalPath != null) {
            return externalPath + "/" + directoryName;
        }

        return null;
    }

    public String getExternalStoragePath() {
        return Environment.getExternalStorageDirectory().getPath();
    }

    public String getStorageDirectoryName() {
        if (this.context != null) {
            String packageName = this.context.getPackageName();
            if (packageName != null && !packageName.isEmpty()) {
                String[] packageNameParts = packageName.split("\\.");
                if (packageNameParts != null && packageNameParts.length > 0) {
                    String directoryName = packageNameParts[packageNameParts.length - 1];
//                    String directoryName = packageNameParts[packageNameParts.length - 1];
                    return directoryName;
                }
            }
        }

        return null;
    }

    public String getStorageFileName() {
        return "keystore.local";
    }

    public String getStorageFilePath() {
        String storageDirectoryPath = getStorageDirectoryPath();
        String fileName = getStorageFileName();
        if (storageDirectoryPath != null && fileName != null) {
            return storageDirectoryPath + "/" + fileName;
        }

        return null;
    }

    /**
     * Sets the string value for the given key
     * <p>
     * Encrypts the value and stores in shared preferences and stores the un-encrypted value
     * in the local cache
     *
     * @param key   The key of the value to set
     * @param value The value to set
     */
    public void setValue(final String key, final String value) {
        Log.d("[SecureStorage]", "Set value for key " + key);
        String encrypted = null;
        try {
            encrypted = keyStorage.encryptString(value);
            Log.d("[SecureStorage]", "Value encrypted for key " + key);
        } catch (IllegalArgumentException exception) {
            Log.d("[SecureStorage]", "Key "+key +" IllegalArgumentException " + exception.getLocalizedMessage());
        }

        boolean isSaved = false;
        try {
            String directoryPath = getStorageDirectoryPath();
            if (directoryPath != null) {

                File file = new File(directoryPath);
                if (!file.exists()) {
                    String directoryName = getStorageDirectoryName();
                    String externalPath = getExternalStoragePath();
                    File directoryEntry = new File(externalPath, directoryName);
                    if (!directoryEntry.exists()) {
                        Log.d("[SecureStorage]", "Create directory" + directoryPath);
                        boolean mkdirResult = directoryEntry.mkdirs();
                        if (mkdirResult) {
                            Log.d("[SecureStorage]", "Directory created");
                        } else {
                            Log.d("[SecureStorage]", "Directory NOT created");
                        }
                    }
                } else {
                    Log.d("[SecureStorage]", "Directory exists");
                }

                storageFilePath = getStorageFilePath();
            }

            if (storageFilePath != null) {
                Log.d("[SecureStorage]", "Storage file path found");

                TreeMap<String, String> fileDataMap = getStoredDataMap(storageFilePath);

                if (fileDataMap != null && !fileDataMap.isEmpty()) {
                    Log.d("[SecureStorage]", "file data map not empty");

                    if (fileDataMap.containsKey(key)) {
                        Log.d("[SecureStorage]", "file data map has key " + key);
                        Log.d("[SecureStorage]", "replace");
                        fileDataMap.put(key, encrypted);
                    } else {
                        Log.d("[SecureStorage]", "file data map hasn't key " + key);
                        Log.d("[SecureStorage]", "put");
                        fileDataMap.put(key, encrypted);
                    }
                } else {
                    Log.d("[SecureStorage]", "file data map EMPTY");
                    fileDataMap = new TreeMap<String, String>();
                    Log.d("[SecureStorage]", "put");
                    fileDataMap.put(key, encrypted);
                }

                String fileDataString = "";
                if (fileDataMap != null && !fileDataMap.isEmpty()) {
                    for (Map.Entry<String, String> entry : fileDataMap.entrySet()) {
                        String entryKey = entry.getKey();
                        String entryValue = entry.getValue();

                        fileDataString += entryKey + keystoreSeparator + entryValue + "\n";
                    }
                }

                File file = new File(storageFilePath);
                if (!file.exists()) {
                    Log.d("[SecureStorage]", "File NOT exists. Create new file");
                    boolean fileCreateResult = file.createNewFile();
                    if (fileCreateResult) {
                        Log.d("[SecureStorage]", "File created");
                    } else {
                        Log.d("[SecureStorage]", "File NOT created.");
                    }
                } else {
                    Log.d("[SecureStorage]", "File exists. Use existing");
                }

                FileOutputStream fos = new FileOutputStream(storageFilePath);
                fos.write(fileDataString.getBytes());
                fos.flush();
                fos.close();
                isSaved = true;
                Log.d("[SecureStorage]", "Saved for key " + key);
            } else {
                Log.d("[SecureStorage]", "Storage file path NOT found key " + key);
            }

        } catch (IOException exception) {
            exception.printStackTrace();
            Log.d("[SecureStorage]", "Can not read file key "+key+": " + exception.getLocalizedMessage());
        }

        if (!isSaved) {
            Log.d("[SecureStorage]", "Write to SharedPreferences");
            final SharedPreferences prefs = context.getSharedPreferences(repositoryName, MODE_PRIVATE);
            final SharedPreferences.Editor editor = prefs.edit();

            editor.putString(key, encrypted);
            editor.apply();
        }

        valueCache.put(key, value);
    }

    /**
     * Remove the value for the given key from shared preferences and the local cache
     *
     * @param key The key of the value to remove
     */
    public void removeValue(final String key) {
        setValue(key, "");

        final SharedPreferences prefs = context.getSharedPreferences(repositoryName, MODE_PRIVATE);
        if (valueCache.containsKey(key) || prefs.contains(key)) {
            final SharedPreferences.Editor editor = prefs.edit();
            editor.remove(key);
            editor.apply();
            valueCache.remove(key);
        }
    }
}

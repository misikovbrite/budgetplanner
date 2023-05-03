# cordova-plugin-persist-localstorage
A cordova plugin to save the localStorage in iOS to the NSUserDefaults.
Sometimes the Storage gets deletes on iOS for no particular reason.
If you happen to save the state of your hybrid application in localStorage
it might happen that a user's state just gets completely wiped

## Install

```
cordova plugin add cordova-plugin-persist-localstorage
```

## Usage
```
PersistLocalstorage.save(
  () => console.log('successful'),
  () => console.error('did not work')
);
```

## Supported platforms
* iOS

## License
MIT

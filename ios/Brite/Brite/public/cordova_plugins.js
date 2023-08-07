
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-calendar.Calendar",
          "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
          "pluginId": "cordova-plugin-calendar",
        "clobbers": [
          "Calendar"
        ]
        },
      {
          "id": "cordova-plugin-camera.Camera",
          "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "Camera"
        ]
        },
      {
          "id": "cordova-plugin-camera.CameraPopoverHandle",
          "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "CameraPopoverHandle"
        ]
        },
      {
          "id": "cordova-plugin-camera.CameraPopoverOptions",
          "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "CameraPopoverOptions"
        ]
        },
      {
          "id": "cordova-plugin-network-information.Connection",
          "file": "plugins/cordova-plugin-network-information/www/Connection.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "Connection"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.Coordinates",
          "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "Coordinates"
        ]
        },
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open"
        ]
        },
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "@moodlehq/cordova-plugin-local-notification.LocalNotification",
          "file": "plugins/@moodlehq/cordova-plugin-local-notification/www/local-notification.js",
          "pluginId": "@moodlehq/cordova-plugin-local-notification",
        "clobbers": [
          "cordova.plugins.notification.local"
        ]
        },
      {
          "id": "cordova-plugin-screen-orientation.screenorientation",
          "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
          "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
          "cordova.plugins.screenorientation"
        ]
        },
      {
          "id": "cordova-plugin-sign-in-with-apple.SignInWithApple",
          "file": "plugins/cordova-plugin-sign-in-with-apple/www/sign-in-with-apple.js",
          "pluginId": "cordova-plugin-sign-in-with-apple",
        "clobbers": [
          "cordova.plugins.SignInWithApple"
        ]
        },
      {
          "id": "cordova-plugin-theme-detection.ThemeDetection",
          "file": "plugins/cordova-plugin-theme-detection/www/ThemeDetection.js",
          "pluginId": "cordova-plugin-theme-detection",
        "clobbers": [
          "cordova.plugins.ThemeDetection"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-fastclick.FastClick",
          "file": "plugins/cordova-plugin-fastclick/www/fastclick.js",
          "pluginId": "cordova-plugin-fastclick",
        "clobbers": [
          "FastClick"
        ]
        },
      {
          "id": "cordova-plugin-inapppurchase.PaymentsPlugin",
          "file": "plugins/cordova-plugin-inapppurchase/www/index-ios.js",
          "pluginId": "cordova-plugin-inapppurchase",
        "clobbers": [
          "inAppPurchase"
        ]
        },
      {
          "id": "cordova-launch-review.LaunchReview",
          "file": "plugins/cordova-launch-review/www/launchreview.js",
          "pluginId": "cordova-launch-review",
        "clobbers": [
          "LaunchReview"
        ]
        },
      {
          "id": "cordova-plugin-camera.camera",
          "file": "plugins/cordova-plugin-camera/www/Camera.js",
          "pluginId": "cordova-plugin-camera",
        "clobbers": [
          "navigator.camera"
        ]
        },
      {
          "id": "cordova-plugin-network-information.network",
          "file": "plugins/cordova-plugin-network-information/www/network.js",
          "pluginId": "cordova-plugin-network-information",
        "clobbers": [
          "navigator.connection"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.geolocation",
          "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "navigator.geolocation"
        ]
        },
      {
          "id": "cordova-plugin-globalization.globalization",
          "file": "plugins/cordova-plugin-globalization/www/globalization.js",
          "pluginId": "cordova-plugin-globalization",
        "clobbers": [
          "navigator.globalization"
        ]
        },
      {
          "id": "cordova-plugin-persist-localstorage.persistlocal",
          "file": "plugins/cordova-plugin-persist-localstorage/www/persistlocal.js",
          "pluginId": "cordova-plugin-persist-localstorage",
        "clobbers": [
          "PersistLocalstorage"
        ]
        },
      {
          "id": "cordova-plugin-background-mode.BackgroundMode",
          "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
          "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
          "cordova.plugins.backgroundMode",
          "plugin.backgroundMode"
        ]
        },
      {
          "id": "cordova-plugin-app-launcher.Launcher",
          "file": "plugins/cordova-plugin-app-launcher/www/Launcher.js",
          "pluginId": "cordova-plugin-app-launcher",
        "clobbers": [
          "plugins.launcher"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.Position",
          "file": "plugins/cordova-plugin-geolocation/www/Position.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "Position"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.PositionError",
          "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "PositionError"
        ]
        },
      {
          "id": "cordova-plugin-purchases.plugin",
          "file": "plugins/cordova-plugin-purchases/www/plugin.js",
          "pluginId": "cordova-plugin-purchases",
        "clobbers": [
          "Purchases"
        ]
        },
      {
          "id": "cordova-silent-mode.SilentModePlugin",
          "file": "plugins/cordova-silent-mode/www/silent-mode.js",
          "pluginId": "cordova-silent-mode",
        "clobbers": [
          "SilentMode"
        ]
        },
      {
          "id": "cordova-plugin-purchase.InAppPurchase",
          "file": "plugins/cordova-plugin-purchase/www/store-ios.js",
          "pluginId": "cordova-plugin-purchase",
        "clobbers": [
          "store"
        ]
        },
      {
          "id": "cordova-plugin-taptic-engine.TapticEngine",
          "file": "plugins/cordova-plugin-taptic-engine/www/TapticEngine.js",
          "pluginId": "cordova-plugin-taptic-engine",
        "clobbers": [
          "TapticEngine"
        ]
        },
      {
          "id": "cordova-plugin-3dtouch.ThreeDeeTouch",
          "file": "plugins/cordova-plugin-3dtouch/www/ThreeDeeTouch.js",
          "pluginId": "cordova-plugin-3dtouch",
        "clobbers": [
          "ThreeDeeTouch"
        ]
        },
      {
          "id": "cordova-ios-plugin-userdefaults.UserDefaults",
          "file": "plugins/cordova-ios-plugin-userdefaults/www/userdefaults.js",
          "pluginId": "cordova-ios-plugin-userdefaults",
        "clobbers": [
          "UserDefaults"
        ]
        },
      {
          "id": "zalarudo-widget-refresh.WidgetRefresh",
          "file": "plugins/zalarudo-widget-refresh/www/WidgetRefresh.js",
          "pluginId": "zalarudo-widget-refresh",
        "clobbers": [
          "widgetrefresh"
        ]
        },
      {
          "id": "cordova-plugin-file.DirectoryEntry",
          "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.DirectoryEntry"
        ]
        },
      {
          "id": "cordova-plugin-file.DirectoryReader",
          "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.DirectoryReader"
        ]
        },
      {
          "id": "cordova-plugin-file.Entry",
          "file": "plugins/cordova-plugin-file/www/Entry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Entry"
        ]
        },
      {
          "id": "cordova-plugin-file.File",
          "file": "plugins/cordova-plugin-file/www/File.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.File"
        ]
        },
      {
          "id": "cordova-plugin-file.FileEntry",
          "file": "plugins/cordova-plugin-file/www/FileEntry.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileEntry"
        ]
        },
      {
          "id": "cordova-plugin-file.FileError",
          "file": "plugins/cordova-plugin-file/www/FileError.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileError"
        ]
        },
      {
          "id": "cordova-plugin-file.FileReader",
          "file": "plugins/cordova-plugin-file/www/FileReader.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileReader"
        ]
        },
      {
          "id": "cordova-plugin-file.FileSystem",
          "file": "plugins/cordova-plugin-file/www/FileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileSystem"
        ]
        },
      {
          "id": "cordova-plugin-file-transfer.FileTransfer",
          "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
          "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
          "window.FileTransfer"
        ]
        },
      {
          "id": "cordova-plugin-file-transfer.FileTransferError",
          "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
          "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
          "window.FileTransferError"
        ]
        },
      {
          "id": "cordova-plugin-file.FileUploadOptions",
          "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileUploadOptions"
        ]
        },
      {
          "id": "cordova-plugin-file.FileUploadResult",
          "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileUploadResult"
        ]
        },
      {
          "id": "cordova-plugin-file.FileWriter",
          "file": "plugins/cordova-plugin-file/www/FileWriter.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.FileWriter"
        ]
        },
      {
          "id": "cordova-plugin-file.Flags",
          "file": "plugins/cordova-plugin-file/www/Flags.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Flags"
        ]
        },
      {
          "id": "cordova-plugin-globalization.GlobalizationError",
          "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
          "pluginId": "cordova-plugin-globalization",
        "clobbers": [
          "window.GlobalizationError"
        ]
        },
      {
          "id": "cordova-plugin-ios-keychain.Keychain",
          "file": "plugins/cordova-plugin-ios-keychain/www/keychain.js",
          "pluginId": "cordova-plugin-ios-keychain",
        "clobbers": [
          "window.Keychain"
        ]
        },
      {
          "id": "cordova-plugin-keychain-storage.Keychain",
          "file": "plugins/cordova-plugin-keychain-storage/www/keychain.js",
          "pluginId": "cordova-plugin-keychain-storage",
        "clobbers": [
          "window.Keychain"
        ]
        },
      {
          "id": "cordova-plugin-file.LocalFileSystem",
          "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.LocalFileSystem"
        ],
        "merges": [
          "window"
        ]
        },
      {
          "id": "cordova-plugin-media.Media",
          "file": "plugins/cordova-plugin-media/www/Media.js",
          "pluginId": "cordova-plugin-media",
        "clobbers": [
          "window.Media"
        ]
        },
      {
          "id": "cordova-plugin-media.MediaError",
          "file": "plugins/cordova-plugin-media/www/MediaError.js",
          "pluginId": "cordova-plugin-media",
        "clobbers": [
          "window.MediaError"
        ]
        },
      {
          "id": "cordova-plugin-file.Metadata",
          "file": "plugins/cordova-plugin-file/www/Metadata.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.Metadata"
        ]
        },
      {
          "id": "cordova-plugin-googleplus.GooglePlus",
          "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
          "pluginId": "cordova-plugin-googleplus",
        "clobbers": [
          "window.plugins.googleplus"
        ]
        },
      {
          "id": "cordova-plugin-insomnia.Insomnia",
          "file": "plugins/cordova-plugin-insomnia/www/Insomnia.js",
          "pluginId": "cordova-plugin-insomnia",
        "clobbers": [
          "window.plugins.insomnia"
        ]
        },
      {
          "id": "cordova-plugin-customurlscheme.LaunchMyApp",
          "file": "plugins/cordova-plugin-customurlscheme/www/ios/LaunchMyApp.js",
          "pluginId": "cordova-plugin-customurlscheme",
        "clobbers": [
          "window.plugins.launchmyapp"
        ]
        },
      {
          "id": "cordova-plugin-x-socialsharing.SocialSharing",
          "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
          "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
          "window.plugins.socialsharing"
        ]
        },
      {
          "id": "cordova-plugin-webviewcolor.WebViewColor",
          "file": "plugins/cordova-plugin-webviewcolor/www/WebViewColor.js",
          "pluginId": "cordova-plugin-webviewcolor",
        "clobbers": [
          "window.plugins.webviewcolor"
        ]
        },
      {
          "id": "cordova-plugin-file.ProgressEvent",
          "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.ProgressEvent"
        ]
        },
      {
          "id": "cordova-plugin-file.requestFileSystem",
          "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
          "pluginId": "cordova-plugin-file",
        "clobbers": [
          "window.requestFileSystem"
        ]
        },
      {
          "id": "cordova-watchconnectivity-plugin.WatchConnectivity",
          "file": "plugins/cordova-watchconnectivity-plugin/www/cordova-watchconnectivity-plugin.js",
          "pluginId": "cordova-watchconnectivity-plugin",
        "clobbers": [
          "cordova.WatchConnectivity",
          "window.WatchConnectivity"
        ]
        },
      {
          "id": "cordova-plugin-fastclick.FastClickBootstrap",
          "file": "plugins/cordova-plugin-fastclick/www/bootstrap.js",
          "pluginId": "cordova-plugin-fastclick",
        "runs": true
        },
      {
          "id": "cordova-plugin-file.fileSystems",
          "file": "plugins/cordova-plugin-file/www/fileSystems.js",
          "pluginId": "cordova-plugin-file"
        },
      {
          "id": "cordova-plugin-file.isChrome",
          "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
          "pluginId": "cordova-plugin-file",
        "runs": true
        },
      {
          "id": "cordova-plugin-file.fileSystems-roots",
          "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
          "pluginId": "cordova-plugin-file",
        "runs": true
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        },
      {
          "id": "cordova-plugin-file.fileSystemPaths",
          "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "cordova"
        ],
        "runs": true
        },
      {
          "id": "cordova-plugin-app-review.AppReview",
          "file": "plugins/cordova-plugin-app-review/www/AppReview.js",
          "pluginId": "cordova-plugin-app-review",
        "merges": [
          "cordova.plugins.AppReview"
        ]
        },
      {
          "id": "cordova-plugin-browser.BrowserPlugin",
          "file": "plugins/cordova-plugin-browser/www/BrowserPlugin.js",
          "pluginId": "cordova-plugin-browser",
        "merges": [
          "cordova.plugins.browser"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.bluetooth.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.bluetooth"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.calendar.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.calendar"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.camera.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.camera"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.contacts.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.contacts"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Location",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.location.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.location"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.microphone.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.microphone"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Motion",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.motion.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.motion"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.notifications.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.notifications"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Reminders",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.reminders.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.reminders"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.wifi.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.wifi"
        ]
        },
      {
          "id": "cordova-plugin-idfa.Idfa",
          "file": "plugins/cordova-plugin-idfa/www/Idfa.js",
          "pluginId": "cordova-plugin-idfa",
        "merges": [
          "cordova.plugins.idfa"
        ]
        },
      {
          "id": "cordova-plugin-file.iosFileSystem",
          "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "FileSystem"
        ]
        },
      {
          "id": "cordova-plugin-file.resolveLocalFileSystemURI",
          "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
          "pluginId": "cordova-plugin-file",
        "merges": [
          "window"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "@moodlehq/cordova-plugin-local-notification": "0.9.0-moodle.11",
      "cordova-ios-plugin-userdefaults": "1.0.0",
      "cordova-launch-review": "4.0.1",
      "cordova-plugin-3dtouch": "1.3.8",
      "cordova-plugin-app-launcher": "0.4.0",
      "cordova-plugin-app-review": "2.0.3",
      "cordova-plugin-background-mode": "0.7.3",
      "cordova-plugin-badge": "0.8.9",
      "cordova-plugin-browser": "2.0.0",
      "cordova-plugin-calendar": "5.1.5",
      "cordova-plugin-camera": "5.0.1",
      "cordova-plugin-customurlscheme": "5.0.2",
      "cordova-plugin-device": "2.0.3",
      "cordova-plugin-fastclick": "1.0.0",
      "cordova-plugin-file": "6.0.2",
      "cordova-plugin-file-transfer": "2.0.0-dev",
      "cordova-plugin-geolocation": "4.0.2",
      "cordova-plugin-globalization": "1.11.0",
      "cordova-plugin-googleplus": "8.5.2",
      "cordova-plugin-idfa": "2.0.0",
      "cordova-plugin-inappbrowser": "5.0.0",
      "cordova-plugin-inapppurchase": "1.1.0",
      "cordova-plugin-insomnia": "4.3.0",
      "cordova-plugin-ios-keychain": "3.0.1",
      "cordova-plugin-keychain-storage": "1.1.6",
      "cordova-plugin-localization-strings": "3.2.1",
      "cordova-plugin-media": "6.1.0",
      "cordova-plugin-minify": "0.1.2",
      "cordova-plugin-network-information": "3.0.0",
      "cordova-plugin-persist-localstorage": "0.2.3",
      "cordova-plugin-purchase": "11.0.0",
      "cordova-plugin-purchases": "3.13.0",
      "cordova-plugin-screen-orientation": "3.0.2",
      "cordova-plugin-sign-in-with-apple": "0.1.2",
      "cordova-plugin-taptic-engine": "2.2.0",
      "cordova-plugin-theme-detection": "1.3.0",
      "cordova-plugin-webviewcolor": "2.2.0",
      "cordova-plugin-x-socialsharing": "6.0.3",
      "cordova-silent-mode": "1.0.0",
      "cordova-watchconnectivity-plugin": "1.0.1",
      "cordova.plugins.diagnostic": "6.1.0",
      "es6-promise-plugin": "4.2.2",
      "zalarudo-widget-refresh": "0.0.1"
    };
    // BOTTOM OF METADATA
    });
    
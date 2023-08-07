cordova.define("cordova-watchconnectivity-plugin.WatchConnectivity", function(require, exports, module) { 
module.exports = {
    init: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WatchConnectivity", "init", []);
    },
    messageReceiver: function (onNewMessageCallback, errorCallback) {
        cordova.exec(onNewMessageCallback, errorCallback, "WatchConnectivity", "messageReceiver", []);
    },
    sendMessage: function (messageDictionary, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WatchConnectivity", "sendMessage", [messageDictionary]);
    },
    updateApplicationContext: function (messageDictionary, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "WatchConnectivity", "updateApplicationContext", [messageDictionary]);
    }
};
});
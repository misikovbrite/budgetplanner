cordova.define("zalarudo-widget-refresh.WidgetRefresh", function(require, exports, module) { 
var exec = require('cordova/exec');

exports.refresh = function (arg0, success, error) {
    exec( success, error, 'WidgetRefresh', 'refresh', [arg0] );
};
});
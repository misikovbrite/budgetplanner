var exec = require('cordova/exec');

exports.refresh = function ( success, error) {
    exec( success, error, 'WidgetRefresh', 'refresh' );
};

var exec = require('cordova/exec');

exports.save = function(success, error) {
  exec(success, error, 'PersistLocalstorage', 'save', [JSON.stringify(localStorage)]);
};

exports.sync = function(success, error) {
  exec(function(store) {
    if (replaceValues(store)) success();
    else error();
  }, error, 'PersistLocalstorage', 'sync', []);
}

exports.wipe = function(success, error) {
  exec(success, error, 'PersistLocalstorage', 'wipe', []);
}

function replaceValues(store) {
  var value = '',
      ret;
  var obj = JSON.parse(store);
  if (obj !== null && typeof obj === 'object') {
    for (var o in obj) {
      if (obj.hasOwnProperty(o)) {
        localStorage.setItem(o, obj[o]);
      }
    }
    ret = true;
  }

  return ret;
}

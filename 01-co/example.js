var Q = require('q');
var co = require('co');

function sleep(millis, str) {
    var deferredResult = Q.defer();
    setTimeout(function() {
        console.log('sleep', str);
        deferredResult.resolve('resolved');
    }, millis);
    return deferredResult.promise;
}

co(function *(){
  var str = yield sleep(2000, '1');
  console.log(str);
  var str2 = yield sleep(2000, '2');
  console.log(str2);
  console.log('Finished');
})();


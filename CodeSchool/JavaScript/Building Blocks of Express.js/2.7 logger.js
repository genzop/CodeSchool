module.exports = function (request, response, next) {
  var startTime = +new Date();
  var stream = process.stdout;
  var duration = null;

  response.on('finish', function () {
    duration = +new Date() - startTime;
    var message = 'This request took ' + duration + ' ms';
    stream.write(message);
  });
  next();  
};
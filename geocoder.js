var NodeGeocoder = require('node-geocoder');
var $ = require('jquery');

var address = process.argv[2];

var getCoordinates = function (address, apiKey, callback) {
  var options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: apiKey,
    formatter: null
  };

  var geocoder = NodeGeocoder(options);

  geocoder.geocode(address, function(err, res) {
    if (err) {
      callback(err,null);
    } else {
      callback(null,res[0]);
    }
  });
}

module.exports = getCoordinates;
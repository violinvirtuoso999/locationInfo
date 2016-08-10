var http = require('http');
var fs = require('fs');

var getMap = function (lon,lat,zoom,height,width,access_token,marker,markerLon,markerLat,callback,mapNum) {
	var mapURL = 'http://api.mapbox.com/v4/digitalglobe.nako6329/';

	if (marker) {
		mapURL += 'pin-m(' + markerLon + ',' + markerLat + ')/';
	}

	mapURL += lon + ',' + lat + ',' + zoom + '/' + height + 'x' + width + '.png?access_token=' + access_token;

	var output = fs.createWriteStream('map' + mapNum + '.png');

	http.get(mapURL, function(response) {
		response.pipe(output);
	});

	output.on('finish', function () {
		callback();
	});
}

module.exports = getMap;
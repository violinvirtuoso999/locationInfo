var map = require('./map.js');
var geocode = require('./geocoder.js');
var $ = require('jquery');
var config = require('./../config/config.js');
var fs = require('fs');

//map settings
var lon;
var lat;
var markerLon;
var markerLat;
const zoom = '15';
const height = '500';
const width = '300';

//geocode settings
var address;

var clickCount = 0;

cleanup();

function cleanup () {
  var done = false;
  var count = 1;
  var fileExists;
  var filePath;
  do {
    filePath = "map" + count + ".png";
    //check if file exists
    try
    {
        fileExists = fs.statSync(filePath).isFile();
    }
    catch (err)
    {
        fileExists = false;
    }
    //if exists, remove file and increment count
    if (fileExists) {
      fs.unlinkSync(filePath);
      count++;
    } else {
    //else set flag
      done = true;
    }
  }
  while (!done);
  console.log('Cleaned up ' + (count - 1) + ' old maps');
}

$('#getMap').on('click',function () {

  clickCount++;
  $('#map').html('');
  address = $('#address').val();

  getCoordinates();
});

function getCoordinates () {
  geocode(address,config.geoCodeApiKey, function (err,data) {
    if (err) {
      console.log(err);
    } else {
      lat = data.latitude;
      lon = data.longitude;
      markerLat = data.latitude;
      markerLon = data.longitude;

      getMap();
    }
  });
}

function getMap () {
  map(lon,lat,zoom,height,width,config.mapAccessToken,true,markerLon,markerLat,attachImage,clickCount);
}

function attachImage () {
  $('#map').html('<img src="map' + clickCount + '.png" />');
}
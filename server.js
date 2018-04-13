// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');
var Spotify = require("node-spotify-api");
var request = require('request');
var path = require('path');


var PORT = process.env.PORT || 4000;
var app = express();



app.listen(PORT, function() {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
  });
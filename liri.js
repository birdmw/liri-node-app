require("dotenv").config();

args = process.argv;

var keys = require("./keys.js");
var Spotify= require('spotify-web-api-node');

console.log(keys);

var spotify = new Spotify(keys.spotify);

console.log(spotify)


// node liri.js concert-this <artist/band name here>
switch(args[2]) {
    case "concert-this":
      // code block
      break;
    case "spotify-this-song":
      // code block
      break;
    case "movie-this":
        // code block
        break;
    case "do-what-it-says":
        // code block
        break;
    default:
      // code block
  }
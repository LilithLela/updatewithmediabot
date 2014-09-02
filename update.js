var twitter_update_with_media = require('./twitter_update_with_media');

var tuwm = new twitter_update_with_media({
  consumer_key: '...',
  consumer_secret: '...',
  token: '...',
  token_secret: '...'
});

// Get a random element from an array
function getRandIndex(array) {
  var index = Math.floor(array.length*Math.random());
  return array[index];
}

// Get a random slogan
function getRandSlogan() {
  slogans = [
  '...',
  '...',
  '...'
  ];
  var slogan = getRandIndex(slogans);
  return slogan;
}

// Get a random meme image
function getRandMeme() {
  memes = [
  '...',
  '...',
  '...'
  ];
  var meme = getRandIndex(memes);
  return meme;
}

function produceLulz() {
	tuwm.post( getRandSlogan(), getRandMeme(), function(err, response) {
		if (err) {
			console.log(err);
		}
		console.log('success!');
	});
}

produceLulz();

// ...and then every 2 hours after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 120
setInterval(produceLulz, 1000 * 60 * 120);

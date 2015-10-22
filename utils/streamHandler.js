var config = require('./config');

module.exports = function(stream, io){
  stream.on('data', function(data) {

    var blueKeyword = new RegExp(config.keywords.blue,'i');
    var blackKeyword = new RegExp(config.keywords.black,'i');

    console.log(data['text']);
    console.log('_');

    var tweet = {
      twid: data['id'],
      id_str: data['id_str'],
      author: data['user']['name'],
      avatar: data['user']['profile_image_url'],
      body: data['text'],
      screenname: data['user']['screen_name'],
      blueKeyword: blueKeyword.test(data['text']),
      blackKeyword: blackKeyword.test(data['text'])
    };

    io.emit('tweet', tweet);
  });
};

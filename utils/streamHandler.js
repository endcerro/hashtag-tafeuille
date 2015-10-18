var config = require('./utils/config');

module.exports = function(stream, io){
  stream.on('data', function(data) {
    var blueKeyword = data['text'].indexOf(config.keywords.blue) > -1;
    var redKeyword = data['text'].indexOf(config.keywords.red) > -1;

    console.log(data['text']);
    console.log('_');

    var tweet = {
      twid: data['id'],
      author: data['user']['name'],
      avatar: data['user']['profile_image_url'],
      body: data['text'],
      date: data['created_at'],
      screenname: data['user']['screen_name'],
      blueKeyword: blueKeyword,
      redKeyword: redKeyword
    };

    io.emit('tweet', tweet);
  });
};

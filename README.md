# hashtag-tafeuille

### A simple Twitter Battle App
**[hashtag-tafeuille](https://github.com/MathieuDebit/hashtag-tafeuille)** is the server-side app for the **[hashtag-tafeuille-client](https://github.com/MathieuDebit/hashtag-tafeuille-client)** application, build in [Node.js](http://nodejs.org/). Developed by [Mathieu Débit](http://www.twitter.com/MathieuDebit).

### Summary
* [About](https://github.com/MathieuDebit/hashtag-tafeuille#about)
* [Getting started](https://github.com/MathieuDebit/hashtag-tafeuille#getting-started)
* [Connection to the client](https://github.com/MathieuDebit/hashtag-tafeuille#connection-to-the-client)
* [Contributing](https://github.com/MathieuDebit/hashtag-tafeuille#contributing)
* [The event](https://github.com/MathieuDebit/hashtag-tafeuille#the-event)


## About

**hashtag-tafeuille** is a simple Twitter battle app that provides in live for a counted time tweets containing certain keywords, counts them and displays the result.

![hashtag-tafeuille-client interface](http://i.imgur.com/XQHCVzp.png)

This application provides data for the [hashtag-tafeuille-client](https://github.com/MathieuDebit/hashtag-tafeuille-client) ([React.js](https://facebook.github.io/react/)) through [Socket.io](http://socket.io/).


## Getting started

> You will need Node.js to run this server. Install and configure it first: [http://nodejs.org/](http://nodejs.org/)

Clone the repo and install dependencies:

```
git clone git@github.com:MathieuDebit/hashtag-tafeuille.git
cd hashtag-tafeuille
npm install
```

Rename the `/utils/your_config.js` file by `/utils/config.js`.

You need to [add your Twitter access tokens](https://apps.twitter.com) and configure the App:

- One keyword for `black` and `blue`
- multiples keywords for `others` (optionnal)
- duration in seconds for `countdown`

```javascript
module.exports = {
  twitter: {
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  },

  keywords: {
    blue: '',
    black: '',
    others: ''
  },

  countdown:
}
```

Then start the server by running the following command:

```
node server.js
```


## Connection to the client

Once started, the server retreives public statuses from the [Twitter API](https://dev.twitter.com/streaming/reference/post/statuses/filter) that match one or more filter predicates (keywords in `/utils/config.js`).

```javascript
twit.stream('statuses/filter',{ track: keywords}, function(stream){
  streamHandler(stream, io);
});
```

It handles tweets and emits them through Socket.io on localhost:8080.

The countdown is also emited through a socket.

> Here comes the React app. visit **hashtag-tafeuille-client Github page** to learn more about the client-side of the application: [https://github.com/MathieuDebit/hashtag-tafeuille-client](https://github.com/MathieuDebit/hashtag-tafeuille-client).

## Contributing

> This project is licensed under the terms of the MIT license.

Feel free to contribute to the project by reporting and/or fixing bugs, improving code quality and adding new features.

1. Fork repository
2. Create a branch following a [successfull branching model](http://nvie.com/posts/a-successful-git-branching-model/)
3. Write your feature/fix
4. Pull request

Consider this project as a beta version, a first step towards a more robust application, and especially more general (detached from the #TaFeuille event). If you want to rewrite this application with me, develop a real API linked to a dynamic client app, poke me at **mathieu.debit@gmail.com**.

## The event
**#TaFeuille** event, initiated by [Valentin Galmand](http://www.twitter.com/vgalmand), took place in Bordeaux (France) during the [Vibration Urbaine Festival](http://vibrations-urbaines.net) in October 2015.

> 16 artists will compete on an improvisation drawing battle with the only tool a black marker. For a counted time, they will draw on a theme chosen by lot to be then submitted to a vote of two juries and a public vote through Twitter.

See the Facebook event [here](https://www.facebook.com/events/620625374706794/).

![hashtag-tafeuille-client scoreboard](http://i.imgur.com/g34m1cr.png)

---
Made with ♥ by [Mathieu Débit](http://www.twitter.com/MathieuDebit).

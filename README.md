# hashtag-tafeuille

**hashtag-tafeuille** is a Twitter Battle App build with Node.js for the #TaFeuille event.

Two teams are fighting : Black vs Blue. Each team has a dedicaded keyword, and people tweets with the keyword to give a point.
The app streams tweets depending on those keywords, and count them to award the winner.

This is the server-side App, that provides data to a client-side App through Socket.io.

# Install
```
npm install
```

# Config

Rename the `/utils/your_config.js` file by `/utils/config.js`.

You need to add your Twitter access tokens and configure the App:

- One keyword for `black` and `blue`
- multiples keywords for `others` (optionnal)
- duration in seconds for `countdown`

```
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

# Run
```
node server.js
```
Then connect the client App via Socket.io on http://localhost:8080/.

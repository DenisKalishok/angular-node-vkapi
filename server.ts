/**
 * Created by denis on 05.02.2017.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');

// Get routes
const friends = require('./routes/friends');
const newsfeed = require('./routes/newsfeed');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/friends', friends);
app.use('/newsfeed', newsfeed);

// Catch all other routes and return the index file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(config.port, function() {
  console.log('API running on localhost:' + config.port);
});

//https://oauth.vk.com/authorize?client_id=5812520&display=popup&scope=friends,photos,audio,video,pages,status,notes,messages,wall,ads,offline,docs,groups,notifications,stats,email,market&response_type=token&v=5.62

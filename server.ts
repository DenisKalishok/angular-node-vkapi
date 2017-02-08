const express = require('express');
const path = require('path');
const config = require('./config');

// Get routes
const users = require('./routes/users');
const friends = require('./routes/friends');
const newsfeed = require('./routes/newsfeed');

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.use('/users', users);
app.use('/friends', friends);
app.use('/newsfeed', newsfeed);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(config.port, function() {
  console.log('API running on localhost:' + config.port);
});

//https://oauth.vk.com/authorize?client_id=5812520&display=popup&scope=friends,photos,audio,video,pages,status,notes,messages,wall,ads,offline,docs,groups,notifications,stats,email,market&response_type=token&v=5.62

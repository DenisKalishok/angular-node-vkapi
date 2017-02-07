/**
 * Created by denis on 05.02.2017.
 */

const express = require('express');
const bodyParser = require('body-parser');
const vksdk = require('vksdk');
const router = express.Router();
const config = require('../config');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const vkapi = new vksdk({
  'appId'     : config.vk.appId,
  'appSecret' : config.vk.appSecret,
  'https' : true,
  'version' : 5.62,
  'secure' : true,
  'lang' : 'ru'
});

vkapi.setToken(config.vk.accessToken);

router.get('/', function(req, res) {

  vkapi.request('friends.get', {'user_id': config.vk.userId, 'fields': 'photo_100,online,last_seen', 'order': 'name'}, function(_o) {
    res.setHeader('Content-Type', 'application/json');
    res.json(_o.response);
  });
});

router.post('/:id', function(req, res) {

  vkapi.request('friends.add', {'user_id' :  req.params.id}, function(_o) {
    res.setHeader('Content-Type', 'application/json');
    res.json(_o.response);
  });
});

router.delete('/:id', function(req, res) {

  vkapi.request('friends.delete', {'user_id' :  req.params.id}, function(_o) {
    res.setHeader('Content-Type', 'application/json');
    res.json(_o.response);
  });
});

module.exports = router;

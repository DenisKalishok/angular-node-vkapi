/**
 * Created by Пользователь on 06.02.2017.
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

  vkapi.request('newsfeed.get', {'count': 10}, function(_o) {
    res.setHeader('Content-Type', 'application/json');
    res.json(_o.response);
  });
});

module.exports = router;

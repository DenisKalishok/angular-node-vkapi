const express = require('express');
const bodyParser = require('body-parser');
const vksdk = require('vksdk');
const router = express.Router();
const config = require('../config');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const vkapi = new vksdk({
  'appId'     : config.vk.appId,
  'appSecret' : config.vk.appSecret,
  'https' : true,
  'version' : 5.62,
  'secure' : true,
  'lang' : 'ru'
});

vkapi.setToken(config.vk.accessToken);

let fields = "nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities";

router.get('/', function(req, res) {

  vkapi.request('friends.get', {'user_id': config.vk.userId, 'fields': fields, 'order': 'name'}, function(_o) {
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

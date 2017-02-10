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

let fields = "photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, lists, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, wall_comments, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me";

router.post('/:id?', function(req, res) {
  vkapi.request('users.get', {'user_ids': '72546667, 123991392', 'fields': fields}, function(_o) {
    res.setHeader('Content-Type', 'application/json');
    res.json(_o.response);
  });
});

module.exports = router;


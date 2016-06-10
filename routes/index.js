'use strict';

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const endpoints = [];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'PWA Sample' });
});

router.get('/about', (req, res) => {
  res.render('about', {});
});

router.post('/registration', (req, res) => {
  const endpoint = req.endpoint;

  endpoints.push(endpoint);

  fetch('https://android.googleapis.com/gcm/send', {
    headers: {
      Authorization: 'key=AIzaSyCf9HcLQYkyVwwKUssgpqEc6BEHooNrtWs',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      registrationIds : [endpoint]
    })
  });

  res.end();
});

module.exports = router;

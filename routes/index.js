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
  const endpoint = req.body.endpoint;

  endpoints.push(endpoint);
  console.log(endpoint);

  const body = JSON.stringify({
    'registration_ids' : [endpoint]
  });
  console.log(body);

  fetch('https://android.googleapis.com/gcm/send', {
    method: 'POST',
    headers: {
      Authorization: 'key=AIzaSyCf9HcLQYkyVwwKUssgpqEc6BEHooNrtWs',
      'Content-Type': 'application/json'
    },
    body: body
  })
      .then(res => {
        console.log(res.status);
        return res.text();
      })
      .then(text => console.log(text));

  res.end();
});

module.exports = router;

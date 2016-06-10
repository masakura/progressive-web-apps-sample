'use strict';

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const endpoints = [];
let message;

function send(ids) {
  const body = JSON.stringify({
    'registration_ids' : ids
  });
  console.log(body);

  return fetch('https://android.googleapis.com/gcm/send', {
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
      .then(text => {
        console.log(text);
        return text;
      });

}

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'PWA Sample' });
});

router.get('/about', (req, res) => {
  res.render('about', {});
});

router.get('/message', (req, res) => {
  res.send({ message: message });
});

router.post('/registration', (req, res) => {
  const endpoint = req.body.endpoint;

  endpoints.push(endpoint);
  console.log(endpoint);

  message = 'registration';
  send([endpoint]);

  res.end();
});

router.post('/notification', (req, res) => {
  message = req.body.message;

  send(endpoints);

  res.end();
})

module.exports = router;

/*
 * File: index.js
 * Project: search-movies
 * File Created: Thursday, 21st October 2021 12:04:36 pm
 * Author: Ananda Yudhistira (anandabayu12@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 2:09:20 pm
 * Modified By: Ananda Yudhistira (anandabayu12@gmail.com>)
 * -----
 * Copyright 2021 Ananda Yudhistira, -
 */
const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/', async (req, res) => {
  res.send('Stockbit 👍👍👍');
});

app.get('/movies', async (req, res) => {
  const { q, page } = req.query;

  if (!q) {
    res.json({
      success: false,
      message: 'Query is empty',
    });
  }

  const response = await axios.get(`https://www.omdbapi.com`, {
    params: {
      apikey: 'faf7e5bb',
      s: q,
      page: !page ? 1 : page,
    },
  });
  res.json(response.data);
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;

  const response = await axios.get(`https://www.omdbapi.com`, {
    params: {
      apikey: 'faf7e5bb',
      i: id,
    },
  });
  res.json(response.data);
});

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ success: false, message: 'the url you access is not found!' });
});

module.exports = app;

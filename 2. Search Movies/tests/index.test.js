/*
 * File: index.test.js
 * Project: search-movies
 * File Created: Thursday, 21st October 2021 1:58:59 pm
 * Author: Ananda Yudhistira (anandabayu12@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 2:24:25 pm
 * Modified By: Ananda Yudhistira (anandabayu12@gmail.com>)
 * -----
 * Copyright 2021 Ananda Yudhistira, -
 */
const request = require('supertest');
const app = require('../index');

const params = {
  q: 'Batman',
  page: 1,
  id: 'tt4853102',
};

test(`GET Home`, async () => {
  await request(app)
    .get(`/`)
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toEqual(200);
    });
});

test(`GET List Movie: /movies`, async () => {
  await request(app)
    .get(`/movies?q=${params.q}&page=${params.page}`)
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('Search');
      expect(res.body).toHaveProperty('totalResults');
      expect(res.body).toHaveProperty('Response');
    });
});

test(`GET Detail Movie: /movies/:id`, async () => {
  await request(app)
    .get(`/movies/${params.id}`)
    .expect(200)
    .then((res) => {
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('Title');
      expect(res.body).toHaveProperty('Year');
      expect(res.body).toHaveProperty('Response');
    });
});

test(`GET 404 URL`, async () => {
  await request(app)
    .get(`/get-something`)
    .expect(404)
    .then((res) => {
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message');
    });
});

/*
 * File: index.js
 * Project: 1. Database Query
 * File Created: Thursday, 21st October 2021 11:01:48 am
 * Author: Ananda Yudhistira (anandabayu12@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 11:43:55 am
 * Modified By: Ananda Yudhistira (anandabayu12@gmail.com>)
 * -----
 * Copyright 2021 Ananda Yudhistira
 */
const { Client } = require('pg');
const client = new Client(
  'postgres://postgres:FondasiFAN@34.101.182.67:5432/stockbit'
);

client.connect();

async function getData() {
  const res = await client.query(
    'select a.id, a.username, b.username as ParentUserName from users a left join users b on a.parent = b.id',
    []
  );
  console.table(res.rows);
  client.end();
}

getData();

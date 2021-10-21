/*
 * File: server.js
 * Project: search-movies
 * File Created: Thursday, 21st October 2021 2:07:43 pm
 * Author: Ananda Yudhistira (anandabayu12@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 2:09:23 pm
 * Modified By: Ananda Yudhistira (anandabayu12@gmail.com>)
 * -----
 * Copyright 2021 Ananda Yudhistira, -
 */
const app = require('./index');
const port = 3000;

app.listen(port, () => {
  console.log(`Search Movies app listening at http://localhost:${port}`);
});

/*
 * File: server.js
 * Project: search-movies
 * File Created: Thursday, 21st October 2021 2:07:43 pm
 * Author: Ananda Yudhistira (anandabayu12@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 3:02:17 pm
 * Modified By: Ananda Yudhistira (anandabayu12@gmail.com>)
 * -----
 * Copyright 2021 Ananda Yudhistira, -
 */
const app = require('./index');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Search Movies app listening at http://localhost:${port}`);
});

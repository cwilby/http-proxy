const express = require('express');
const morgan = require('morgan')
const axios = require('axios');

const app = express();

app.use(morgan('dev'));

app.get('/', async (req, res) => {
  try {
    const { ip, path, ...query } = req.query;

    const params = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');

    const response = await axios.get(`http://${ip}/${path}${params ? `?${params}` : ''}`);

    res.status(response.status);
    res.send(response.data);
  } catch (e) {
    res.status(500);
    res.send(`Error: ${e.message}`);
  }
});

app.listen(9001, () => console.log('Server listening on http://0.0.0.0:9001'));

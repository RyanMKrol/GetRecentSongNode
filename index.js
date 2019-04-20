import LastFmApi from './src/js/LastFmApi'

const express = require('express')
const app = express();

app.get('/:apiKey/:userId', (req, res) => {
  const api = new LastFmApi(req.params.apiKey, req.params.userId)
  api.fetchCurrentSong().then((data) => {
    res.send(data)
  }).catch((error) => {
    res.send(error.message)
  })
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

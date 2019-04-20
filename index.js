import axios from 'axios'
import config from './config.json'

const username = config.username
const apiKey = config.apiKey

const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`

axios.get(apiUrl).then((data) => {
  const songName = data.data.recenttracks.track[0].name
  const artistName = data.data.recenttracks.track[0].artist['#text']

  console.log(`//  Song: "${songName}" - "${artistName}"`)
}).catch(() => {
  throw new Error('Could not get a response from SongKick')
})

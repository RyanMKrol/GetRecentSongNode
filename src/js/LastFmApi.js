import axios from 'axios'

class LastFmApi {
  constructor(apiKey, user) {
    this.url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json`
  }

  fetchCurrentSong() {
    return new Promise((resolve, reject) => {
      if (!this.url) {
        reject(new Error('Do not have a url to get data from'))
      }

      axios.get(this.url).then((data) => {
        const artistName = data.data.recenttracks.track[0].artist['#text']
        const songName = data.data.recenttracks.track[0].name

        resolve(LastFmApi.formatData(artistName, songName))
      }).catch(() => {
        reject(new Error('Could not get a response from SongKick'))
      })
    })
  }

  static formatData(artist, song) {
    return `//  Song: "${song}" - "${artist}"`
  }
}

export default LastFmApi

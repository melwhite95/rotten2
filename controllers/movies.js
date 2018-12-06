// movies.js

const MovieDb = require('moviedb-promise')
const moviedb = new MovieDb('f979649e648ec04cd30b4b3d8af03299
')

app.get('/', (req, res) => {
  moviedb.miscNowPlayingMovies().then(response => {
    res.render('movies-index', { movies: response.results });
  }).catch(console.error)
})

//show

router.get('/movies/:id', (req, res) => {
  moviedb.movieInfo({ id: req.params.id }).then(movie => {
    moviedb.movieTrailers({ id: req.params.id }).then(videos => {
      movie.trailer_youtube_id = videos.youtube[0].source
      console.log('VIDEOS.TRAILER_YOUTUBE_ID', videos.trailer_youtube_id)

      res.render('movies-show', { movie: movie });
    }).catch(console.error);
  }).catch(console.error);
});
    res.render('movies-show', { movie: movie });
  }).catch(console.error)
})

module.exports = function(app) {

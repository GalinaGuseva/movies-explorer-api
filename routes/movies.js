const router = require('express').Router();
const { valNewMovie, valMovieId } = require('../middlewares/validation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', valNewMovie, createMovie);
router.delete('/movies/:_id', valMovieId, deleteMovie);

module.exports = router;

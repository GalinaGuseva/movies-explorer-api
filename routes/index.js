const router = require('express').Router();
const NotFoundError = require('../middlewares/errors/not-found-err');
const auth = require('../middlewares/auth');
const { login, createUser, logout } = require('../controllers/user');
const { register, signin } = require('../middlewares/validation');
const user = require('./user');
const movies = require('./movies');

router.post('/signin', signin, login);
router.post('/signup', register, createUser);
router.post('/signout', logout);

router.use(auth);
router.use(user);
router.use(movies);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;

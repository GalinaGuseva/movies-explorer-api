const { celebrate, Joi } = require('celebrate');

const { patternUrl } = require('../utils/constants');

const register = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().required().min(2).max(30),
  }),
});

const signin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const valUpdateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

const valNewMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(patternUrl),
    trailerLink: Joi.string().required().pattern(patternUrl),
    thumbnail: Joi.string().required().pattern(patternUrl),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const valMovieId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().required().length(24),
  }),
});

module.exports = {
  register,
  signin,
  valUpdateUser,
  valNewMovie,
  valMovieId,
};

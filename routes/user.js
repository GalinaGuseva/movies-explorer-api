const router = require('express').Router();
const {
  getUser,
  updateUser,
} = require('../controllers/user');
const { valUpdateUser } = require('../middlewares/validation');

router.get('/users/me', getUser);
router.patch('/users/me', valUpdateUser, updateUser);

module.exports = router;

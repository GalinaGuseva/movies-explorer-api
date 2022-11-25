const router = require('express').Router();
const {
  getUser,
  updateUser,
} = require('../controllers/user');
const { valUpdateUser } = require('../middlewares/validation');

router.get('/me', getUser);
router.patch('/me', valUpdateUser, updateUser);

module.exports = router;

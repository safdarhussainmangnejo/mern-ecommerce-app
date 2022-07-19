const express = require('express');
const router = express.Router();
const { signupController, signinController, displayUsersController } = require('../Controllers/UserControler');

router.post('/signup', signupController);
router.post('/signin', signinController);
router.get('/users', displayUsersController);

module.exports = router;

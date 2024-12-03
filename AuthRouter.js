const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middleware/AuthValidation');

const express = require('express');
const router = express.Router();
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;

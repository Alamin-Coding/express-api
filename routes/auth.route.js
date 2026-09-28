const express = require('express');

const router = express.Router();
const { profile, registration, login } = require('../controllers/auth.controller')

router.get('/profile', profile)
router.post('/registration', registration)
router.post('/login', login)


module.exports = router;
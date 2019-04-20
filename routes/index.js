const express = require('express');
const router = express.Router();
const userController = require('../controller/indexController');

router.get('/', (req, res, next) => res.render('index', userController.index()));

router.get('/about', (req, res, next) => res.send('created from Jongho Lee'));

module.exports = router;

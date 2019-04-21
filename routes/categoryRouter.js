const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

router.get('/', categoryController.getCategories);


module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');

router.get('/', controller.renderHomepage)
router.post('/', controller.getWeather)

module.exports = router;
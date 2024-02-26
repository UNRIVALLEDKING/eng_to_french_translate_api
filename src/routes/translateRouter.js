const express = require('express');
const { translateController } = require('../controller/translateController');

const router = express.Router();

router.post('/', translateController);

module.exports = router;

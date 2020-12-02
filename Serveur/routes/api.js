const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

//definir controller
let controller = require('../controller/Controller');

// defintion route
router.use(bodyParser.json());

router.get('/', controller.index);

module.exports = router;

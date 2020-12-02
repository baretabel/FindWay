var express = require('express');
var router = express.Router();
//definir controller
var controller = require('../controller/Controller');
// defintion route
router.get('/', controller.index);
module.exports = router;
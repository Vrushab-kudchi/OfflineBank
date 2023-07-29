var express = require('express');
var router = express.Router();
var memberController = require('../Controller/memberController');


router.get('/add', memberController.getAdd);
router.post('/add', memberController.postAdd);

router.get('/edit', memberController.getEdit);


router.get('/', memberController.Members);

module.exports = router;

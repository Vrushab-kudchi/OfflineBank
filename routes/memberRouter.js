var express = require('express');
var router = express.Router();
var memberController = require('../Controller/memberController');


router.get('/add', memberController.getAdd);
router.post('/add', memberController.postAdd);

router.get('/edit/:id', memberController.getEdit);
router.post('/edit', memberController.postEdit);


router.get('/', memberController.Members);

module.exports = router;

var express = require('express');
var router = express.Router();
const directorController = require('../Controller/directorController');

router.get('/add', directorController.getAdd);
router.post('/add',directorController.postAdd);

router.get('/edit/:id',);
router.post('/edit', );


router.get('/', directorController.director);


module.exports = router;

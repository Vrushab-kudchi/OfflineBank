var express = require('express');
var router = express.Router();
var branchController=require('../Controller/branchController')

router.get('/add', branchController.add);
router.post('/add', branchController.addPost);


router.get('/edit/:id', branchController.edit);
router.post('/edit', branchController.postedit);

router.get('/', branchController.branch);

module.exports = router;

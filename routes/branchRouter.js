var express = require('express');
var router = express.Router();

router.get('/add', (req, res) => {
    res.render('Branch/addBranch');
});

router.get('/edit', (req, res) => {
    res.render('Branch/editBranch');
});


router.get('/', (req, res) => {
    res.render('Branch/branch');
});

module.exports = router;

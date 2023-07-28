var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.send("main");
});

router.get('/add', function (req, res) {
    res.render('./members/addMember');
})

router.get('/edit', function (req, res) {
    res.render('./members/editMember');
})

module.exports = router;

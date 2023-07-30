var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Saving Account

router.get('/saving/add', (req, res) => {
  res.render('Savings/addSaving');
})

router.get('/saving/edit', (req, res) => {
  res.render('Savings/editSaving');
})

router.get('/saving', (req, res) => {
  res.render('Savings/saving');
})

//FD
router.get('/fd/add', (req, res) => {
  res.render('FD/addFD');
})

router.get('/fd/edit', (req, res) => {
  res.render('FD/editFD');
})

router.get('/fd', (req, res) => {
  res.render('FD/FD');
})

//MIS
router.get('/mis/add', (req, res) => {
  res.render('MIS/addMIS');
})

router.get('/mis/edit', (req, res) => {
  res.render('MIS/editMIS');
})

router.get('/mis', (req, res) => {
  res.render('MIS/MIS');
})

//PIGMY
router.get('/pigmy/add', (req, res) => {
  res.render('Pigmy/addPigmy');
})

router.get('/pigmy/edit', (req, res) => {
  res.render('Pigmy/editPigmy');
})

router.get('/pigmy', (req, res) => {
  res.render('Pigmy/pigmy');
})

module.exports = router;

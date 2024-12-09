const express = require('express');
const router = express.Router();
const exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET history page */

module.exports = router;

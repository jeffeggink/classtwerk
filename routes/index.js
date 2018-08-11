var express = require('express');
var router = express.Router();
var tabledata = require('../data/tableData')
var waitingdata = require('../data/tableData')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { tabledata:tabledata, waitingdata:waitingdata});
});
router.post('/api/adduser', function(req, res) {
 var user = req.body
 if (tabledata.length >= 5){
  waitingdata.push (user)
 }
 else {
  tabledata.push (user)
 }
 res.redirect('/');
});


module.exports = router;

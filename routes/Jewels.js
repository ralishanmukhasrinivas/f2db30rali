var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Jewels', { title: 'Search Results Jewels' });
});
var express = require('express');
const Jewels_controlers= require('../controllers/Jewels');
var router = express.Router();
/* GET costumes */
router.get('/', Jewels_controlers.Jewels_view_all_Page );
router.get('/Jewels/:id', Jewels_controlers.Jewels_detail); 
module.exports = router;
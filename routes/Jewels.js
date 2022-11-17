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
// GET request for one Jewels.
router.get('/Jewels/:id', Jewels_controlers.Jewels_detail);
/* GET detail Jewels page */
router.get('/detail', Jewels_controlers.Jewels_view_one_Page);
/* GET create Jewels page */
router.get('/create', Jewels_controlers.Jewels_create_Page);
/* GET create update page */
router.get('/update', Jewels_controlers.Jewels_update_Page);
/* GET delete Jewels page */
router.get('/delete', Jewels_controlers.Jewels_delete_Page);
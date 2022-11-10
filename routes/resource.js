var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Jewels_controller = require('../controllers/Jewels');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Jewels', Jewels_controller.Jewels_create_post);
// DELETE request to delete Costume.
router.delete('/Jewels/:id', Jewels_controller.Jewels_delete);
// PUT request to update Costume.
router.put('/Jewels/:id', Jewels_controller.Jewels_update_put);
// GET request for one Jewels.
router.get('/Jewels/:id', Jewels_controller.Jewels_detail);
// GET request for list of all Jewels items.
router.get('/Jewels', Jewels_controller.Jewels_list);
module.exports = router;
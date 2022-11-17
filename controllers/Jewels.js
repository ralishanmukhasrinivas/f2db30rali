var Jewels = require('../models/Jewels');
// List of all Costumes
exports.Jewels_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Jewels list');
};
// for a specific Costume.
/*exports.Jewels_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Jewels detail: ' + req.params.id);
};*/

// for a specific Costume. 
exports.Jewels_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Jewels.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Costume create on POST.
exports.Jewels_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Jewels create POST');
};
// Handle Costume delete form on DELETE.
exports.Jewels_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Jewels delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Jewels_update_put = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Jewels update PUT' + req.params.id);
 console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Jewels.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Jewels_name)  
               toUpdate.Jewels_name = req.body.Jewels_name; 
        if(req.body.Jewels_size)
         toUpdate.Jewels_size = req.body.Jewels_size; 
        if(req.body.Jewels_type)
         toUpdate.Jewels_type = req.body.Jewels_type; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};
// VIEWS

   // List of all Costumes
exports.Jewels_list = async function(req, res) {
    try{
    theJewels = await Jewels.find();
    res.send(theJewels);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Jewels_view_all_Page = async function(req, res) {
    try{
    theJewels = await Jewels.find();
    res.render('Jewels', { title: 'Jewels Search Results', results: theJewels });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Jewels_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Jewels();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Jewels_name = req.body.Jewels_name;
    document.Jewels_size = req.body.Jewels_size;
    document.Jewels_type = req.body.Jewels_type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}
// Handle Jewels delete on DELETE.
exports.Jewels_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Jewels.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.Jewels_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Jewels.findById( req.query.id)
    res.render('Jewelsdetail',
    { title: 'Jewels Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a Jewels.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Jewels_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Jewelscreate', { title: 'Jewels Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a Jewels.
// query provides the id
exports.Jewels_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Jewels.findById(req.query.id)
    res.render('Jewelsupdate', { title: 'Jewels Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.Jewels_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Jewels.findById(req.query.id)
    res.render('Jewelsdelete', { title: 'Jewels Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
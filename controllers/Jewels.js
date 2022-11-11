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
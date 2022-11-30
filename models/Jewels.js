const mongoose = require("mongoose")
const JewelsSchema = mongoose.Schema({
Jewels_name: {
    type:String,
    required:true
},
Jewels_size: {
    type:Number,
    min:1,max:155
    
},
Jewels_type: {
    type:String,
    required:true
}
})
module.exports = mongoose.model("Jewels",JewelsSchema)


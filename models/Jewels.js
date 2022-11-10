const mongoose = require("mongoose")
const JewelsSchema = mongoose.Schema({
Jewels_name: String,
Jewels_size: Number,
Jewels_type: String
})
module.exports = mongoose.model("Jewels",JewelsSchema)


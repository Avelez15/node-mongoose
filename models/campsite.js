const mongoose = require('mongoose');
const Schema = moongoose.schema;

//below is used to create a schema, creating configurations for the doc.
const campsiteSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    }
}, {
    timestamps:true,

});
//second optional argument is used to set configuration options
//below creates a model, const must be capitalized and name string must be the same, second argument must be schema you wish to use.

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports =  Campsite;
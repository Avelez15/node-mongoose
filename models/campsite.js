const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//below is used to create a schema, creating configurations for the doc.
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    //below causes every campsite document to have multiple comment documents stored within an array.
    comments: [commentSchema]
}, {
    timestamps: true
});
//second optional argument is used to set configuration options
//below creates a model, const must be capitalized and name string must be the same, second argument must be schema you wish to use.

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;
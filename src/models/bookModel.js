const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( { 

    name:String,
    author_id:{
        type:String,
        required:true

    },
    price:Number,
    ratings:Number
},

 { timestamps: true });


module.exports = mongoose.model('Write', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

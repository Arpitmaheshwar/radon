const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema( { 
    author_id:{
        type:String,
        unique:true,
        required:true
    },
    author_name:String,
    age:Number,
    address:String,
},

 { timestamps: true });


module.exports = mongoose.model('Author', AuthorSchema) //users
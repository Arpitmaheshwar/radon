const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    year:String,
    // category: {
    //     type: String,
    //     enum: ["histrory","economics","biography"] //"falana" will give an error
    // },
    
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users




// String, Number
// Boolean, Object/json, array
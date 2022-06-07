const { count } = require("console")
const bookcollModel = require("../models/bookcoll Model")
// const bookcollection= require("../models/bookcoll Model")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     res.send({msg: allBooks})
// }

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await bookcollModel.create(data)
    res.send({msg: savedData})
}

const getbookcollection = async function(req, res){

     let AllBooks= await bookcollModel.find()
     res.send({msg:AllBooks})
}

    const booklist = async function(req,res){
    let books = await bookcollModel.find().select( { bookName: 1, authorName: 1, _id: 0})

        res.send({msg:books})
   }

    const getBooksInYear = async function(req,res){
    let year = req.body.year
    let Bookyear = await bookcollModel.find({year:year})

    res.send({msg:Bookyear})


    }

    const getParticularBooks = async function(req,res){
    let condition = req.body
    let output= await bookcollModel.find(condition)

        res.send({msg:output})
    }

    const getRandomBooks = async function(req,res){

    let Randombook = await bookcollModel.find( { $or:[{stockAvailable:true},{ totalPages:{$gt :500}}] } )

            res.send({msg:Randombook})
    }
 
    const getXINRBooks = async function(req,res){

    let bookss = await bookcollModel.find( {"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})

        res.send({msg:bookss})
    }

     



module.exports.createBooks= createBooks
module.exports.getBookscollection= getbookcollection
module.exports.booklist= booklist
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getRandomBooks =getRandomBooks 
module.exports.getXINRBooks=getXINRBooks
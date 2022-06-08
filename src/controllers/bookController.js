
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/Authormodel")



const createBooks = async function(req,res){
    let data= req.body
   let savedData= await BookModel.create(data)
   res.send({msg: savedData})

}

const createauthor = async function(req,res){
    let data = req.body
    let Allauthor = await AuthorModel.create(data)
    res.send({msg:Allauthor})
}

const getbyname = async function(req,res){

    let Allauthor = await AuthorModel.findOne({author_name:"Chetan Bhagat"})
    let books1 = await BookModel.find({ author_id:Allauthor.author_id})
    res.send({msg:books1})

}

const getbyname1 = async function(req,res){
    let Allauthor1 = await BookModel.findOneAndUpdate({bookName:"Two states"},{$set :{price:"100"}}, { new: true})
    console.log(Allauthor1)
    let books = await AuthorModel.findOne({ author_id:Allauthor1.author_id})
    console.log(books)
    res.send({msg:[books.author_name,Allauthor1.price]})
}

const costbook = async function(req,res){

    let Allbook = await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
    let books1 = await AuthorModel.find()
}

module.exports.createBooks = createBooks
module.exports.createauthor = createauthor
module.exports.getbyname = getbyname
module.exports.getbyname1 = getbyname1
module.exports.costbook = costbook



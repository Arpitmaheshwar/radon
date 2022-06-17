const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      console.log(req.newAtribute);
      res.send({ msg: savedData });
    } else {
      res.status(400).send({ msg: "Bad request" })
    }

  } catch (error) {

    console.log(error.message)
    res.status(500).send({ msg: error.message })

  }

};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });

    if (!user)
      return res.status(400).send({msg:"Bad request"})

      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "radon",
          organisation: "FunctionUp",
        },
        "functionup-radon"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, token: token });
  
    } catch (error) {
      res.status(500).send(error.message)
  
    }
      
} 
  
  

       


      
  
    

  const getUserData = async function (req, res) {
    try {

      let userId = req.params.userId;
      console.log(userId)
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.status(400).send({ msg: "No such user exists" });
      res.status(201).send({ data: userDetails });
      
    } catch (error) {
        res.status(500).send({msg:error.name})
    }
 

  };

  const updateUser = async function (req, res) {
    try {
      let userId = req.params.userId;
      let user = await userModel.findById(userId);
      if (!user) {
        return res.status(400).send("No such user exists");
      }
      let userData = req.body;
      if(Object.keys(userData).length!=0){
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
      res.status(201).send({ data: updatedUser });
      }
      else{
        res.status(400).send({msg:"bad request"})
      } 
    } catch (error) {

      res.status(500).send({msg:error.name})
      
    }
   
  };


  const deleteUser = async function (req, res) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
    let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true, upsert: true });
    res.send({ status: deleteUser, data: deleteUser });
  };


  const postMessage = async function (req, res) {
    try {
      let message = req.body.message

      if(Object.keys(message)!=0){
      let user = await userModel.findById(req.params.userId)
      if (!user) return res.status(400).send({  msg: 'No such user exists' })
  
      let updatedPosts = user.posts
      //add the message to user's posts
      updatedPosts.push(message)
      let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
      //return the updated user document
      return res.status(201).send({  data: updatedUser })
      }
      else{
        res.status(400).send({msg:"bad request"})
      }

    } catch (error) {
          res.status(500).send({msg:error.name})
    }
   

  }

  module.exports.createUser = createUser;
  module.exports.getUserData = getUserData;
  module.exports.updateUser = updateUser;
  module.exports.loginUser = loginUser;
  module.exports.deleteUser = deleteUser;
  module.exports.postMessage = postMessage;












const jwt = require("jsonwebtoken");

const mid1 = async function (req, res, next) {

  try {

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];


    if (!token) return res.status(401).send({ msg: "token must be present" });

    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-radon");
   
    console.log(decodedToken)

    next()

  } catch (error) {

    res.status(500).send({ msg: error.name })

  }


}

const mid2 = async function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"]
    if (!token) return res.status(400).send({ msg: "token must be present in the request header" })

    let decodedToken = jwt.verify(token, 'functionup-radon')

    if (!decodedToken) return res.status(400).send({ msg: "token is not valid" })

    let userToBeModified = req.params.userId
    //userId for the logged-in user

    let userLoggedIn =decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn) return res.status(403).send({ msg: 'User logged is not allowed to modify the requested users data' })

    next()

  } catch (error) {

    res.status(500).send({msg:error.message})

  }




}
module.exports.mid1 = mid1
module.exports.mid2 = mid2
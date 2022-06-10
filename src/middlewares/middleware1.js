const moment = require('moment');

let datetobelogged = function (req,res,next){
    let logged = moment().format('MMMM Do YYYY, h:mm:ss a');
    let ip = req.ip
    let path = req.path
    console.log("${logged} ${ip} ${path}")
    next()
}

module.exports.datetobelogged = datetobelogged
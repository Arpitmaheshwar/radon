const endpoint = "https://www.functionup.org"
const batch = "radon"

const print = function() {
    let date = new Date()
//    let printDate = date.getDate()
//    let printmonth = date.getMonth()
//     console.log(`Radon: date ${printDate} month ${printmonth+1} `)
    console.log(date)
 }

const batchinfo = function(){
    console.log('Radon, w3,D3,The Topic For Today is Nodejs Module System')
}


module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.print = print
module.exports.batchinfo= batchinfo
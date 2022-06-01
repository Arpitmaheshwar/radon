const endpoint = "https://www.functionup.org"
const batch = "radon"

const greet = function() {
    const greeting = "    funcationup    "
    console.log(greeting.trim())
    console.log(greeting.toLowerCase())
    console.log(greeting.toUpperCase())
}

module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.greet= greet
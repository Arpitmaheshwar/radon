// 2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get 
// api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues)
//  => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys
//   => save the key/appid somewhere. Now proceed further
// Create API's to do each of the following:
//                     - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
//                     - then change the above to get the temperature only( of London)
//                     - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
//                     result should look something like this
//                     [//                     {city:"London", temp: 280},
//                     {city:"Moscow", temp: 290},
//                     {city:"Bangalore", temp: 301.2},
//                     .......
//                     ]




let axios = require("axios")

let sortedcities = async function (req, res) {

    try {

        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]

        let sortcities = []
        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let obj1 = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=73150a72586d84747479b28f5c1cfd46`)
            console.log(obj1.data.main.temp)
            obj.temp = obj1.data.main.temp
            sortcities.push(obj)

        }

        let sorted = sortcities.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)

        res.status(200).send({ msg: sorted })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error })

    }
}
module.exports.sortedcities = sortedcities
















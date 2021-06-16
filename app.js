0987667890=-09876const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
//console.log(process.argv)
const address = process.argv[2]

if (!address) {
    console.log('Please Provide an address')
}
else if (process.argv.length > 3) {
    console.log('if address include space please wrap them inside quotes')
}
else {
    geocode(address, (error, data) => {
        if(error) {
            console.log('Error', error)
            return
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error) {
                console.log('Error', error)
                return
            }
            console.log(data.location)
            console.log(forecastData)
          })
    })
}







const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const port = 4000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const city = req.body.cName;
    const apiKey = "e92abdd13d52f0e6fc01ae03abff3ec3";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey +"&units=" + unit


    https.get(url, function (response){
        console.log(response.statusCode);

        response.on("data", function (data){
            const wData = JSON.parse(data);
            const temp = wData.main.temp;
            const wDescription = wData.weather[0].description;

            const humidity = wData.main.humidity;
            const speed = wData.wind.speed;
            const pressure = wData.main.pressure;

            const icon = wData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<h3>The weather is " + wDescription + "</h3>");
            res.write("<h1>The temperature in " + city + "is " + temp + " degrees Celcius </h1>");

            res.write("<h1> The humidity in"  + city +  " is " + humidity + " % </h1>");
            res.write("<h1>The speed of wind in"  + city +  " is " + speed + "m/s </h1>");
            res.write("<h1>The pressure in " + city + " is " + pressure + "hpa </h1>");

            res.write("<img src=" + imageURL + ">");

            res.send();

        })

    })

})

app.listen(port, function() {
    console.log(`Example app listening on port http://localhost:${port}`)
})


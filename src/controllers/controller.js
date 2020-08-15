const axios = require('axios');
const API_KEY = 'ead2f397d6598c9dbfdcff98e4ea19b4';

const Weather = require('../model/Weather')

exports.renderHomepage = (req, res) => {
    res.render('index');
}

exports.getWeather = (req, res) => {
    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${API_KEY}&units=metric`
    
    const weather = new Weather(req.body.city);
    weather.validateUserInput();

    if(weather.errors.length) {
        res.render('index', {
            error: weather.errors.toString()
        })
    } else {
        axios.get(url).then((response) => {
            res.render('index', {
                weather: `It is currently ${response.data.main.temp}°C in ${response.data.name}.`
            })
        }).catch((error) => {
            console.log(error);
        })
    }
}
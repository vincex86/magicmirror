var axios = require("axios");

function getWeather() {

    return promise = new Promise(function (resolve, reject) {
        axios.get('http://api.openweathermap.org/data/2.5/weather?id=2798636&units=metric&lang=fr&APPID=7154faed4e6c91c774d55cde14192a38')
            .then(function (response) {
                resolve(JSON.parse(response.request.response));
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}

function getForecast() {
    return promise = new Promise(function (resolve, reject) {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=2798636&units=metric&lang=fr&APPID=7154faed4e6c91c774d55cde14192a38')
            .then(function (response) {
                resolve(JSON.parse(response.request.response));
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}
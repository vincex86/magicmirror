var weekday = new Array(7);
weekday[0] =  "Dimanche";
weekday[1] = "Lundi";
weekday[2] = "Mardi";
weekday[3] = "Mercredi";
weekday[4] = "Jeudi";
weekday[5] = "Vendredi";
weekday[6] = "Samedi";

function filterForecast(value) {

    var forecast = value.list;

    // filter on one forecast per day (12:00pm)
    forecast = forecast.filter(f => f.dt_txt.indexOf("12:00:00") !== -1);
    
    // get day of week from date
    forecast.forEach(function(element) {
        var d = new Date(element.dt * 1000);
        element.day = weekday[d.getDay()];
        console.log(element.day);

    }, this);
    
    console.log(forecast);

    return forecast;

}
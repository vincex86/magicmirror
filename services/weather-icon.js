function getWeatherAnimatedIcon(value) {
    
    // replace n char (for night icon) to d (for day icon) because no night icons available
    value = value.replace('n', 'd');

    switch (value) {
        case "01d": //sunny
            return '<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>';
        case "02d": // few clouds
            return '<div class="icon sun-shower"><div class="cloud"></div><div class="cloud"></div><div class="sun"><div class="rays"></div></div></div>';
        case "03d": // clouds
        case "04d": // more clouds
        case "50d": // fogs -> no animated icon found
            return '<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>';
        case "09d": //shower rain
            return '<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>';
        case "10d": // sun rain
            return '<div class="icon sun-shower"><div class="cloud"></div><div class="sun"><div class="rays"></div></div><div class="rain"></div></div>';
        case "11d": // thunderstorm
            return '<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>';
        case "13d": // snow
            return '<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>';

    }
}

function getWeatherIcon(value) {
    // replace n char (for night icon) to d (for day icon) because no night icons available
    value = value.replace('n', 'd');

    switch (value) {
        case "01d": //sunny
            return '<i class="wi wi-day-sunny"></i>';
        case "02d": // few clouds
            return '<i class="wi wi-day-sunny-overcast"></i>';
        case "03d": // clouds
            return '<i class="wi wi-day-cloudy"></i>';
        case "04d": // more clouds
            return '<i class="wi wi-cloudy"></i>';
        case "50d": // fogs 
            return '<i class="wi wi-fog"></i>';
        case "09d": //shower rain
            return '<i class="wi wi-showers"></i>';
        case "10d": // sun rain
            return '<i class="wi wi-day-showers"></i>';
        case "11d": // thunderstorm
            return '<i class="wi wi-thunderstorm"></i>';
        case "13d": // snow
            return '<i class="wi wi-snow"></i>';

    }
}
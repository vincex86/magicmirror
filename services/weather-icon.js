function getWeatherIcon(value) {
    switch (value) {
        case "01d": //sunny
            return '<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>';
        case "02d": // few clouds
            return '<div class="icon sun-shower"><div class="cloud"></div><div class="cloud"></div><div class="sun"><div class="rays"></div></div></div>';
        case "03d": // clouds
        case "04d": // more clouds
        case "50d": // frogs -> no animated icon found
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
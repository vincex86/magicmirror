function getCurrentTime() {
    var result = [];
    var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());
    //return h + ":" + m + ":" + s;
    result.push(h + ":" + m);
    result.push(s);

    return result;
}

function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

function getCurrentDate() {
    var d = new Date();
    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return d.toLocaleDateString("fr-FR", options);
}

function formatEpochDate(value) {
    var d = new Date(value * 1000);
    var options = { timeZone: 'Europe/Brussels', timeZoneName: 'short' };
    var h = checkTime(d.getHours())
    var m = checkTime(d.getMinutes())
    return h + ":" + m;
}

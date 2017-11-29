function getCurrentTime() {
    var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        s = checkTime(today.getSeconds());
    return h + ":" + m + ":" + s;
}

function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}

function getCurrentDate() {
    var d = new Date();
    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return d.toLocaleDateString("fr-FR", options);
}
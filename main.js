const launchTime = 1692291600000; // UNIX Timestamp in MS

function padNumber(number, length) {
    let output = number.toString();
    while (output.length < length) {
        output = '0' + output;
    }
    return output;
}

function changeTimer() {
    let date = new Date(launchTime - Date.now());
    document.getElementById("countdownForeground").innerText = padNumber(date.getUTCHours(), 2) + ':' + padNumber(date.getUTCMinutes(), 2) + ':' + padNumber(date.getUTCSeconds(), 2) + '.' + padNumber(date.getUTCMilliseconds(), 3);
}

setInterval(changeTimer, 1);
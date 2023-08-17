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
    document.getElementById("countdownForeground").innerText = padNumber(date.getHours(), 2) + ':' + padNumber(date.getMinutes(), 2) + ':' + padNumber(date.getSeconds(), 2) + '.' + padNumber(date.getMilliseconds(), 3);
}

setInterval(changeTimer, 1);
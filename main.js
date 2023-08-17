const launchTime = 1692291600000; // UNIX Timestamp in MS

function padNumber(number, length) {
    let output = number.toString();
    while (output.length < length) {
        output = '0' + output;
    }
    return output;
}

function changeTimer() {
    let date = new Date(Math.max(launchTime - Date.now(), 0));
    document.getElementById("countdownData").innerText = padNumber(date.getUTCHours(), 2) + ':' + padNumber(date.getUTCMinutes(), 2) + ':' + padNumber(date.getUTCSeconds(), 2) + '.' + padNumber(date.getUTCMilliseconds(), 3);
}

function loaded() {
    let date = new Date(launchTime);
    document.getElementById("localData").innerText = padNumber(date.getHours(), 2) + ':' + padNumber(date.getMinutes(), 2);

    setInterval(changeTimer, 1);
}
var timer = () => {
    let time = new Date;
    let houre = (time.getHours() % 12).toString();
    let minute = time.getMinutes().toString();
    let second = time.getSeconds().toString();
    let day = time.getDay();
    let dater = time.getMonth();
    // let years = time.getFullYear();
    let displayDay = "";
    let displayMonth = "";

    switch (day) {
        case 0:
            displayDay = "Sunday";
            break;
        case 1:
            displayDay = "Monday";
            break;
        case 2:
            displayDay = "Tuesday";
            break;
        case 3:
            displayDay = "Wednesday";
            break;
        case 4:
            displayDay = "Thursday";
            break;
        case 5:
            displayDay = "Friday";
            break;
        case 6:
            displayDay = "Saturday";
            break;
    }
    switch (dater) {
        case 0:
            displayMonth = "January";
            break;
        case 1:
            displayMonth = "February";
            break;
        case 2:
            displayMonth = "March";
            break;
        case 3:
            displayMonth = "April";
            break;
        case 4:
            displayMonth = "May";
            break;
        case 5:
            displayMonth = "June";
            break;
        case 6:
            displayMonth = "July";
            break;
        case 7:
            displayMonth = "August";
            break;
        case 8:
            displayMonth = "September";
            break;
        case 9:
            displayMonth = "October";
            break;
        case 10:
            displayMonth = "November";
            break;
        case 11:
            displayMonth = "December";
            break;
    }
    let dayters = document.getElementById("dater");
    dayters.innerHTML = displayDay + " / " + displayMonth + " / " + time.getFullYear();

    if (houre.length < 2) {
        houre = "0" + houre;
    }
    if (minute.length < 2) {
        minute = "0" + minute;
    }
    if (second.length < 2) {
        second = "0" + second;
    }
    let timers = document.getElementById("timer");
    if (time.getHours() < 12) {
        timers.innerHTML = time.getHours() + ":" + minute + ":" + second + " " + "AM";
        document.getElementById("message").innerHTML = "Good Morning";
        document.body.style.background = "url(img/morning.jpg)";
    } else {
        timers.innerHTML = time.getHours() + ":" + minute + ":" + second + " " + "PM";
        document.getElementById("message").innerHTML = "Good Afternoon";
        document.body.style.background = "url(img/afternoon.jpg)";
    }
    if (time.getHours() == 12) {
        timers.innerHTML = time.getHours() + ":" + minute + ":" + second;
    }


}
setInterval(timer, 1000);
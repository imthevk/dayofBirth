var userDay = document.querySelector("#userDay");
var userMonth = document.querySelector("#userMonth");
var userYear = document.querySelector("#userYear");

var submit = document.querySelector("#submit");
submit.addEventListener("click", function (e) {
    var message = document.querySelector("#message");
    var parseDay = parseInt(userDay.value);
    var parseMonth = (parseInt(userMonth.value) - 1);
    var parseYear = parseInt(userYear.value);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateGot = new Date(parseYear, parseMonth, parseDay);
    var weekDay = Days[dateGot.getDay()];
    var month = months[parseMonth];
    // console.log(weekDay);
    if (dateGot === undefined || month === undefined) {
        message.innerText = "";
        setTimeout(function () {
            message.innerText = "Please enter a valid Date";
        }, 500)
    }
    else {
        message.innerText = "Hey! you were born on " + dateGot + "," + month + parseDay + "," + parseYear;
    }
})


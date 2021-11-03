$(document).ready(function () {
    var nextYear = moment.tz("2021-10-02 11:00:00", "CET");

    $('#bfClock').countdown(nextYear.toDate(), function (event) {
        $(this).html(event.strftime('<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div>'));
    });
});
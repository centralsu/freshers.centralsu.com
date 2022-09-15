// On page load
window.onload = function () {

    var testPeriodStart     = new Date(Date.UTC(2020, 11, 2, 1, 5, 0));
    var testPeriodEnd       = new Date(Date.UTC(2020, 11, 2, 1, 30, 0));

    var mondayShowStart     = new Date(Date.UTC(2020, 11, 1, 18, 50));
    var mondayShowEnd       = new Date(Date.UTC(2020, 11, 1, 20, 20));

    var tuesdayShowStart    = new Date(Date.UTC(2020, 11, 2, 18, 50));
    var tuesdayShowEnd      = new Date(Date.UTC(2020, 11, 2, 20, 20));

    var wednesdayShowStart  = new Date(Date.UTC(2020, 11, 3, 18, 50));
    var wednesdayShowEnd    = new Date(Date.UTC(2020, 11, 3, 20, 20));

    function update() {

        var now = Date.now();

        var duringTest      = (now > testPeriodStart && now < testPeriodEnd);
        var duringMonday    = (now > mondayShowStart && now < mondayShowEnd);
        var duringTuesday   = (now > tuesdayShowStart && now < tuesdayShowEnd)
        var duringWednesday = (now > wednesdayShowStart && now < wednesdayShowEnd)

        // During one of the shows?
        if  (duringTest || duringMonday || duringTuesday || duringWednesday) {
            // This runs every few seconds during the show
            document.getElementById("countdown-container").style.visibility='hidden';
            document.getElementById("video-container").style.visibility='visible';
            document.getElementById("header-text").style.visibility='visible';
            
            console.log("Show running.")
        }

        // Not during a show?
        else {
            document.getElementById("countdown-container").style.visibility='visible';
            document.getElementById("video-container").style.visibility='hidden';
            document.getElementById("header-text").style.visibility='hidden';

            console.log("Show not running.")
        }
    }

    // Update every second and also once as soon as possible
    setInterval(update, 1000);
    setTimeout(update, 0);
    
};

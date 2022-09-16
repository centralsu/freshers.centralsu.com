// On page load
window.onload = function () {

    var testPeriodStart     = new Date(Date.UTC(2022, 8, 16, 0, 25, 0));
    var testPeriodEnd       = new Date(Date.UTC(2022, 8, 16, 0, 26, 0));
    var ticketRelease       = new Date(Date.UTC(2022, 8, 16, 17, 0, 0));

    function update() {

        var now = Date.now();

        var duringTest      = (now > testPeriodStart && now < testPeriodEnd);
        var afterRelease    = (now > ticketRelease);

        // During one of the shows?
        if  (duringTest || afterRelease) {
            // This runs every few seconds during the show
            document.getElementById("eb-timing-container").style.display='none';
            document.getElementById("ga-timing-container").style.display='flex';
            
            console.log("General tickets available.")
        }

        // Not during a show?
        else {
            document.getElementById("eb-timing-container").style.display='flex';
            document.getElementById("ga-timing-container").style.display='none';

            console.log("Early bird tickets available.")
        }
    }

    // Update every second and also once as soon as possible
    setInterval(update, 1000);
    setTimeout(update, 0);
    
};

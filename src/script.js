// IIFE Javascript Design Pattern Used
(function() {


    // varibles for play with the miliseconds, seconds and minutes    
    var minutes = 0;    
    var seconds = 0;
    var miliSeconds = 0;


    // variables for setting the HTML content for miliseconds, seconds and minutes
    var setMinutes = document.getElementById("minutes");
    var setSeconds = document.getElementById("seconds");
    var setMiliSeconds = document.getElementById("mili-seconds");


    // variable for buttons to operate with them
    var startButton = document.getElementById("button-start");
    var stopButton = document.getElementById("button-stop");
    var resetButton = document.getElementById("button-reset");


    // varible for the setInterval method
    var counter;


    // function for start button
    startButton.addEventListener('click', () => {

        clearInterval(counter);
        counter = setInterval(startTimer, 10);
    })


    // function for stop button
    stopButton.addEventListener('click', () => {

        clearInterval(counter);
    })


    // function for reset button
    resetButton.addEventListener('click', () => {

        clearInterval(counter);
        minutes = 0;    
        seconds = 0;
        miliSeconds = 0;

        setMinutes.innerHTML = "0" + minutes;
        setSeconds.innerHTML = "0" + seconds;
        setMiliSeconds.innerHTML = "0" + miliSeconds;
    })


    // function for running the milisecond, second and minute timers on the screen
    function startTimer() {

        miliSeconds++;

        if(miliSeconds <= 9) {
            setMiliSeconds.innerHTML = "0" + miliSeconds;
        }

        if(miliSeconds > 9) {
            setMiliSeconds.innerHTML = miliSeconds;
        }

        if(miliSeconds > 99) {
            seconds++;
            setSeconds.innerHTML = "0" + seconds;
            miliSeconds = 0;
            setMiliSeconds.innerHTML = "0" + miliSeconds;
        }

        if(seconds > 9) {
            setSeconds.innerHTML = seconds;
        }

        if(seconds > 59) {
            minutes++;
            setMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            setSeconds.innerHTML = "0" + seconds;
        }

        if(minutes > 9) {
            setMinutes.innerHTML = minutes;
        }

    }

})();
let intID=null;
let getTime;
let count;

function start() {
    getTime = parseInt(document.getElementById("timeInput").value);
    count = document.getElementById("countDownDisplay");
    if (isNaN(getTime) || getTime <= 0) {
        count.innerText = "Invalid";
        return; }

     intID = setInterval(() => {
        if (getTime <= 0) {
            clearInterval(intID);
            count.innerText = "Time's Up!";
        } else {
            count.innerText = getTime;
            getTime--; // Update countdown value
        }
    }, 1000);
}
function Pause(){
    // count.innerText=getTime;
    clearInterval(intID);
}
function Play(){
 intID=setInterval(()=>{
    if (getTime <= 0) {
        clearInterval(intID);
        count.innerText = "Time's Up!";
    } else {
        count.innerText = getTime;
        getTime--; // Update countdown value
    }
 },1000)
}

// More optimised
// let intID = null; // Stores the interval ID
// let getTime; // Stores countdown time
// let count = document.getElementById("countDownDisplay"); // Get display element
// let startButton = document.getElementById("startButton"); 
// let pauseButton = document.getElementById("pauseButton");
// let playButton = document.getElementById("playButton");

// function start() {
//     clearInterval(intID); // Stop any existing countdown

//     getTime = parseInt(document.getElementById("timeInput").value);
//     if (isNaN(getTime) || getTime <= 0) {
//         count.innerText = "Invalid";
//         return;
//     }

//     startButton.disabled = true; // Disable start after starting
//     pauseButton.disabled = false; // Enable pause
//     playButton.disabled = true; // Disable play (because it's running)

//     intID = setInterval(updateCountdown, 1000);
// }

// function updateCountdown() {
//     if (getTime <= 0) {
//         clearInterval(intID);
//         count.innerText = "Time's Up!";
//         startButton.disabled = false; // Enable Start again
//         playButton.disabled = true;
//         pauseButton.disabled = true;
//     } else {
//         count.innerText = getTime;
//         getTime--; // Decrease time
//     }
// }

// function Pause() {
//     clearInterval(intID);
//     playButton.disabled = false; // Enable play
//     pauseButton.disabled = true; // Disable pause
// }

// function Play() {
//     if (!intID && getTime > 0) { // Prevent multiple intervals
//         intID = setInterval(updateCountdown, 1000);
//         playButton.disabled = true; // Disable play while running
//         pauseButton.disabled = false; // Enable pause
//     }
// }

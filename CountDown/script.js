function start() {
    let getTime = parseInt(document.getElementById("timeInput").value); // Convert to number
    let count = document.getElementById("countDownDisplay");

    if (isNaN(getTime) || getTime <= 0) {
        count.innerText = "Invalid";
        return; }

    let intID = setInterval(() => {
        if (getTime <= 0) {
            clearInterval(intID);
            count.innerText = "Time's Up!";
        } else {
            count.innerText = getTime;
            getTime--; // Update countdown value
        }
    }, 1000);
}

const countTo = "January 1, 2023"
const display = document.querySelector("#countdown")
let countToDisplay = document.querySelector("#count-to")
countToDisplay.textContent = `Until ${countTo}!`

const countdown = setInterval(() => {
    const endDate = new Date(countTo)
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60 ;
    const seconds = Math.floor(totalSeconds) % 60;
    let displayValue = (`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
    display.textContent = displayValue;

    if (totalSeconds < 0) {
        clearInterval(countdown);
        display.textContent = 'Happy New Year!!!'
    }
}, 1000)


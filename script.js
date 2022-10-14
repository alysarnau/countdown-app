// Time Countdown
let time; // time in minutes

const countTo = "timer ends"
const display = document.querySelector("#countdown")
let countToDisplay = document.querySelector("#count-to")
countToDisplay.textContent = `Until ${countTo}!`
let startButton = document.querySelector("#start-timer")
let promoTimer;

startButton.addEventListener('click', () => {
    if (promoTimer) {
        clearInterval(promoTimer);
    }
    time = document.querySelector("#timer").value
    document.querySelector(".countdown-display").style.display = 'block'
    display.textContent = `${time} minutes left`
    startCountdown()
})


function startCountdown() {
    let promoTime = time * 60 
    promoTimer = setInterval(() => {
        if (promoTime <= 0) {
            clearInterval(promoTimer);
            display.textContent = `The timer has ended!`
        } else {
            promoTime--
            const days = Math.floor(promoTime / 3600 / 24);
            const hours = Math.floor(promoTime / 3600) % 24;
            const minutes = Math.floor(promoTime / 60) % 60;
            const seconds = Math.floor(promoTime % 60);
            if (hours < 1) {
                display.textContent = `${minutes} minutes and ${seconds} seconds left`           
            } else if (hours < 1 && minutes < 1) {
                display.textContent = `${seconds} seconds left`           
            } else {
                display.textContent = `${hours} hours, ${minutes} minutes, and ${seconds} seconds left`           
            }
        }
    }, 1000)
}





const timerDays = document.querySelector(".timer-days");
const timerHours = document.querySelector(".timer-hours");
const timerMinutes = document.querySelector(".timer-minutes");
const timerSeconds = document.querySelector(".timer-seconds");
const allTimers = document.querySelectorAll(".timer");

allTimers.forEach(e => {
    e.addEventListener("animationend", () => {
        e.classList.remove("flip");
    });
});

fourteenDays = 8.64e7 * 14;
let today = new Date().getTime();
const goalDate = today + fourteenDays;

const timerID = setInterval(() => {
    let today = new Date().getTime();
    const releaseDate = goalDate - today;

    const d = Math.floor(releaseDate / 8.64e7);
    const h = Math.floor(releaseDate % 8.64e7 / 3.6e6);
    const m = Math.floor(releaseDate % 3.6e6 / 6e4);
    const s = Math.floor(releaseDate % 6e4 / 1e3);

    if (timerDays.textContent != d) {
        timerDays.classList.add("flip");
    }
    if (timerHours.textContent != h) {
        timerHours.classList.add("flip");
    }
    if (timerMinutes.textContent != m) {
        timerMinutes.classList.add("flip");
    }
    if (timerSeconds.textContent != s) {
        timerSeconds.classList.add("flip");
    }

    timerDays.textContent = d;
    timerHours.textContent = h;
    timerMinutes.textContent = m;
    timerSeconds.textContent = s;

    if(releaseDate <= 0){
        clearInterval(timerID);
        allTimers.forEach(e => {
            e.textContent = "0";
        });
    }
}, 1000);

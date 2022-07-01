const timerDays = document.querySelector(".timer-days");
const timerHours = document.querySelector(".timer-hours");
const timerMinutes = document.querySelector(".timer-minutes");
const timerSeconds = document.querySelector(".timer-seconds");


timerDays.addEventListener("animationend", () => {
    timerDays.classList.remove("flip");
});
timerHours.addEventListener("animationend", () => {
    timerHours.classList.remove("flip");
});
timerMinutes.addEventListener("animationend", () => {
    timerMinutes.classList.remove("flip");
});
timerSeconds.addEventListener("animationend", () => {
    timerSeconds.classList.remove("flip");
});


fourteenDays = 8.64e7 * 14;
let today = new Date().getTime();
const goalDate = today + fourteenDays;


setInterval(() => {
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

}, 1000);

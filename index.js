fourteenDays = 8.64e7 * 14;
//const goalDate = new Date("7-1-22").getTime();
let today = new Date().getTime();
const goalDate = today + fourteenDays;

/*
setInterval(()=>{
    let today = new Date().getTime();
    const releaseDate = goalDate - today;

    const d = Math.floor(releaseDate / 8.64e7); 
    const h = Math.floor(releaseDate % 8.64e7 / 3.6e6); 
    const m = Math.floor(releaseDate % 3.6e6 / 6e4); 
    const s = Math.floor(releaseDate % 6e4 / 1e3);

    const legend = `Release date: ${d} day, ${h} hours, ${m} minutes and  ${s} seconds`;
    console.log(legend);
}, 10000);
*/
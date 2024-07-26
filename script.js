function setDate() {
    //finding correct time
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //finding the correct degree to rotate
    const rotHour = 30 * hour + min / 2 + 90;
    const rotMin = 6 * min + sec / 60 + 90;
    const rotSec = 6 * sec + 90;

    //selecting the different hands
    const hours = document.querySelector(".hour-hand");
    const mins = document.querySelector(".min-hand");
    const secs = document.querySelector(".second-hand");

    //rotating to show the correct time
    hours.style.transform = `rotate(${rotHour}deg)`;
    mins.style.transform = `rotate(${rotMin}deg)`;
    secs.style.transform = `rotate(${rotSec}deg)`;
}
setInterval(setDate, 1000);
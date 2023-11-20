const banner = document.querySelector(".meetandgreet")
const closeButton = document.querySelector("#mgClose");
const today = Date.now();
const dayObject = new Date(today);
const dayWeekday = dayObject.toLocaleString("en-US", {weekday: "long"}); 
const dayMonth = dayObject.toLocaleString("en-US", {month: "long"}); 
const dayDay = dayObject.toLocaleString("en-US", {day: "numeric"});
const dayYear = dayObject.toLocaleString("en-US", {year: "numeric"});
console.log(dayWeekday);

if (dayWeekday === "Monday" || dayWeekday === "Tuesday" || dayWeekday === "Wednesday"){
    const info = document.createElement("p");
    info.setAttribute("id", "mgInfo");
    info.innerHTML = "Join us for our weekly Meet and Greet <br>every Wednesday at 7:00PM!";
    banner.appendChild(info);
};

closeButton.addEventListener("click", () => {
    banner.style.display = "none";
});
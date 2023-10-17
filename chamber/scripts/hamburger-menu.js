function toggleNav() {
    var navigation = document.querySelector(".navigation");
    var navButton = document.querySelector("#navButton");
    
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
        navButton.classList.remove("open");
        navButton.classList.add("closed");
    } else {
        navigation.style.display = "flex";
        navButton.classList.remove("closed");
        navButton.classList.add("open");
    }
}

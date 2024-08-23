const logoSkipple = document.querySelector(".logo-bg.flex");
const navCircle = document.getElementById("nav-circle");
const arrowDown = document.getElementById("arrow");

logoSkipple.addEventListener("click", function() {
    arrowDown.classList.add("arrow-activated");
    navCircle.classList.add("nav-circle-activated");
});

arrowDown.addEventListener("click", function() {
    arrowDown.classList.toggle("arrow-activated");
    navCircle.classList.toggle("nav-circle-activated");
});
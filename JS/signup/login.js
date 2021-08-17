// Initialize All Required DOM Element
var burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Initialize Responsive Navbar Menu
burgerMenu.addEventListener("click", change);

function change() {
    burgerMenu.classList.toggle("active");
    navbarMenu.classList.toggle("active");

    if (navbarMenu.classList.contains("active")) {
        navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
    } else {
        navbarMenu.removeAttribute("style");
    }
}
//extra
document.querySelector("button").onclick = function() {
    if (document.getElementById("username").value == "" && document.getElementById("password").value == "") {
        document.querySelector(".info").style.left = "200%";
        document.getElementById("username").style.borderColor = "#e60000";
        document.getElementById("password").style.borderColor = "#e60000";
    } else if (document.getElementById("username").value == "") {
        document.querySelector(".info").style.left = "200%";
        document.getElementById("username").style.borderColor = "#e60000";
        document.getElementById("password").style.borderColor = "transparent";
    } else if (document.getElementById("password").value == "") {
        document.querySelector(".info").style.left = "200%";
        document.getElementById("username").style.borderColor = "transparent";
        document.getElementById("password").style.borderColor = "#e60000";
    } else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("username").style.borderColor = "transparent";
        document.getElementById("password").style.borderColor = "transparent";
        document.querySelector(".info").style.left = "0px";
    }
}

document.querySelector(".close").onclick = function() {
    document.querySelector(".info").style.left = "200%";
}
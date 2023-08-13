//JavaScript for toggle menu


var navLinks = document.getElementById("navLinks");


function showMenu() {
    navLinks.style.right = "0";
}

//we want menu to go away when clicked on
//so right:-200;

function hideMenu() {
    navLinks.style.right = "-200px";
}
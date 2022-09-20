var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for (t of tablinks){
        t.classList.remove("active-link");
    }
    for (t of tabcontents){
        t.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function open_menu(){
    sidemenu.style.left = "0";
}
function close_menu(){
    sidemenu.style.left = "-200px";
}



let currentTheme = JSON.parse(localStorage.getItem("theme")) || "theme-1";
let currentBg = JSON.parse(localStorage.getItem("bg")) || "bg-1";




function changeTheme(id) {
    debugger
    document.getElementById(currentTheme).classList.remove("current")
    document.getElementById(currentBg).classList.remove("current")
    document.getElementById(currentBg).classList.add("current")
    currentTheme = id;
    localStorage.setItem("theme" , JSON.stringify(currentTheme))
    document.body.setAttribute("class", currentTheme)
    document.body.style.background = getComputedStyle(document.getElementById(currentBg), null).getPropertyValue('background');
    document.getElementById(currentTheme).classList.add("current")
}



function changeBg(id) {
    document.getElementById(currentBg).classList.remove("current")
    let bg = getComputedStyle(document.getElementById(id), null).getPropertyValue('background');
    document.body.style.background = bg;
    currentBg = id;
    localStorage.setItem("bg" , JSON.stringify(currentBg));
    document.getElementById(currentBg).classList.add("current")
}



function callThemes(){
    changeTheme(currentTheme);
    changeBg(currentBg);
}

window.addEventListener("load" , callThemes)
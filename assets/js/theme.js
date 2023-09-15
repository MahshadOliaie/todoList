

let currentTheme = "theme-1"
let currentBg = "bg-1"




function changeTheme(id) {
    document.getElementById(`${currentTheme}`).classList.remove("current")
    document.getElementById(`${currentBg}`).classList.remove("current")
    currentBg = "bg-1";
    document.getElementById("bg-1").classList.add("current")
    currentTheme = id;
    document.body.setAttribute("class", currentTheme)
    document.body.style.background = getComputedStyle(document.getElementById("bg-1"), null).getPropertyValue('background');
    document.getElementById(currentTheme).classList.add("current")
}



function changeBg(id) {
    document.getElementById(`${currentBg}`).classList.remove("current")
    let bg = getComputedStyle(document.getElementById(id), null).getPropertyValue('background');
    document.body.style.background = bg;
    currentBg = id;
    document.getElementById(currentBg).classList.add("current")
}

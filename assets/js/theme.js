
let colorPickers = document.querySelectorAll(".tools__themes__colors__color");
let bgPicker = document.querySelectorAll(".tools__backgrounds__colors__color");
let currentTheme = "theme-1"
let currentBg = "bg-1"
function changeTheme() {

    document.getElementById(`${currentTheme}`).classList.remove("current")
    document.getElementById(`${currentBg}`).classList.remove("current")
    currentBg = "bg-1";
    document.getElementById("bg-1").classList.add("current")
    let id = this.getAttribute("id");
    currentTheme = id;
    document.body.setAttribute("class", `${id}`)
    document.body.style.background = getComputedStyle(document.getElementById("bg-1"), null).getPropertyValue('background');
    this.classList.add("current")
}



function changeBG() {

    document.getElementById(`${currentBg}`).classList.remove("current")

    let id = this.getAttribute("id")
    let bg = getComputedStyle(this, null).getPropertyValue('background');
    document.body.style.background = bg;
    currentBg = id;
    this.classList.add("current")
}



for (const theme of colorPickers) {
    theme.addEventListener("click", changeTheme);

}

for (const bg of bgPicker) {
    bg.addEventListener("click", changeBG);
}
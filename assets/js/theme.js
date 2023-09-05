
let colorPickers = document.querySelectorAll(".tools__themes__colors__color");
let bgPicker = document.querySelectorAll(".tools__backgrounds__colors__color");


function changeTheme(){
    let id = this.getAttribute("id");
    document.body.setAttribute("class" , `${id}`)
}



function changeBG(){
    let bg = getComputedStyle(this,null).getPropertyValue('background');
    document.body.style.background = bg;
}



for (const theme of colorPickers) {
    theme.addEventListener("click" , changeTheme);
    
}

for (const bg of bgPicker) {
    bg.addEventListener("click" , changeBG);
}
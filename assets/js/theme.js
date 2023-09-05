
let colorPickers = document.querySelectorAll(".tools__themes__colors__color");


function changeTheme(){
    let id = this.getAttribute("id");
    document.body.setAttribute("class" , `${id}`)
}





for (const theme of colorPickers) {
    theme.addEventListener("click" , changeTheme);
    
}
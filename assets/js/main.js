

//dom nodes
let addBtn = document.querySelector(".tasks__header__add__addBtn");
let newTask = document.querySelector(".tasks__header__add__newTask");
let tasksBox = document.querySelector(".tasks__body");
let checkbox = [];
let toolsBox = document.querySelector(".tools");
let search = document.querySelector(".search");
let root = document.querySelector(".tasks__body")
let images = document.querySelectorAll(".chooseProfile__images__img");
let donebtn = document.querySelector(".donebtn");
let mainImage = document.querySelector(".chooseProfile__main");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let doneTasks = [];
let doneTasksList = JSON.parse(localStorage.getItem("doneTasks")) || [];
let result = [];
let deleted = [];
let deletedDoneTasks = [];
let closebtn = document.querySelector(".close");
let name;
let profileImg = JSON.parse(localStorage.getItem("profileImg")) || "/assets/images/human.jpeg"
let username = JSON.parse(localStorage.getItem("username")) || "your name";
let bars = document.querySelector(".bars");
let dayList = ["SUN", "MON", "TUES", "WEDNS", "THURS", "FRI", "SATUR"];
let monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];


let toastify = Toastify({
    text: "tab to undo",
    close: true,
    className: "toast",
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    style: {
        boxShadow: "1px 1px 1.5rem rgba(0, 0, 0, 0.556)",
        fontWeight: "600",
        borderRadius: "50px",
        textAlign: "center",
        color: "black",
        width: "200px",
        background: "linear-gradient(to right, gray, white)",
    }, onClick: undo
})




//functions

date();




function add() {

    if (newTask.value !== "" && tasks.includes(newTask.value) == false) {
        tasks.push(newTask.value);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        render(tasks);
        percent();

        newTask.value = "";
        newTask.focus();

    }
    if (tasks.includes(newTask.value))
        document.querySelector(".tasks__header__add__warning").textContent = `${newTask.value} is already exist!`;
    setTimeout(function () {
        document.querySelector(".tasks__header__add__warning").textContent = "";
    }, 2000)

}





function done(item, index) {

    document.getElementById(`check${item}`).classList.toggle("done");

    doneTasks = [...document.querySelectorAll(".done")];
    if (doneTasks.includes(document.getElementById(`check${item}`))) {
        doneTasksList.push(item);
        localStorage.setItem("doneTasks", JSON.stringify(doneTasksList))
    } else {
        doneTasksList.splice(index, 1);
        localStorage.setItem("doneTasks", JSON.stringify(doneTasksList))

    }

    percent();
}



let includeShow = [];
function moreFN(index) {

    document.getElementById(`more${index}`).classList.toggle("show");

    includeShow = document.querySelectorAll(".show");


    if (includeShow.length > 1) {
        for (const item of includeShow) {
            item.classList.remove("show");
        }
        document.getElementById(`more${index}`).classList.add("show");
    }




}


function addHandler(evt) {
    if (evt.key === 'Enter') {
        add();
        addBtn.classList.add("addbtnHover");
        setTimeout(function () { addBtn.classList.remove("addbtnHover"); }, 100);
    }
}





function searchHandler() {
    selected = document.querySelector(".selected");
    if (selected.textContent == "todo list") {
        result = tasks.filter(item => item.includes(search.value))
        render(result);
    }
}






function remove(index, item) {
    deleted.push(item);
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    if (doneTasksList.includes(item)) {
        deletedDoneTasks.push(item);
        doneTasksList.splice(doneTasksList.indexOf(item), 1);
        localStorage.setItem("doneTasks", JSON.stringify(doneTasksList))
    }
    render(tasks);

    percent();

    toastify.showToast();


}

function undo() {
    let lastElementOfDeleted = deleted[(deleted.length) - 1];
    tasks.push(lastElementOfDeleted);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    if (deletedDoneTasks.includes(lastElementOfDeleted)) {
        doneTasksList.push(lastElementOfDeleted);
        localStorage.setItem("doneTasks", JSON.stringify(doneTasksList))
        deletedDoneTasks.pop();
    }
    render(tasks);

    percent();

    document.querySelector(".toast").style.display = "none";



}



function editFn(item, index) {
    document.getElementById(`more${index}`).classList.remove("show");
    let editedTodo = prompt("edit todo", item);
    if (editedTodo !== null && tasks.includes(editedTodo) == false) {
        tasks[index] = editedTodo;
        localStorage.setItem("tasks", JSON.stringify(tasks))
        if (doneTasksList.includes(item)) {
            doneTasksList[doneTasksList.indexOf(item)] = editedTodo;
            localStorage.setItem("doneTasks", JSON.stringify(doneTasksList))
        }
        render(tasks);
    }



    if (editedTodo == "") {
        remove(index)
    }
}



function percent() {
    let percent = ((doneTasksList.length) / (tasks.length)) * 100;

    document.querySelector(".tools__progress__diagram__done").style.width = `${percent}%`;
    document.querySelector(".tools__progress__percent__number").textContent = Math.floor(percent) + "%"

    if (tasks.length == 0) {
        document.querySelector(".tools__progress__diagram__done").style.width = "0";
        document.querySelector(".tools__progress__percent__number").textContent = "0%"
    }
}



function render(array) {
    let template = array.map((item, index) => {

        return `<div class="tasks__body__task"><div class="svg" onclick='moreFN("${index}")'><svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml: space="preserve">
            <g>
                <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"></path>
                <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"></path>
                <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"></path>
            </g>
        </svg></div><div class="more" id="more${index}"><p class="edit" onclick='editFn("${item}" , ${index})'>edit</p><p class="remove" onclick='remove(${index},"${item}")'>remove</p></div><div class="tasks__body__task__check ${(doneTasksList.includes(item)) ? "done" : ""}" onclick='done("${item}" , ${index})' id="check${item}"></div><p class="tasks__body__task__content">${item}</p></div>`

    }).join("");

    root.innerHTML = template;


}



function renderTools() {
    toolsBox.innerHTML = `  <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="close tools__svg" onclick="closeTools()"
    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
</svg>
<div class="tools__account">
    <div class="tools__account__image" onclick="changeProfile()"></div>
    <p class="tools__account__name" onclick="editName()">${username}</p>
</div>

<div class="tools__progress">
    <p class="tools__progress__title"> Progress</p>
    <span class="tools__progress__percent"><span class="tools__progress__percent__number">0%</span>DONE</span>
    <div class="tools__progress__diagram">
        <div class="tools__progress__diagram__done"></div>
    </div>
</div>
<div class="tools__themes">
    <p class="tools__themes__title">Themes</p>
    <div class="tools__themes__colors">
        <div class="tools__themes__colors__color" onclick="changeTheme('theme-1')" id="theme-1"></div>
        <div class="tools__themes__colors__color" onclick="changeTheme('theme-2')" id="theme-2"></div>
        <div class="tools__themes__colors__color" onclick="changeTheme('theme-3')" id="theme-3"></div>
        <div class="tools__themes__colors__color" onclick="changeTheme('theme-4')" id="theme-4"></div>
        <div class="tools__themes__colors__color" onclick="changeTheme('theme-5')" id="theme-5"></div>
    </div>
</div>

<div class="tools__backgrounds">
    <p class="tools__backgrounds__title">Backgrounds</p>
    <div class="tools__backgrounds__colors">
        <div class="tools__backgrounds__colors__color" onclick="changeBg('bg-1')" id="bg-1"></div>
        <div class="tools__backgrounds__colors__color" onclick="changeBg('bg-2')" id="bg-2"></div>
        <div class="tools__backgrounds__colors__color" onclick="changeBg('bg-3')" id="bg-3"></div>
        <div class="tools__backgrounds__colors__color" onclick="changeBg('bg-4')" id="bg-4"></div>
        <div class="tools__backgrounds__colors__color" onclick="changeBg('bg-5')" id="bg-5"></div>
    </div>
</div>
`
}


function date() {
    let d = new Date();
    document.getElementById("day").textContent = dayList[d.getDay()];
    document.querySelector(".tasks__header__date__dayMonth__day").textContent = `${d.getDate()}`;
    document.querySelector(".tasks__header__date__dayMonth__month").textContent = monthList[d.getMonth()];
}



function editName() {

    name = document.querySelector(".tools__account__name")
    let newName = prompt("Enter your name", username);
    username = newName;
    localStorage.setItem("username", JSON.stringify(username))
    name.textContent = newName;
    if (newName == "" || newName == null || newName == " ") {
        name.textContent = "your name";
    }
}


function changeProfile() {
    document.querySelector(".chooseProfile").classList.add("showProfileBox")
}


function chooseImage() {
    mainImage.setAttribute("src", this.getAttribute("src"))
    console.log(mainImage)
    profileImg = this.getAttribute("src");
    localStorage.setItem("profileImg", JSON.stringify(profileImg));

}

function change() {
    document.querySelector(".tools__account__image").style.backgroundImage = `url(${profileImg})`
    document.querySelector(".chooseProfile").classList.remove("showProfileBox")
}
 


function closeTools() {
    document.querySelector(".tools").classList.remove("open")
    document.querySelector(".chooseProfile").classList.remove("showProfileBox")
}




function callTodo() {
    renderTools();
    render(tasks);
    percent()
    change()
}

//events
window.addEventListener("load", callTodo)


addBtn.addEventListener("click", add);
newTask.addEventListener("keyup", addHandler);
search.addEventListener("keyup", searchHandler);
donebtn.addEventListener("click", change)
bars.addEventListener("click", function () {
    document.querySelector(".tools").classList.add("open")
})



for (const image of images) {
    image.addEventListener("click", chooseImage);
}





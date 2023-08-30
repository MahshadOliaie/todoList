

//dom nodes
let addBtn = document.querySelector(".tasks__header__add__addBtn");
let newTask = document.querySelector(".tasks__header__add__newTask");
let tasksBox = document.querySelector(".tasks__body");
let checkbox = [];
let name = document.querySelector(".tools__account__name");
let profile = document.querySelector(".tools__account__image")
let search = document.querySelector(".search");
let root = document.querySelector(".tasks__body")
let images = document.querySelectorAll(".chooseProfile__images__img");
let donebtn = document.querySelector(".donebtn");
let mainImage = document.querySelector(".chooseProfile__main");
let doneTasks = [];
let doneTasksList = []
let tasks = [];
let result = [];
let deleted = [];
let deletedDoneTasks = [];
let dayList = ["SUN", "MON", "TUES", "WEDNS", "THURS", "FRI"];
let monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let toastify = Toastify({
    text: "tab to undo",
    close: true,
    className : "toast",
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
        background: "linear-gradient(to right, #F69A3F, #E5E9D6)",
    }, onClick: undo
})

//functions

date();




function add() {

    if (newTask.value !== "" && tasks.includes(newTask.value) == false) {
        tasks.push(newTask.value);
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
    } else
        doneTasksList.splice(index, 1);

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
    result = tasks.filter(item => item.includes(search.value))
    render(result);
}






function remove(index, item) {
    deleted.push(item);
    tasks.splice(index, 1);
    if (doneTasksList.includes(item)) {
        deletedDoneTasks.push(item);
        doneTasksList.splice(doneTasksList.indexOf(item), 1);
    }
    render(tasks);

    percent();

    toastify.showToast();


}

function undo() {
    let lastElementOfDeleted = deleted[(deleted.length) - 1];
    tasks.push(lastElementOfDeleted);
    if (deletedDoneTasks.includes(lastElementOfDeleted)) {
        doneTasksList.push(lastElementOfDeleted);
        deletedDoneTasks.pop();
    }
    render(tasks);

    percent();

    document.querySelector(".toast").style.display = "none";

    

}



function editFn(item, index) {
    document.getElementById(`more${index}`).classList.remove("show");
    let editedTodo = prompt("edit todo", item);
    if (editedTodo !== null) {
        tasks[index] = editedTodo;
        if (doneTasksList.includes(item)) {
            doneTasksList[doneTasksList.indexOf(item)] = editedTodo;
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
}



function render(array) {
    let template = array.map((item, index) => {

            return `<div class="tasks__body__task"><div class="svg" onclick='moreFN("${index}")'><svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml: space="preserve">
            <g>
                <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"></path>
                <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"></path>
                <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"></path>
            </g>
        </svg></div><div class="more" id="more${index}"><p class="edit" onclick='editFn("${item}" , ${index})'>edit</p><p class="remove" onclick='remove(${index},"${item}")'>remove</p></div><div class="tasks__body__task__check ${(doneTasksList.includes(item))? "done" : ""}" onclick='done("${item}" , ${index})' id="check${item}"></div><p class="tasks__body__task__content">${item}</p></div>`
    
    }).join("");

    root.innerHTML = template;


}


function date() {
    let d = new Date();
    document.getElementById("day").textContent = dayList[d.getDay()];
    document.querySelector(".tasks__header__date__dayMonth__day").textContent = `${d.getDate()}`;
    document.querySelector(".tasks__header__date__dayMonth__month").textContent = monthList[d.getMonth()];
}



function editName() {
    let newName = prompt("Enter your name", "your name");
    name.textContent = newName;
}


function changeProfile() {
    document.querySelector(".chooseProfile").classList.add("showProfileBox")
}


function chooseImage() {
    mainImage.setAttribute("src", this.getAttribute("src"))

}

function change() {
    document.querySelector(".tools__account__image").style.backgroundImage = `url(${document.querySelector(".chooseProfile__main").getAttribute("src")})`
    document.querySelector(".chooseProfile").classList.remove("showProfileBox")
}



//events
addBtn.addEventListener("click", add);
newTask.addEventListener("keyup", addHandler);
search.addEventListener("keyup", searchHandler);
name.addEventListener("click", editName);
profile.addEventListener("click", changeProfile)
donebtn.addEventListener("click", change)




for (const image of images) {
    image.addEventListener("click", chooseImage);
}


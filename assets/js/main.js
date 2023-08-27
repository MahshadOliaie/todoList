

let doneTasks = [];
let tasks = [];





function add() {

    if (newTask.value !== "") {
        tasks.push(newTask.value);
        render();
        percent();

        newTask.value = "";
        newTask.focus();

    }

}




function done(item) {
    document.getElementById(`check${item}`).classList.toggle("done");
    doneTasks = [...document.querySelectorAll(".done")];

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










function remove(index, item) {
    if (doneTasks.includes(item)) {
        doneTasks.splice(doneTasks.indexOf(item), 1);
    }
    tasks.splice(index, 1);
    percent();
    debugger
    render();

}


function percent() {
    let percent = ((doneTasks.length) / (tasks.length)) * 100;

    document.querySelector(".tools__progress__diagram__done").style.width = `${percent}%`;
    document.querySelector(".tools__progress__percent__number").textContent = Math.floor(percent) + "%"
}



function render() {
    let template = tasks.map((item, index) => {
        return `<div class="tasks__body__task"><div class="svg" onclick='moreFN(${index})'><svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml: space="preserve">
        <g>
            <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"></path>
            <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"></path>
            <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"></path>
        </g>
    </svg></div><div class="more" id="more${index}"><p class="edit">edit</p><p class="remove" onclick='remove(${index})'>remove</p></div><div class="tasks__body__task__check" onclick='done("${item}")' id="check${item}"></div><p class="tasks__body__task__content">${item}</p></div>`
    }).join("");

    root.innerHTML = template;

}




addBtn.addEventListener("click", add);
newTask.addEventListener("keyup", addHandler);


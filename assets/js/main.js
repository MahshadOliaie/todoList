

let doneTasks = [];
let doneTasksList = []
let tasks = [];
let result = [];





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





function done(item , index) {
    document.getElementById(`check${item}`).classList.toggle("done");

    doneTasks = [...document.querySelectorAll(".done")];
    if(doneTasks.includes(document.getElementById(`check${item}`))){
        doneTasksList.push(item);
    }else
    doneTasksList.splice(index , 1);
    console.log(doneTasksList)

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






function remove(index , item) {
    tasks.splice(index, 1);
    if(doneTasksList.includes(item)){
        doneTasksList.splice(doneTasksList.indexOf(item) , 1);
    }
    render(tasks);

    percent();


}



function editFn(item , index){
   let editedTodo = prompt("edit todo" , item);
   tasks[index]=editedTodo;
   console.log(tasks)
   render(tasks);

   if(editedTodo==""){
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
        if(doneTasksList.includes(item)){
            return  `<div class="tasks__body__task"><div class="svg" onclick='moreFN("${index}")'><svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml: space="preserve">
            <g>
                <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"></path>
                <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"></path>
                <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"></path>
            </g>
        </svg></div><div class="more" id="more${index}"><p class="edit" onclick='editFn("${item}" , ${index})'>edit</p><p class="remove" onclick='remove(${index},"${item}")'>remove</p></div><div class="tasks__body__task__check done" onclick='done("${item}" , ${index})' id="check${item}"></div><p class="tasks__body__task__content">${item}</p></div>`
        }else
        return `<div class="tasks__body__task"><div class="svg" onclick='moreFN("${index}")'><svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" xml: space="preserve">
        <g>
            <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"></path>
            <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"></path>
            <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"></path>
        </g>
    </svg></div><div class="more" id="more${index}"><p class="edit" onclick='editFn("${item}" , ${index})'>edit</p><p class="remove" onclick='remove(${index},"${item}")'>remove</p></div><div class="tasks__body__task__check" onclick='done("${item}" , ${index})' id="check${item}"></div><p class="tasks__body__task__content">${item}</p></div>`
    }).join("");

    root.innerHTML = template;


}




addBtn.addEventListener("click", add);
newTask.addEventListener("keyup", addHandler);
search.addEventListener("keyup", searchHandler);


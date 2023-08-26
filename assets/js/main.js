

let howManyTasks = 0;
let doneTasks = [];






function add() {
    if (newTask.value !== "") {
        const value = newTask.value;
        let div = document.createElement("div");
        div.classList.add("tasks__body__task");
        div.innerHTML = `<svg class="svg" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 60 60" xml:space="preserve">
   <g>
       <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>
       <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>
       <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>
   </g>
   </svg>`;

        let check = document.createElement("div");
        check.classList.add("tasks__body__task__check");
        let content = document.createElement("p");
        content.classList.add("tasks__body__task__content");
        let remove = document.createElement("p");
        remove.textContent = "remove"
        remove.classList.add("remove");
        let edit = document.createElement("adit");
        edit.textContent = "edit"
        let more = document.createElement("div");
        more.classList.add("more");
        more.appendChild(edit);
        more.appendChild(remove);
        div.appendChild(more);
        div.appendChild(check);
        div.appendChild(content);
        tasksBox.appendChild(div);
        content.textContent = value;
        howManyTasks++;

        moreBtn = document.querySelectorAll(".svg");
        if (moreBtn.length !== 0) {
            for (const item of moreBtn) {
                item.addEventListener("click", moreFN);
            }
        }

        percent();

        newTask.value = "";
        newTask.focus();

        checkbox = document.querySelectorAll(".tasks__body__task__check");
        if (checkbox.length !== 0) {
            for (const item of checkbox) {
                item.addEventListener("click", done)
            }
        }

    }

}


function moreFN() {
    this.nextSibling.classList.toggle("show");
}

function addHandler(evt) {
    if (evt.key === 'Enter') {
        add();
        addBtn.classList.add("addbtnHover");
        setTimeout(function () { addBtn.classList.remove("addbtnHover"); }, 100);
    }
}





function done() {
    this.classList.toggle("done");
    doneTasks = document.querySelectorAll(".done");
    percent();
}


function percent() {
    let percent = ((doneTasks.length) / howManyTasks) * 100;

    document.querySelector(".tools__progress__diagram__done").style.width = `${percent}%`;
    document.querySelector(".tools__progress__percent__number").textContent = Math.floor(percent) + "%"
}




addBtn.addEventListener("click", add);
newTask.addEventListener("keyup", addHandler);


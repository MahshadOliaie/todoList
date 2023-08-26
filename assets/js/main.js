

let howManyTasks = 0;
let doneTasks = [];






function add() {
    if (newTask.value !== "") {
        const value = newTask.value;
        let div = document.createElement("div");
        div.classList.add("tasks__body__task");
        let check = document.createElement("div");
        check.classList.add("tasks__body__task__check");
        let content = document.createElement("p");
        content.classList.add("tasks__body__task__content");
        div.appendChild(check);
        div.appendChild(content);
        tasksBox.appendChild(div);
        content.textContent = value;

        howManyTasks++;

        percent();

        newTask.value = "";
        newTask.focus();

        checkbox = document.querySelectorAll(".tasks__body__task__check");
        if (checkbox.length !== 0) {
            for (const item of checkbox) {
             item.addEventListener("click" , done)
            }
         }

    }

}


 


function addHandler(evt) {
    if (evt.key === 'Enter') {
        add();
        addBtn.classList.add("addbtnHover");
        setTimeout(function(){addBtn.classList.remove("addbtnHover");} , 100);
    }
}





function done() {
    this.classList.toggle("done");
    doneTasks = document.querySelectorAll(".done");
    percent();
}


function percent(){
    let percent = ((doneTasks.length)/howManyTasks)*100;

    document.querySelector(".tools__progress__diagram__done").style.width = `${percent}%`;
    document.querySelector(".tools__progress__percent__number").textContent = Math.floor(percent)+"%"
}




addBtn.addEventListener("click", add);
newTask.addEventListener("keyup", addHandler);


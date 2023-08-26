







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

        newTask.value = "";
        newTask.focus();
    }

}


function addHandler(evt){
    if(evt.key === 'Enter'){
        add();
    }
}









addBtn.addEventListener("click", add);
newTask.addEventListener("keyup" , addHandler);
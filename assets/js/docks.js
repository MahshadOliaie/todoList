

let notesBtn = document.querySelector(".dock__notes");
let todoBtn = document.querySelector(".dock__todolist");
let Container = document.querySelector(".tasks__body");
let selected;


function changeToNotes(){
    selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    Container.innerHTML = `<textarea name="text" id="text" cols="30" rows="10" class="note" placeholder="write here..." autofocus></textarea>`
    notesBtn.classList.add("selected")
}


function changeToTodo(){
    selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    render(tasks);
    todoBtn.classList.add("selected")
}





notesBtn.addEventListener("click" , changeToNotes);
todoBtn.addEventListener("click" , changeToTodo);
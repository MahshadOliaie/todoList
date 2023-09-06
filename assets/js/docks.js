

let notesBtn = document.querySelector(".dock__notes");
let todoBtn = document.querySelector(".dock__todolist");
let Container = document.querySelector(".tasks__body");
let selected;
let notesList = document.querySelector(".notesList");
let notesHeader = document.querySelector(".notes__header");

function changeToNotes(){
    selected = document.querySelector(".selected");
    notesList.classList.remove("dnone");
    notesHeader.classList.remove("dnone")
    selected.classList.remove("selected");
    Container.innerHTML = `<textarea name="text" id="text" cols="30" rows="10" class="note" placeholder="write here..."></textarea>`
    notesBtn.classList.add("selected")
}


function changeToTodo(){
    notesList.classList.add("dnone");
    notesHeader.classList.add("dnone")
    selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    render(tasks);
    todoBtn.classList.add("selected")
}





notesBtn.addEventListener("click" , changeToNotes);
todoBtn.addEventListener("click" , changeToTodo);
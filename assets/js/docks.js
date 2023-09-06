

let notesBtn = document.querySelector(".dock__notes");
let todoBtn = document.querySelector(".dock__todolist");
let Container = document.querySelector(".tasks__body");
let selected;
let notesList = document.querySelector(".notesList");
let notesHeader = document.querySelector(".notes__header");
let plus = document.getElementById("plus");
let currentNote;
let myNotes = [];
let noteListBody = document.querySelector(".notesList__body");

function changeToNotes() {
    selected = document.querySelector(".selected");
    notesList.classList.remove("dnone");
    notesHeader.classList.remove("dnone")
    selected.classList.remove("selected");
    Container.innerHTML = `<textarea name="text" id="text" cols="30" rows="10" class="note" placeholder="write here..."></textarea>`
    notesBtn.classList.add("selected")
}


function changeToTodo() {
    notesList.classList.add("dnone");
    notesHeader.classList.add("dnone")
    selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    render(tasks);
    todoBtn.classList.add("selected")
}



function openNote(id) {
    document.querySelector(".currentNote").classList.remove("currentNote");
    document.getElementById(id).classList.add("currentNote");

    
}



function addNote() {
    myNotes.push({"id":myNotes.length + 1, "title":"title..." , "body":"text..."})
    notesListRender();
    document.getElementById(`${myNotes.length}`).classList.add("currentNote");
}

function notesListRender() {
    let template = myNotes.map(item => {
        return `<div class="notesList__body__note" onclick="openNote(${item.id})" id="${item.id}">
        <h2>${item.title}</h2>
        <p>${item.body}</p>
    </div>`
    }).join("");

    noteListBody.innerHTML = template;
}



notesBtn.addEventListener("click", changeToNotes);
todoBtn.addEventListener("click", changeToTodo);
plus.addEventListener("click", addNote)
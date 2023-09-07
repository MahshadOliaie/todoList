

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
let titlebox = document.querySelector(".notes__header input");
let noteBody = document.getElementById("text");
let trash = document.getElementById("trash")

function changeToNotes() {
    selected = document.querySelector(".selected");
    notesList.classList.remove("dnone");
    notesHeader.classList.remove("dnone");
    selected.classList.remove("selected");
    notesBtn.classList.add("selected");
    if (currentNote) {
        let id = currentNote.getAttribute("id");
        let index = myNotes.map((item, index) => {
            if (item.id == id)
                return index;
        }).join("")
        renderNotes((index));
    }
}

function renderNotes(index) {
    titlebox.value = myNotes[index].title;
    Container.innerHTML = `<textarea name="text" id="text" cols="30" rows="10" class="note" placeholder="write here..." >${myNotes[index].body}</textarea>`
    noteBody = document.querySelector(".tasks__body textarea");
}


function changeToTodo() {
    notesList.classList.add("dnone");
    notesHeader.classList.add("dnone")
    selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    render(tasks);
    todoBtn.classList.add("selected")
}



function openNote(id, index) {
    document.querySelector(".currentNote").classList.remove("currentNote");
    document.getElementById(id).classList.add("currentNote");
    renderNotes(index);
    currentNote = document.querySelector(".currentNote")


}



function addNote() {
    (myNotes.length == 0) ? myNotes.push({ "id": (myNotes.length + 1), "title": "", "body": "" }) : myNotes.push({ "id": ((myNotes[(myNotes.length - 1)].id) + 1), "title": "", "body": "" });
    addNoteRender();
}




function addNoteRender() {
    debugger
    currentNote = document.querySelector(".currentNote");
    if (currentNote) {
        currentNote.classList.remove("currentNote");
        currentNote = document.querySelector(".currentNote");
    }
    notesListRender();
    if (myNotes.length == 0) {
        titlebox.value = "";
        Container.innerHTML = "";
    }
    else {
        document.getElementById(`${myNotes[(myNotes.length - 1)].id}`).classList.add("currentNote");
        currentNote = document.querySelector(".currentNote");
        renderNotes((myNotes.length - 1));
    }


}



function notesListRender() {
    let id;
    if (currentNote) {
        id = currentNote.getAttribute("id");
    }

    let template = myNotes.map((item, index) => {
        return `<div class="notesList__body__note ${(item.id == id) ? "currentNote" : ""}" onclick="openNote(${item.id},${index})" id="${item.id}">
        <h2>${item.title}</h2>
        <p>${item.body}</p>
    </div>`
    }).join("");

    noteListBody.innerHTML = template;
}



function changeTitle() {
    let value = titlebox.value;
    let id = currentNote.getAttribute("id");
    let index = myNotes.map((item, index) => {
        if (item.id == id)
            return index;
    }).join("")
    myNotes[index].title = value;

    notesListRender();
}




function changeBody() {
    let value = noteBody.value;
    let id = currentNote.getAttribute("id");
    let index = myNotes.map((item, index) => {
        if (item.id == id)
            return index;
    }).join("");

    myNotes[index].body = value;

    notesListRender();
}




function trashFn() {
    let id = currentNote.getAttribute("id");
    let index = myNotes.map((item, index) => {
        if (item.id == id)
            return index;
    }).join("")
    myNotes.splice((index), 1);
    debugger
    addNoteRender();
}






notesBtn.addEventListener("click", changeToNotes);
todoBtn.addEventListener("click", changeToTodo);
plus.addEventListener("click", addNote)
titlebox.addEventListener("keyup", changeTitle)
Container.addEventListener("keyup", changeBody)
trash.addEventListener("click", trashFn);
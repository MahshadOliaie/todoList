


function renderNotesTools() {
    debugger
    toolsBox.innerHTML = ` <section class="notesList">
    <div class="notesList__header">
        <svg xmlns="http://www.w3.org/2000/svg" class="notesList__header__svg" id="trash" onclick="trashFn()" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="notesList__header__svg" id="plus" onclick="addNote()" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
    </div>
    <div class="notesList__body">
    </div>
</section>`
}




function addNote() {
    debugger
    (myNotes.length == 0) ? myNotes.push({ "id": (myNotes.length + 1), "title": "", "body": "" }) : myNotes.push({ "id": ((myNotes[(myNotes.length - 1)].id) + 1), "title": "", "body": "" });
    localStorage.setItem("notes", JSON.stringify(myNotes));
    currentNote = myNotes[(myNotes.length - 1)].id;
    localStorage.setItem("current", JSON.stringify(currentNote))
    addNoteRender();
    openNote(currentNote)
}



function addNoteRender() {
    debugger
    notesListRender();

    if (myNotes.length == 0) {
        titlebox.value = "";
        Container.innerHTML = "";
    }

}



function notesListRender() {
debugger
    let template = myNotes.map((item, index) => {
        return `<div class="notesList__body__note ${(item.id == currentNote) ? 'currentNote' : ''}" onclick="openNote(${item.id},${index})" id="${item.id}">
        <h2>${item.title}</h2>
        <p>${item.body}</p>
    </div>`
    }).join("");

    noteListBody = document.querySelector(".notesList__body");
    noteListBody.innerHTML = template;
}




function openNote(id) {
    document.querySelector(".currentNote").classList.remove("currentNote");
    currentNote = id;
    localStorage.setItem("current" , JSON.stringify(currentNote));
    document.getElementById(id).classList.add("currentNote");
    document.querySelector(".tools").classList.remove("open");
    renderNotes();
}




function changeTitle() {
    let value = titlebox.value;
    let index = myNotes.map((item, index) => {
        if (item.id == currentNote)
            return index;
    }).join("")

    myNotes[index].title = value;
    localStorage.setItem("notes", JSON.stringify(myNotes));

    notesListRender();
}



function changeBody() {
    debugger
    noteBody = document.getElementById("text");
    let value = noteBody.value;
    let index = myNotes.map((item, index) => {
        if (item.id == currentNote)
            return index;
    }).join("");

    myNotes[index].body = value;
    localStorage.setItem("notes", JSON.stringify(myNotes));

    notesListRender();
}




function renderNotes() {
    debugger
    let index = myNotes.map((item, index) => {
        if (item.id == currentNote)
            return index;
    }).join("")
    
    titlebox.value = myNotes[index].title;
    Container.innerHTML = `<textarea name="text" id="text" cols="30" rows="10" class="note" placeholder="write here..." onkeyup="changeBody()">${myNotes[index].body}</textarea>`
}



let notesBtn = document.querySelector(".dock__notes");
let todoBtn = document.querySelector(".dock__todolist");
let focusBtn = document.querySelector(".dock__focus");
let Container = document.querySelector(".tasks__body");
let selected;
let notesList = document.querySelector(".notesList");
let notesHeader = document.querySelector(".notes__header");
let currentNote = JSON.parse(localStorage.getItem("current")) || "";
let myNotes = JSON.parse(localStorage.getItem("notes")) || [];
let noteListBody = document.querySelector(".notesList__body");
let titlebox = document.querySelector(".notes__header input");
let noteBody = document.getElementById("text");
let focusSong = document.querySelector(".focus");
let focusScreen = document.querySelector(".focusScreen");


function changeToNotes() {
    debugger
    selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    notesBtn.classList.add("selected");
    renderNotesTools();
    if (myNotes.length !== 0)
        renderNotes();
    noteListBody = document.querySelector(".notesList__body");
    notesList = document.querySelector(".notesList")
    notesHeader.classList.remove("dnone");
    search.classList.add("dnone");
    focusSong.classList.add("dnone");
    focusScreen.classList.add("dnone");

    if (myNotes.length == 0) {
        Container.innerHTML = " ";
    }


    notesListRender()

}





function changeToFocus() {
    selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    focusBtn.classList.add("selected");
    search.classList.add("dnone");
    notesList.classList.add("dnone");
    focusSong.classList.remove("dnone");
    notesHeader.classList.add("dnone");
    focusScreen.classList.remove("dnone");


}




function changeToTodo() {
    // notesList.classList.add("dnone");
    notesHeader.classList.add("dnone")
    selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    render(tasks);
    renderTools();
    percent()
    todoBtn.classList.add("selected")
    search.classList.remove("dnone");
    focusSong.classList.add("dnone");
    focusScreen.classList.add("dnone");
}











notesBtn.addEventListener("click", changeToNotes);
todoBtn.addEventListener("click", changeToTodo);
focusBtn.addEventListener("click", changeToFocus);





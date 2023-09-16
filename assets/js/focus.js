
let screen = document.querySelector(".focusScreen");
let playTimer = document.getElementById("playTimer");
let playSong = document.getElementById("playSong");
let minute = document.querySelector(".minute")
let reset = document.querySelector(".reset");
let second = document.querySelector(".second");
let currentSong = document.getElementById("s-focus-1");
let interval;
let currentID = "focus-1";
let nextSong = document.getElementById("nextSong");
let previousSong = document.getElementById("previousSong");
let songContainers = []

function focusToolsRender() {
    toolsBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" class="close tools__svg" onclick="closeTools()"
    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
    <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
</svg>
<section class="tools__focus">
    <div class="songContainer">
        <div class="tools__focus__song" id="focus-1" onclick="play('focus-1')" onclick="play('focus-1')">
            <div class="tools__focus__song__layer">
                <p class="tools__focus__song__layer__title">lake</p>
            </div>
        </div>
    </div>
    <div class="songContainer">
        <div class="tools__focus__song" id="focus-2" onclick="play('focus-2')">
            <div class="tools__focus__song__layer">
                <p class="tools__focus__song__layer__title">fire</p>
            </div>
        </div>
    </div>
    <div class="songContainer">
        <div class="tools__focus__song" id="focus-3" onclick="play('focus-3')">
            <div class="tools__focus__song__layer">
                <p class="tools__focus__song__layer__title">forest</p>
            </div>
        </div>
    </div>
    <div class="songContainer">
        <div class="tools__focus__song" id="focus-4" onclick="play('focus-4')">
            <div class="tools__focus__song__layer">
                <p class="tools__focus__song__layer__title">rain</p>
            </div>
        </div>
    </div>
    <div class="songContainer">
        <div class="tools__focus__song" id="focus-5" onclick="play('focus-5')">
            <div class="tools__focus__song__layer">
                <p class="tools__focus__song__layer__title">city</p>
            </div>
        </div>
    </div>
    <div class="songContainer">
        <div class="tools__focus__song" id="focus-6" onclick="play('focus-6')">
            <div class="tools__focus__song__layer">
                <p class="tools__focus__song__layer__title">waterfall</p>
            </div>
        </div>
    </div>
</section>`

    songContainers = [...document.querySelectorAll(".tools__focus__song")]
}



function play(id) {
    previousSong.classList.remove("disabled")
    nextSong.classList.remove("disabled")

    screen.style.backgroundImage = `url(/assets/images/${id}.gif)`;
    currentID = id;
    if (currentID == "focus-1") {
        previousSong.classList.add("disabled")
    }
    if (currentID == "focus-6") {
        nextSong.classList.add("disabled")
    }

    if (currentSong) {
        currentSong.autoplay = false;
        currentSong.load();
    }
    let song = document.getElementById(`s-${id}`);
    currentSong = song;
    song.autoplay = true;
    song.load();
    playSong.classList.add("fa-pause")
    playSong.classList.remove("fa-play")
}




function playStateHandler(whichPlay) {
    whichPlay.classList.toggle("fa-pause");
    whichPlay.classList.toggle("fa-play");
    let classArr = [...whichPlay.classList];
    if (whichPlay == playTimer) {
        if (classArr.includes("fa-pause")) {
            interval = setInterval(timer, 1000);
            document.querySelector(".circle").style.animationPlayState = "running"
        }
        else {
            clearInterval(interval)
            document.querySelector(".circle").style.animationPlayState = "paused"
        }

    }

    if (whichPlay == playSong) {
        if (classArr.includes("fa-pause")) {
            currentSong.autoplay = true;
            currentSong.load();
        }
        else {
            currentSong.autoplay = false;
            currentSong.load();
        }
    }
}



function timer() {
    let sec = second.textContent;
    let min = minute.textContent;
    if (sec === "00") {
        second.textContent = "59";
        minute.textContent = +min - 1;
        minute.textContent = minute.textContent.padStart(2, "0");

    } else {
        second.textContent = +sec - 1;
        second.textContent = second.textContent.padStart(2, "0");
    }
}



function resetfn() {
    minute.textContent = "25";
    second.textContent = "00"
    clearInterval(interval);
    playTimer.classList.add("fa-play");
    playTimer.classList.remove("fa-pause");
    document.querySelector(".circle").style.animation = "none";
    setTimeout(() => {
        document.querySelector(".circle").style.animation = "progress 1500s linear forwards reverse paused";
    }, 100);
}






playTimer.addEventListener("click", function () {
    playStateHandler(playTimer)
})
playSong.addEventListener("click", function () {
    playStateHandler(playSong)
})
reset.addEventListener("click", resetfn);


previousSong.addEventListener("click", function () {
    if (currentID !== "focus-1") {
        let index = songContainers.map((item, index) => {
            if (item.id == currentID) {
                return index - 1;
            }
        }).join("");
        play(songContainers[index].id)
    }
})

nextSong.addEventListener("click", function () {
    if (currentID !== "focus-6") {
        let index = songContainers.map((item, index) => {
            if (item.id == currentID) {
                return index + 1;
            }
        }).join("");
        play(songContainers[index].id)
    }
})
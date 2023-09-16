
let screen = document.querySelector(".focusScreen");


function focusToolsRender(){
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
}



function play(id){
    screen.style.backgroundImage = `url(/assets/images/${id}.gif)`
}
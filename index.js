const understand = document.getElementById("understand");
const door = document.getElementById("door");
const knockAudio = new Audio("resources/knock.mp3");
const openAudio = new Audio("resources/open.mp3");
const catAudio = new Audio("resources/catspin.mp3");
function fadeWarning() {
    setTimeout(function () {
        const warning = document.getElementById("warning");
        warning.classList.add("opacity-0");
        setTimeout(() => {
            warning.classList.add("hidden");
        },3000);
    }, 1000);
}

function playDoor(){
    setTimeout(function(){
        knockAudio.play();
    },4000);
}

function openDoor(){
    setTimeout(function(){
        door.classList.remove("hidden");
        openAudio.play();
        catAudio.loop = true;
        catAudio.play();
        console.log(offset);
    },4000 + offset*1000 + Math.floor(Math.random()*1000));
}

understand.onclick = function(){
    understand.classList.add("opacity-0");
    setTimeout(() => {
        understand.classList.add("hidden");
    },3000);
    fadeWarning();
    playDoor();
    openDoor();
};

knockAudio.addEventListener("loadedmetadata", () => {
    offset = knockAudio.duration;
});

let body = document.querySelector("body");

body.addEventListener("mouseover", func)

function func(){
    let audio = new Audio("bg-music.mp3");
    audio.play();
}
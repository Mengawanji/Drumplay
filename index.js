
var sound = new Audio('sounds/crash.mp3');
var keys = document.getElementsByClassName("drum");


for (let i = 0; i < keys.length; i++) {
  
    keys[i].addEventListener("click", play)

    function play() {
        sound.play();
    }
}



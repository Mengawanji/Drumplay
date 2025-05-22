
let keys = document.getElementsByClassName("drum");

for (let i = 0; i < keys.length; i++) {

    keys[i].addEventListener("click", play)

    function play() {
        alert("Play the drum");
    }
}


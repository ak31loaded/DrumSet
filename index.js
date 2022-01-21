var totalNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < totalNumber; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var keyPressed = this.innerHTML;
        makeSound(keyPressed);
        buttonAnimation(keyPressed);
    });
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(keyPressed) {
    switch (keyPressed) {
        case 'w':
            var audios = new Audio("sounds/tom-1.mp3");
            audios.play();
            break;
        case 'a':
            var audios = new Audio("sounds/tom-2.mp3");
            audios.play();
            break;
        case 's':
            var audios = new Audio("sounds/tom-3.mp3");
            audios.play();
            break;
        case 'd':
            var audios = new Audio("sounds/tom-4.mp3");
            audios.play();
            break;
        case 'j':
            var audios = new Audio("sounds/snare.mp3");
            audios.play();
            break;
        case 'k':
            var audios = new Audio("sounds/crash.mp3");
            audios.play();
            break;
        case 'l':
            var audios = new Audio("sounds/kick-bass.mp3");
            audios.play();
            break;

    }
}
function buttonAnimation(keyPressed)
{
    document.querySelector("."+keyPressed).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+keyPressed).classList.remove("pressed");
    }, 100); 
}

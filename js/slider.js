const allImages = ["home-hero.jpg", "mehanika-hero.jpg", "garage.jpg", "vulkanizer-hero.jpg", "autodijagnostika-hero.jpg"];
const left = document.getElementById("left");
const right = document.getElementById("right");
const image = document.querySelector("img");

var counter = 0;

left.addEventListener("click", function () {
    previous();
})

right.addEventListener("click", next);

function previous() {
    counter--;
    if (counter < 0) counter = allImages.length - 1;
    image.src = "assets/img/" + allImages[counter];
}

function next() {
    counter++;
    if (counter > allImages.length - 1) counter = 0;
    image.src = "assets/img/" + allImages[counter];
}

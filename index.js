let randomNumber1 = Math.floor(Math.random() * 6 + 1);
var random_image = "images/" + "dice" + randomNumber1 + "." + "png"
let img1 = document.querySelectorAll(".img1")[0];
img1.setAttribute("src", random_image)


let randomNumber2 = Math.floor(Math.random() * 6 + 1);
var random_image = "images/" + "dice" + randomNumber2 + "." + "png"
let img2 = document.querySelectorAll(".img2")[0];
img2.setAttribute("src", random_image)


let heading = document.getElementById("heading");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Play 1 wins!"
}
else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Play 2 wins!"
}
else {
    heading.innerHTML = "Draw!"
}
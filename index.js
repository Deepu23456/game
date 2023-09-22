let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;
const player1 = document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
const palyer2 = document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");


// JavaScript
const myHeading = document.querySelector(".container>h1");

if (randomNumber1>randomNumber2) {
  myHeading.innerHTML = "&#129351 Player1 won";
} 
else if(randomNumber1===randomNumber2){
    myHeading.innerHTML = "&#129309 Draw!";
}
else {
  myHeading.innerHTML = " Player2 won &#129351";
}
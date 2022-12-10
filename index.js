
var randomNumber1 = Math.floor(Math.random()*6)+1; // creating a random number between 1-6
var randomImageNumber1 = "dice" + randomNumber1 + ".png"; // selecting image number
var randomImageSource1 = "images\\" + randomImageNumber1; // fetcheing selected image from randomImageSource


var image1 = document.querySelectorAll("img")[0]; // selecting specific portion to cahnge from html section
image1.setAttribute("src", randomImageSource1); // change the selected item in the air



var randomNumber2 = Math.floor(Math.random()*6)+1; // creating a random number between 1-6
var randomImageNumber2 = "dice" + randomNumber2 + ".png"; // selecting image number
var randomImageSource2 = "images\\" + randomImageNumber2; // fetcheing selected image from randomImageSource


var image2 = document.querySelectorAll("img")[1]; // selecting specific portion to cahnge from html section
image2.setAttribute("src", randomImageSource2); // change the selected item in the air



// decide who wins the game
console.log(randomNumber1,randomNumber2);
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Palyer1! wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "palyer2 wins";
}
else{
  document.querySelector("h1").innerHTML = "It's a draw";
}

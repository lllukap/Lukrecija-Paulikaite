

var i = 0;
var txt = "I would love to collaborate. I might not be the most equipped, but I will definitely do my best :) "; 
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()


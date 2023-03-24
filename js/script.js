

// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';

// })

// var i=0, text;

// text = "Hi! Nice to see you here! My name is Lukrecija and I am currently studying Interactive Media at New York University in Abu Dhabi. I am passionate about design and technology and I love creating new things by combining both."

// function typing(){
//     if (i< text.length){
//         document.getElementById("text").innerHTML +=text.charAT(i);
//         i++;
//         setTimeout(typing, 50 )
//     }
// }

// typing();

var i = 0;
var txt = "I am always happy to collaborate. If you have an idea and need an extra pair of hands - do not hesitate to reach out. I might not yet be the most equipped, but I will definitely do my best :) "; 
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()

// var i = 0;
// var txt1 = '"Projects" page contains all of my work from my Interactive Media studies so far. I have explored visual and web design, as well as sound and video production. Nevertheless,  I still have a long way of learning ahead of me.'
// var speed = 5;

// typeWriter()
// var k=0
// var txt1 = `Hi! Nice to see you here! My name is Lukrecija and I am currently studying Interactive Media at New York University in Abu Dhabi. I am passionate about design and technology and I love creating new things by combining both.\nHi! Nice to see you here! My name is Lukrecija and I am currently studying Interactive Media at New York University in Abu Dhabi. I am passionate about design and technology and I love creating new things by combining both.`; 
// var speed1 = 5; /* The speed/duration of the effect in milliseconds */

// function typeWriter1() {
//   if (k < txt1.length) {
//     document.getElementById("text1").innerHTML += txt1.charAt(k);
//     k++;
//     setTimeout(typeWriter, speed1);
//   }
// }
// typeWriter1()
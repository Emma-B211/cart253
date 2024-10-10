/**
 * Frog
 * Emma
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
const frog={
   //body
   x: 150,
   y: 150,
   size: 90,
}

const tongue={
    x:55,
    y:55,
    size:40,
}

const fly = {
    x: 30,
    y:40,
    size:15,
    speed: +1
}


function setup() {
createCanvas(400,400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#add8e6");
   frog();
    tongue();
    Fly();


}

function Frog(){
    Push();
    noStroke();
    fill("#00ff00");
    eclipse(frog.x,frog.y,frog.size);
    pop();

}

function tongue(){
    push();
    noStroke();
    fill("#ff0000");
    eclipse(tongue.x,tongue.y,tongue.size);
    pop();
}
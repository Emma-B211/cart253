/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(500,500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#0000ff");
     
  base();
   greenflag();
    redflag();
}

function base(){
    push();
    noStroke();
    fill("#fffffff");
rect(130,200,400,240);
pop(); 
}

function greenflag(){
    push();
    noStroke();
    fill("#00ff00");
    rect(110,200,160,240);
    pop();
}

function redflag(){
  push();
  noStroke();
  fill("#ff0000");
  rect(380,200,160,240);
  pop();
}

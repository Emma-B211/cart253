/**
 * Lovely Pyramid
 * Emma Beldick
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400,400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background("#0000ff");

  sand()
pyramid()
pyramid2()
}

function sand(){
    push();
    noStroke();
    fill("yellow");
    ellipse(100,300,300);
    pop();
  
  //second one
   push();
    noStroke();
    fill("yellow");
    ellipse(300,300,300);
    pop();
}

function pyramid(){
    push();
  noStroke();
  fill("#fee12b");
  triangle(175,120,108,230,236,225);
  pop();
}
function pyramid2(){
    push();
    noStroke();
    fill("#ffffc5")
    triangle(175,120,108,230,145,235);
    pop();
}

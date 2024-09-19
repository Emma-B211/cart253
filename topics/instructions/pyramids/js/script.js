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
    createCanvas(400,400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background("#0000ff");
  
  sand();
  pyramid2();
pyramid();

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
  triangle(130, 275, 220, 120, 286, 275);
  pop();
}

function pyramid2(){
  push();
  noStroke();
  fill("#effd5f");
  triangle(230,375,320,220,386,375);
  pop();
}
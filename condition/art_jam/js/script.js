/**
 * Excited Dog
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
    createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 150, 155);
    field();
    field2();
    field3();
}
function field() {
    push();
    noStroke()
    fill(0, 105, 30);
    ellipse(500, 400, 400);
    pop();
}
function field2() {
    push();
    noStroke();
    fill(0, 125, 50);
    ellipse(300, 400, 400);
    pop();
}
function field3() {
    push();
    noStroke();
    fill(0, 105, 30);
    ellipse(100, 400, 400);
    pop();

}
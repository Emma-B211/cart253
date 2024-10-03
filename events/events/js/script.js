/**
 * Introducing events
 * Emma Beldick
 * 
 * Taking a look at how events work in javascript and p5js
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);
    background(0);
}

/**
 *  does nothing
*/
function draw() {

}
/**
 * draws a circle at the mouse location
 */
function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}
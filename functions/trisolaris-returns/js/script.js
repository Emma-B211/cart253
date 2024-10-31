/**
 * Trisolaris Returns (get it?)
 * Pippin
 * 
 * Draws the three suns of Trisolaris. Calculate their colour
 * based on their parameters.
 */

"use strict";
/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
    // slowing down the frame rate to avoid any seizure
    frameRate(2);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    // ask random() for a random number between 0,255
    //and assign it to a variable
    let randomBackgroundShade = random(0,255);

   background(randomBackgroundShade);
    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);
}

/**
 * Draws a Trisolarian sun
 */
function drawSun(x, y, size) {
    // get the stroke weight for this sun
    let weight = weight = calculateStrokeWeight(x,y);

    push();
    strokeWeight(weight);
    stroke("#ffff00");
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}
function calculateStrokeWeight(x,y){
    // calculate the stroke weight of a sun based on
    // the distance of the mouse position
    const minWeight = 20;
    const maxWeight = 1;

    let d = dist(mouseX,mouseY,x,y);
    let result = map(d,0,width,minWeight,maxWeight);
    return result;
}
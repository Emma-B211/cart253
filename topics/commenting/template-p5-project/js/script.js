/**
 * The greatest record of all time
 * Emma Beldick
 * 
 * displays the greatest record of all time
 */

"use strict";

/**
 * creates a square canvas
*/
function setup() {
createCanvas(640,640);
}


/**
 * displays the record
*/
function draw() {
    // grey background
background(150,150,150);
// the main part of the record
push();
fill(255,0,0);
stroke(255);
ellipse(320,320,480);
pop();
// the label of the record
push();
fill("white");
noStroke();
ellipse(320,320,140,140);
pop();
// the hole in the record
push();
fill("#000000");
noStroke();
ellipse(320,320,140);
pop();
}


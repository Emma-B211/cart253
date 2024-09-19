/**
 * zexperimenting with creating a variable
 * Emma Beldick
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let cheeseRed= 255;
let cheeseGreen=255;
let cheeseBlue= 0;

let holeShade = 0;
let holeSize = 120;
let holeX= 140;
let holeY= 175;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(480,480);
}


/**
 * draws a hole in a piece of cheese
*/
function draw() {
//the cheese
background(cheeseRed,cheeseGreen,cheeseBlue);

// the hole
push();
noStroke();
fill(holeShade);
ellipse(holeX,holeY,holeSize);
pop();
}
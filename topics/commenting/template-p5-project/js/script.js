/**
 * The Blank Page
 * Emma Beldick
 * 
 * exploration of the existential angst of a novelist
 * who must sit down at their pink desk and confront the
 * abyss that is a blank page of paper.
 * 
 * the program is non-interactive to convey the inability 
 * to get started on the project. Try typing! just try it!
 */

"use strict";

/**
 * creates the canvas for our masterpiece
*/
function setup() {
// Create a canvas at a standard resolution
createCanvas(640,480);
}


/**
 * draws thw writer's desktop and a blank piece of paper
*/
function draw() {
// the pink desktop
background(255,100,100);
//the blank piece of paper
rect(200,80,240,320);
}
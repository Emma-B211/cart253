/**
 * Vertical circles
 * Pippin Barr
 * 
 * Draws a series of circles from the top to the bottom of the canvas.
 * Arguably not in the most efficient way.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw circles from the top to the bottom of the canvas
 */
function draw() {
    background(0);
let x=width/2;
let y=0;
let diameter=50;
 //while loop

 while (y<=height){
    ellipse(200, 0, 50);
    
    y += 50;
 }
 while(y<=height){
  ellipse(200, 50, 50);  
 }
 while (y<=height){
     ellipse(200, 100, 50);
     y += 50;
 }
 while (y<=height){
     ellipse(200, 150, 50);
     y += 50;
 }
 while (y<=height){
    ellipse(200, 200, 50);
    y += 50;
 }
 while (y<=height){
    ellipse(200, 250, 50);
    y += 50;
 }
 while (y<=height){
    ellipse(200, 300, 50);
    y += 50;
 }
 while (y<=height){
     ellipse(200, 350, 50);
     y += 50;
 }
 while (y<=height){
    ellipse(200, 400, 50); 
    y += 50;
 }
    
    // Draw a series of 50-pixel diameter circles
    // Starting at the top of the canvas
    // And ending at the bottom
   
}
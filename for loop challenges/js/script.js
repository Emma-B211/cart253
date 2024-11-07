/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    let strokeColor=0;
    let strokeStep=1;
    let weight=1;
    let weightStep=1;
    let x=0;
    letxStep=map(mouseX,0,width,1,true);

while(x<= width){
   strokeColor(strokeColor);
    strokeWeight(weight);
    line(x, 0, x, height); 

    x+=xStep;
    weight+=weightStep;
    strokeColor+=strokeStep;

    xStep+=0;
    weightStep +=1;
};
    
    

}
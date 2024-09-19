/**
 * Mr.Furious
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let mrFurious = {
    // position and size
    x: 200,
    y: 200,
    size: 100,
    // colour
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
};
function setup() {
    createCanvas(400, 400);
}


/**
 * Draw (and update) Mr.Furious
*/
function draw() {
    background(160, 180, 200);

    // draw mr.furious as a coloured circle

    push();
    noStroke();
    fill(mrFurious.r, mrFurious.b, mrFurious.g);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
   
}
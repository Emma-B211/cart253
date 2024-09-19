/**
 * Introducing variable
 * Emma Beldick
 * 
 * learn what a variable is and does
 */

"use strict";

/**
 * create a canvas
*/
function setup() {

    createCanvas(640,640);
    
    }
    
    
    /**
     * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
    */
    function draw() {
        background(0);
    
        // draw a circle
        push();
        fill(255,255,0);
        noStroke();
        ellipse(width/2,height/2,mouseX,mouseY);
    pop();
    }
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
    createCanvas(windowWidth, windowHeight);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    drawGradient();
    drawLines();
    
    

}

function drawGradient(){
    //let shade=0;
    for (let y =0; y<=height;y+=2){
        let hue=map(y,0,height,0,360)
        //strokeWeight(0.5);
        stroke(hue,100,100);
    line(0,y,width,y);
    //shade+=1;
    }

    for(let x =0; x<=width;x++){
        let hue=map(x,0,width,0,360)
        //strokeWeight(0.5);
        stroke(hue,100,100);
    line(x,0,height,x);
    //shade+=1;
    }
}

function drawLines(){
    let strokeColor=0;
    let strokeStep=1;
    let weight=1;
    let weightStep=0;
    let x=0;
    let xStep= width/11;

while(x<= width){
   stroke(strokeColor);
    strokeWeight(weight);
    line(x, 0, x, height); 

    x += xStep;
    weight += weightStep;
    strokeColor += strokeStep;

    xStep+=0;
    weightStep +=1;
}
}
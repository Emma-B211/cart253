/**
 * Buzzy the parameter
 * Pippin Barr
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 30,
    buzziness: 4
};
let horsey = {
    name:"Horsey",
    color:"#7d561d"
}

cutOffOneLeg(horsey);
/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    // Move buzzy
    buzzyTheFly.x += random(-buzzyTheFly.buzziness, buzzyTheFly.buzziness);
    buzzyTheFly.y += random(-buzzyTheFly.buzziness, buzzyTheFly.buzziness);

    // Draw buzzy
    push();
    noStroke();
    fill(0);
    ellipse(buzzyTheFly.x, buzzyTheFly.y, buzzyTheFly.size);
    pop();
}

function CutOffOneLeg(horsey){
    horsey.legs-=1;
}

function moveFly(fly){
    fly.x+= random(-fly.buzziness,fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

function drawFly(fly){
push();
noStroke();
fill(0);
ellipse(fly.x,fly.y,fly.size);
pop();
}
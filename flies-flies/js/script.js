/**
 * Flies flies
 * Pippin Barr
 * 
 * A program for drawing flies on the canvas. The flies are stored
 * in an array. We display them with a for...of loop
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let flies = [
    {
        x: 100,
        y: 125,
        size: 10,
        // new
        buzziness: 4
    },
    {
        x: 160,
        y: 170,
        size: 14,
        //new
        buzziness: 2
    },
    {
        x: 180,
        y: 50,
        size: 5,
        //new
        buzziness: 3
    }
];

/**
 * Create the canvas
 */
function setup() {
    // Let's make it tiny for some reason
    createCanvas(200, 200);
}

/**
 * Display the flies in the array
 */
function draw() {
    background("#87ceeb");

    // Display each fly in the array
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
    }
}

/**
 * Draws the provided fly to the canvas
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/***
 * moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}
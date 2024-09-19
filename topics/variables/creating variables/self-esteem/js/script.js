/**
 * Self-Esteem
 * Pippin Barr
 * 
 * A portrait of Pippin's self-esteem on a sunny day.
 */

"use strict";

// Colour of the sky
let skyRed = 150;
let skyGreen = 180;
let skyBlue = 250;

// The sun

// Colour
let sunRed = 255;
let sunGreen = 255;
let sunBlue = 0;

let sky = {
    red: 150,
    green: 180,
    blue: 250
};
// Position and size
let sunX = 500;
let sunY = 70;
let sunSize = 100;

let sun = {
    red:255,
    green: 255,
    blue:0,
    x: 500,
    y: 70,
    size: 100
};

// My self-esteem
let selfEsteem = {
    shade: 0,
    x: 320,
    y: 320,
    size: 20
};
// My self-esteem

/**
 * Create the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(640, 320);
}

/**
 * Displays the sky, sun, and self-esteem
 */
function draw() {
    // A nice blue sky
    background(sky.red, sky.green, sky.blue);

    // The sun
    push();
    fill(sun.red, sun.green, sun.blue);
    noStroke();
    ellipse(sun.x, sun.y, sun.size);
    pop();

    // My self esteem
    push();
    fill(selfEsteem.shade);
    noStroke();
    ellipse(selfEsteem.x, selfEsteem.y, selfEsteem.size);
    pop();
}
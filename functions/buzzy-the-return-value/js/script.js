/**
 * Buzzy the return value
 * Pippin Barr
 * 
 * Two flies that buzz around on the canvas
 */

"use strict";
// we start them undefined now, because we'll create them in setup()
let buzzyTheFly= undefined;
let jazzyTheFly = undefined;
// Our flies that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 20,
    buzziness: 3
};

let jazzyTheFly = {
    x: 200,
    y: 200,
    size: 20,
    buzziness: 3
};

let horsey = {
    name: "Horsey",
    colour: "#7d561d",
    legs: 3
};

let horso = {
    name: "Horso",
    colour: "#7d561d",
    legs: 4
};

let horsey = createHorse("Horsey");
let horso = createHorse("Horso");

function createHorse(name) {
    let horse = {
        // We can set the new horse's properties via PARAMETERS
        // Note that the first "name" here is the *property* name
        // and the second "name" is the *parameter* name being put into it
        name: name,
        // We can set the new horse's properties via DEFAULTS
        // All horses are brown in this world
        colour: "#7d561d",
        // We can set the new horse's properties DYNAMICALLY
        // Each horse has between 2 and 4 legs, including fractional legs...?
        legs: random(2,4)
    }
}

// We start them undefined now, because we'll create them in setup()
let buzzyTheFly = undefined;
let jazzyTheFly = undefined;

function setup() {
    createCanvas(400);
    // A pretty calm fly
    buzzyTheFly = createFly(2);
    // A not calm fly
    jazzyTheFly = createFly(10);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);

    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

/**
 * Move the fly passed in by updating its position
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in using its properties
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Creates a fly object with randomized position, default size, 
 * and provided buzziness
 */
function createFly(buzziness) {
    const fly = {
        // Position (random)
        x: random(0, width),
        y: random(0, height),
        // Size (default)
        size: 30,
        // How much to move per frame (parameter)
        buzziness: buzziness
    };
    return fly;
}
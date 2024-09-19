/**
 * Variable in practice: Movement
 * Emma Beldick
 * 
 * experimenting with movement
 */

"use strict";
let bird = {
    x: 120,
    y: 480,
    size: 50,
    velocity: { 
        x: 0,
        y: 0
    },

minVelocity:{
    x: -3,
    y: -2
},
maxVelocity:{
    x: 3,
    y: 2
},

    acceleration: {
        x:0.025,
        y:-0.05
    }
};
/**
 * create the canvas
*/
function setup() {
createCanvas(640,480);
}


/**
 * move the bird and display it
*/
function draw() {
background(0);

// move the bird
bird.velocity.x += bird.velocity.x;
bird.velocity.y += bird.velocity.y;

bird.velocity.x = constrain(bird.velocity.x,bird.minVelocity.x,bird.maxVelocity.x);
bird.velocity.y = constrain(bird.velocity.y,bird.minVelocity.y, bird.maxVelocity.y);

bird.x += bird.velocity.x;
bird.y += bird.velocity.y;

// draw the bird
push();
fill(255,0,0);
noStroke();
ellipse(bird.x,bird.y,bird.size);
pop();
}
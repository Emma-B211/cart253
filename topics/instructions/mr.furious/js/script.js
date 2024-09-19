/**
 * Mr.Furious
 * Emma 
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
// the sky's fill
let sky = {
    fill: {
        r: 100,
        g: 100,
        b: 200
    }
}
// the annoying bird
let bird = {
    x: 0,
    y: 0,
    size: 10,
    speed: 0.25
};

let mrFurious = {
    // position and size
    x: 200,
    y: 200,
    size: 100,
    // colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    },

    shakeAmount: 0
};
function setup() {
    createCanvas(400, 400);
}


/**
 * Draw (and update) Mr.Furious
*/
function draw() {
    background(sky.fill.r, sky.fill.g, sky.fill.b);
    sky.fill.r -= 1;
    //sky.fill.r = constrain(sky.fill.r, 0, 255);
    sky.fill.g -= 1;
    //sky.fill.g = constain(sky.fill.g, 0, 255);
    sky.fill.b -= 1;
    //sky.fill.b = constrain(sky.fill.b, 0, 255);

    // draw mr.furious as a coloured circle
    //const rx = map(mouseX,0,width,0,100);
    const x = mrFurious.x + random(-5, 5);
    // x = 200 + -2 (198)
    //const ry = map(mouseY,0,height,0,100);
    const y = mrFurious.y + random(5, -5);
    // y= 200 + 5 (205)

    // mrFurious.x += random(-10,10);
    // mrFurious.y += random(10,-10);





    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.b, mrFurious.fill.g);
    mrFurious.fill.r++;
    mrFurious.fill.b--;
    // make mr.furious redder and constrain
    mrFurious.fill.g = constrain(mrFurious.fill.g, 0, 255);
    mrFurious.fill.g--;
    mrFurious.fill.b = constrain(mrFurious.fill.b, 0, 255);

    mrFurious.shakeAmount += 0.01;
    mrFurious.shakeAmount = constrain(mrFurious.x, mrFurious.shakeAmount, 0, 10);

    ellipse(x, y, mrFurious.size);
    pop();
    // move the bird

    bird.x += bird.speed;
    bird.y += bird.speed;
    // bird
    push();
    //rectMode(CENTER);
    noStroke();
    fill("#ffff00");
    rect(bird.x, bird.y, bird.size);
    pop();


}


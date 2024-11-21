/**
 * Air Hockey Galore
 * Emma Beldick
 * 
 */

"use strict";
/***
 * air hockey game variation
 * 1. goal area would open and close, moves and avoid the ball
 * 2. added foosball sticks to control where the ball/puck would go
 * 3. ball explode or turn invisible or change direction randomly
 * 4. the ball would change shape after every point and the
 * object movement would change different levels
 * computer movement for opponent
 * 5. arrays to create multiple balls
 */


let mouseX;
const Paddle = {
    x: mouseX,
    y: 650,
    size: 80
};

const Paddle1 = {
    x: 400,
    y: 150,
    size: 80
};

const Puck = {
    x: 400,
    y: 400,
    width: 50,
    height: 50,
    velocity: {
        x: 0,
        y: 0,
    }
}
// let xpos = 400;

// let ypos = 400;


let dx = 1;
let dy = 0;
let score = 0;

function setup() {
    createCanvas(800, 800);
    background("black");
    backdrop();
}


/**
 * 
*/
function draw() {
    background("black");
    backdrop();
    drawPaddle();
    drawPaddle1();
    drawPuck();
    drawGoal();
    drawGoal2();

}

function backdrop() {
    push();
    noStroke();
    fill("white");
    ellipse(400, 400, 250, 250);
    pop();

    push();
    noStroke();
    fill("black");
    ellipse(400, 400, 200, 200);
    pop();
}



function drawPaddle() {
    push();
    noStroke();
    fill(255, 0, 255);
    //rect(mouseX, 640, 100, 30);
    ellipse(mouseX, Paddle.y, Paddle.size);
    pop();
}

function drawPuck() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(Puck.x, Puck.y, Puck.width, Puck.height);
    // if (xpos >= width - 20 || xpos == 20) {
    //     dx = -dx
    // }
    pop();
}

function drawPaddle1() {
    push();
    noStroke();
    fill(255, 0, 255);
    //rect(340, 140, 100, 50);
    ellipse(Paddle1.x, Paddle1.y, Paddle1.size);
    pop();
}
function movePuck() {
    if (Puck.x >= width - 20 || Puck.x == 20) {
        dx = -dx
    }
}
function drawGoal() {
    push();
    noStroke();
    fill(255, 230, 320);
    rect(250, 750, 300, 90);
    pop();
}

function drawGoal2() {
    push();
    noStroke();
    fill(255, 230, 320);
    rect(250, 0, 300, 50);
    pop();
}

function checkPaddleOverlapped() {

    // check distance between puck and padde
    const d = dist(puck.x, puck, y, paddle.x, paddle.y);
    const d1 = dist(puck.x, puck.y, paddle1.x, paddle1.y);
    //check distance between puck and goals
    const score = dist();
    if (puck === paddle) {

    }
}
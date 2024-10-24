/**
 * Bouncy Ball Ball Bonanza
 * Emma
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
// our ball
const ball = {
    x: 300,
    y:20,
    width: 10,
    height: 10,
    velocity:{
        x:0,
        y:2,
    },
    fill:"yellow",
};
// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10,
   fill:"pink",
};

const gravity= 0.1;

// create canvas
function setup() {
createCanvas(600,300);
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background("#87ceeb");

movePaddle(paddle);
moveBall(ball);

handleBounce(ball,paddle);

drawElement(paddle);
drawElement(ball);
}
/***
 * 
 */
function moveBall(ball){
    ball.velocity.y= ball.velocity.y + gravity;

   ball.x = ball.x + ball.velocity.x + gravity;
ball.y = ball.y + ball.velocity.y+ gravity; 
}
/**
 * moves the paddle
 */
function movePaddle(paddle){
paddle.x= mouseX;
}

function handleBounce(ball,paddle){
    const overlap= centredRectanglesOverlap(ball,paddle);

    if (overlap){
        ball.y = paddle.y - paddle.width/2 - ball.width/2;
        ball.velocity.y *= -1;
}
}
function centredRectanglesOverlap(a, b) {
    return (a.x + a.width/2 > b.x - b.width/2 &&
            a.x - a.width/2 < b.x + b.width/2 &&
            a.y + a.height/2 > b.y - b.height/2 &&
            a.y - a.height/2 < b.y + b.height/2);
  }
/***
 * draws a element
 */

function drawElement(element){
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(element.x,element.y,element.width,element.height);
    pop();
}
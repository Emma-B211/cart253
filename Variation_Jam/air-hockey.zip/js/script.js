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
let mouseY;
let puck;
let speedX, speedY;
let friction=0.995;
// const Paddle = {
//     x: mouseX,
//     y: mouseY,
//     size: 80
// };

const Paddle1 = {
    x: 400,
    y: 150,
    size: 80
};

// const puck = {
//     x: 400,
//     y: 400,
//     width: 50,
//     height: 50,
//    speedX: (-5,5),
//    speedY:(-5,5),
    
//     amITouch:false
// }
// let xpos = 400;

// let ypos = 400;


// let dx = 1;
// let dy = 0;
let paddle;  // Paddle position
let paddleWidth = 200;
let paddleHeight = 50;

let ball;
let score = 0;

function setup() {
    createCanvas(800, 800);
    ball = createVector(width / 2, height / 2); // Ball starts in the center
  speedX = random(-5, 5);  // Random initial speed
  speedY = random(-5, 5);
  paddle = createVector(width / 2, height - 650); // Paddle near the bottom
   // resetPuck();
}


/**
 * 
*/
function draw() {
    background("black");
    backdrop();
    //drawPaddle();
    drawPaddle1();
    //movePaddle();
    movePuck();
    
   // drawPuck();
    // drawGoal();
    // drawGoal2();

}
// function resetPuck(){
//     drawPuck.x=400;
//     puck.y=400;
//     puck.amITouch=false;
// }
// function movePaddle(){
//     Paddle.x=mouseX;
//     Paddle.y=mouseY;
// }
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



// function drawPaddle() {
//     push();
//     noStroke();
//     fill(255, 0, 255);
//     //rect(mouseX, 640, 100, 30);
//     ellipse(mouseX, mouseY, Paddle.size);
//     pop();
// }

// function drawPuck() {
//     push();
//     noStroke();
//     fill(255, 255, 0);
//     ellipse(puck.x, puck.y, puck.width, puck.height);
//     // if (xpos >= width - 20 || xpos == 20) {
//     //     dx = -dx
//     // }
//     pop();
// }

function drawPaddle1() {
    push();
    noStroke();
    fill(255, 0, 255);
    //rect(340, 140, 100, 50);
    ellipse(Paddle1.x, Paddle1.y, Paddle1.size);
    pop();
}
// to move the puck like in air hockey
function movePuck() {
    // Update puck position
  ball.x += speedX;
  ball.y += speedY;

  // apply firction to gradually slow down the puck
 speedX *= friction;
 speedY*= friction;
 //bounce of the walls
 if (ball.x<=0 || ball.x>= width){
    speedX *=-1;// reverse x velocity
 }
 if (ball.y<=0|| ball.y>=height){
    speedY*=-1; // reverse y velocity
 }
 // Draw the ball
 fill('yellow');
 noStroke();
 ellipse(ball.x, ball.y, 20, 20);
  // Draw the paddle (follow mouse input)
  paddle.x = constrain(mouseX, paddleWidth / 2, width - paddleWidth / 2);
  fill(0, 255, 0);
  rect(paddle.x - paddleWidth / 2, paddle.y, paddleWidth, paddleHeight);

  // Check for collision with paddle
  if (ball.y + 10 >= paddle.y && ball.y - 10 <= paddle.y + paddleHeight &&
      ball.x >= paddle.x - paddleWidth / 2 && ball.x <= paddle.x + paddleWidth / 2) {
    speedY *= -1;  // Reverse ball direction on collision
    ball.y = paddle.y - 11;  // Prevent sticking to the paddle
  }
    //puck.amITouch=true;
}

// function movePaddle(){
//     paddle.x= constrain(mouseX,paddleWidth/2, width- paddleWidth/2);
//     fill(0,255,0);
//     rect(paddle.x-paddleWidth/2,paddle.y,paddleWidth,paddleHeight);
    
//     // check for collision with paddle
//     if (ball.y + 10 >= paddle.y && ball.y -10<= paddle.y + paddleHeight && ball.x>=paddle.x-paddleWidth/2 && paddle.x+ paddleWidth /2){
//         speedY *=-1// reverse ball direction
//         ball.y = paddle.y-11;// prevent sticking to the paddle
//     }
// }
function drawGoal() {
    push();
    noStroke();
    fill(255, 230, 320);
    rect(250, 750, 300, 30);
    pop();
}

function drawGoal2() {
    push();
    noStroke();
    fill(255, 230, 320);
    rect(250, 0, 300, 40);
    pop();
}

// function checkPaddleOverlapped() {

//     // check distance between puck and padde
//     const d = dist(puck.x, puck, y, Paddle.x, Paddle.y);
//     // const d = dist(puck.x, puck.y, paddle1.x, paddle1.y);
//     //check distance between puck and goals
//     // const touch = dist(d < puck.);
//     if (puck === paddle) {

//     }

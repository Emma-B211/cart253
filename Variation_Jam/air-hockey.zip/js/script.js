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


// let mouseX;
// let mouseY;
// let width;
// let height;

// let puck;
// let speedX, speedY;
// let friction=0.995;
// // const Paddle = {
// //     x: mouseX,
// //     y: mouseY,
// //     size: 80
// // };

// const Paddle1 = {
//     x: 400,
//     y: 150,
//     size: 80
// };

// // const puck = {
// //     x: 400,
// //     y: 400,
// //     width: 50,
// //     height: 50,
// //    speedX: (-5,5),
// //    speedY:(-5,5),
    
// //     amITouch:false
// // }
// // let xpos = 400;

// // let ypos = 400;


// // let dx = 1;
// // let dy = 0;
// let paddle;  // Paddle position
// let paddleWidth = 200;
// let paddleHeight = 50;

// let ball;
// let score = 0;

// function setup() {
//     createCanvas(800, 800);
//     ball = createVector(width / 2, height / 2); // Ball starts in the center
//   speedX = random(-5, 5);  // Random initial speed
//   speedY = random(-5, 5);
//   paddle = createVector(width / 2, height - 40); // Paddle near the bottom
//    // resetPuck();
// }

let ball;
let speedX, speedY;
let friction = 1; // change it with velocity for a variation ??

// User paddle variables
let userPaddleWidth = 100;
let userPaddleHeight = 20;
let userPaddleY;

// AI paddle variables
let aiPaddleWidth = 100;
let aiPaddleHeight = 20;
let aiPaddleX;
let aiPaddleY = 50;  // Top of the canvas

// goal dimension
let goalWidth=400;



// score variable
let playerScore=0;
let aiScore=0;
// Delay after scoring
let resetTimer=60;

function setup() {
  createCanvas(800, 800);
ball = createVector(width / 2, height / 2);
  speedX = random(-5, 5);
  speedY = random(3, 5)*(random()>0.5? 1: -1); // randomize direction
  
  mouseY = height - 90;  // User paddle near the bottom
  aiPaddleX = width / 2;      // Center AI paddle horizontally

}

/**
 * 
*/
function draw() {
    background("black");
    backdrop();
   
    //drawPaddle1();

    movePuck();
    movePaddle();
    aiPaddle();
    displayScore();
    drawGoal();
    drawGoal2();

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
function movePuck() {
    // Update ball position
  ball.x += speedX;
  ball.y += speedY;
  
  // Apply friction
  speedX *= friction;
  speedY *= friction;
  
  // Bounce off walls
  if (ball.x <= 0 || ball.x >= width) speedX *= -1;
  
  // Bounce off top and bottom (with scoring or game logic, this would be modified)
  if (ball.y <= 0 || ball.y >= height) speedY *= -1;

//check for scoring conditions and goals
if (ball.y<=0){
    if (ball.x > (width-goalWidth)/ 2 && ball.x < (width + goalWidth)/2){
       //ai missed
    playerScore++;
    resetBall(); 
    }
    
}

if (ball.y >= height){
    if (ball.x >(width-goalWidth)/2 && ball.x<(width + goalWidth/2)){
       // player missed
    aiScore++;
resetBall();  
    }
   
}
    
    


  // Draw the ball
  fill('yellow');
  ellipse(ball.x, ball.y, 20, 20);
  
    //puck.amITouch=true;
}
function displayScore(){
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text(playerScore,width/2,height/2+90);// player score at the bottom
    text(aiScore,width/2, height/2-50); // ai score at the top

}
function movePaddle(){
   // -------- User Paddle --------
  let userPaddleX = constrain(mouseX, userPaddleWidth / 2, width - userPaddleWidth / 2);
  fill(0, 255, 0);
  rect(userPaddleX - userPaddleWidth / 2, mouseY, userPaddleWidth, userPaddleHeight);
  
  // User paddle collision
  if (ball.y + 10 >= mouseY && ball.x >= userPaddleX - userPaddleWidth / 2 &&
      ball.x <= userPaddleX + userPaddleWidth / 2) {
    speedY *= -1;
    ball.y = mouseY - 11;  // Prevent sticking
  }
}

function aiPaddle(){
   
  // -------- AI Paddle (Computer Player) --------
  aiPaddleX = lerp(aiPaddleX, ball.x, 0.05); // Smoothly follow the ball with some delay
  fill(255, 0, 0);
  rect(aiPaddleX - aiPaddleWidth / 2, aiPaddleY, aiPaddleWidth, aiPaddleHeight);
  
  // AI paddle collision
  if (ball.y - 10 <= aiPaddleY + aiPaddleHeight && ball.x >= aiPaddleX - aiPaddleWidth / 2 &&
      ball.x <= aiPaddleX + aiPaddleWidth / 2) {
    speedY *= -1;
    ball.y = aiPaddleY + aiPaddleHeight + 11;  // Prevent sticking
  }

}

function resetBall(){
    ball = createVector(width/2, height/2);
    speedX=random(-5,5);
    speedY=random(-5,5);
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

// function drawPaddle1() {
//     push();
//     noStroke();
//     fill(255, 0, 255);
//     //rect(340, 140, 100, 50);
//     ellipse(Paddle1.x, Paddle1.y, Paddle1.size);
//     pop();
// }
function drawGoal() {
    push();
    stroke(255);
    fill(255, 230, 320);
    rect((width-goalWidth) / 2 , 0, goalWidth,30);
    pop();
}

function drawGoal2() {
    push();
    stroke(255);
    fill(255, 230, 320);
    rect((width-goalWidth)/2, height -25, goalWidth,30);
    pop();
}


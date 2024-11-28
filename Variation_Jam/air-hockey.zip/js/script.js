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
// const goal1 = {
//   x: 400,
//   y: 15,
//   w: 100,
//   h: 30,
//   fill: "pink"
// };
// const goal2 = {
//   x: 400,
//   y: -15,
//   w: 100,
//   h: 30,
//   fill: "pink"
// }

const ball = {
  x: 10,
  y: 10,
  size: 30,
  fill: "yellow"
};

let speedX, speedY;
let friction = 1;

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
let goalWidth = 100;

// const goal = {
//   ballIsNear: false,
// }


// score variable
let playerScore = 0;
let aiScore = 0;
// Delay after scoring
let resetTimer = 60;

function setup() {
  createCanvas(800, 800);
  speedX = random(-10, 10);
  speedY = random(-10, 10) * (random() > 0.5 ? 1 : -1); // randomize direction
  rectMode(CENTER);
  mouseY = height - 90;  // User paddle near the bottom
  aiPaddleX = width / 2;      // Center AI paddle horizontally
  userPaddleY = mouseY;
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
  //goalMove();

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
  if (ball.y <= 0) {
    if (ball.x > (width - goalWidth) / 2 && ball.x < (width + goalWidth) / 2) {
      //scores into the goal
      playerScore++;
      resetBall();
    }

  }

  if (ball.y >= height) {
    // console.log(ball.x);
    if (ball.x > (width - goalWidth) / 2 && ball.x < (width + goalWidth) / 2) {
      // player missed
      // console.log(ball.x);
      aiScore++;
      resetBall();
    }

  }




  // Draw the ball
  fill('yellow');
  ellipse(ball.x, ball.y, 20, 20);

  //puck.amITouch=true;
}
function displayScore() {
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(playerScore, width / 2, height / 2 + 90);// player score at the bottom
  text(aiScore, width / 2, height / 2 - 50); // ai score at the top

}
function movePaddle() {
  // -------- User Paddle --------
  let userPaddleX = constrain(mouseX, userPaddleWidth / 2, width - userPaddleWidth / 2);
  fill(0, 255, 0);
  rect(userPaddleX, userPaddleY, userPaddleWidth, userPaddleHeight);

  // User paddle collision
  if (ball.y + 10 >= mouseY && ball.x - 10 >= userPaddleX - userPaddleWidth / 2 &&
    ball.x + 10 <= userPaddleX + userPaddleWidth / 2) {
    speedY *= -1;
    ball.y = mouseY - 11;  // Prevent sticking
  }
}

function aiPaddle() {

  // -------- AI Paddle (Computer Player) --------
  aiPaddleX = lerp(aiPaddleX, ball.x, 0.05); // Smoothly follow the ball with some delay
  fill(255, 0, 0);
  rect(aiPaddleX - aiPaddleWidth / 2, aiPaddleY, aiPaddleWidth, aiPaddleHeight);

  // AI paddle collision
  if (ball.y - 10 <= aiPaddleY + aiPaddleHeight / 2 && ball.x - 10 >= aiPaddleX - aiPaddleWidth / 2 &&
    ball.x + 10 <= aiPaddleX + aiPaddleWidth / 2) {
    speedY *= -1;
    ball.y = aiPaddleY + aiPaddleHeight + 11;  // Prevent sticking
  }
  // -10
}
// check overlap between ball and goal
// function overlap(ball, goal) {
//   if (ball.x - ball.size / 2 + goal.)

// }
// resets the ball back (will adjust to where it is reset two depending who won)
function resetBall() {
  ball = createVector(width / 2, height / 2);
  speedX = random(-10, 10);
  speedY = random(-10, 10);
  // ballIsNear: false;
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

// draws the goal
function drawGoal() {
  push();
  stroke(255);
  fill(255, 230, 320);
  rect(width / 2, 15, goalWidth, 30);
  pop();
  // ballIsNear: true;
}
// draws the other goal
function drawGoal2() {
  push();
  stroke(255);
  fill(255, 230, 320);
  rect(width / 2, height - 15, goalWidth, 30);
  pop();
  // ballIsNear: true;
}
function goalMoveVariation() {
  if (score === 10) {
    goalMove();

  }
}

// function goalMove() {
//   //check distance from ball to first goal
//   const d = dist(ball.x, ball.y, drawGoal().x, drawGoal().y);
//   // check distance from ball to second goal
//   const d2 = dist(ball.x, ball.y, drawGoal2().x, drawGoal2().y);

//   // check if its an overlap
//   const goal = (d < drawGoal / 2 + ball.x / 2);
//   const goal2 = (d2 < drawGoal2 / 2 + ball.x / 2)

//   // code for goal to avoid the ball
//   if (drawGoal && !goal.ballIsNear) {
//     rect((wdith + goalWidth) / 2, 0, goalWidth, 30);
//   }
//   if (drawGoal2 && !goal.ballIsNear) {
//     rect((width + goalWidth) / 2, height + 25, goalWidth, 30);
//   }
// }

function resetScore() {
  if (score === 10) {
    score = 0;

  }
}

function gameChange() {
  if (score === 10) {
    gamevariation.js;
  }
}
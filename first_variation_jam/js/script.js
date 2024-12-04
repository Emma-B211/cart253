
/***
 * Air Hockey Turn Foosball
 * Emma Beldick 
 */
"use strict";

// Goal settings
const goal1 = { x: 400, 
    y: 15,
     w: 100, 
     h: 30, 
     fill: "pink" };
const goal2 = { 
    x: 400,
     y: 785, 
     w: 100, 
     h: 30, 
     fill: "pink" };

// Ball settings
const ball = { x: 400, y: 400, w: 20, size: 20, fill: "yellow" };

// Ball speed and friction
let speedX, speedY;
let friction = 1;

// Rod settings
let rodSpacing = 100;
let userRodY;
let aiRodY;
let paddleWidth = 20;
let paddleHeight = 20;
let numPaddles = 4;

// New rotation variables
let rodAngle = 0;
let rotationSpeed = 0.05;

// ai rod settings
let aiRodAngle=0; // ai's rod rotation angle
let aiRotationSpeed=0.03; // speed of AI rod rotation
let aiRotationDirection = 1; // rotation direction (1 or -1)
// Score variables
let playerScore = 0;
let aiScore = 0;

function setup() {
  createCanvas(800, 800);
  resetBall();
  rectMode(CENTER);
  userRodY = height - 40;
  aiRodY = 40;
}

function draw() {
  background("black");
  backdrop();

  drawBall();
  movePuck();
  movePaddle();
  aiPaddle();
  displayScore();
  drawGoal(goal1);
  drawGoal(goal2);
}

function movePuck() {
  ball.x += speedX;
  ball.y += speedY;

  // Apply friction
  speedX *= friction;
  speedY *= friction;

  // Bounce off walls
  if (ball.x <= 0 || ball.x >= width) speedX *= -1;

  // Check for scoring conditions
  if (ball.y <= 0 && ball.x > goal1.x - goal1.w / 2 && ball.x < goal1.x + goal1.w / 2) {
    playerScore++;
    resetBall();
  }
  if (ball.y >= height && ball.x > goal2.x - goal2.w / 2 && ball.x < goal2.x + goal2.w / 2) {
    aiScore++;
    resetBall();
  }
}

function drawBall() {
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x, ball.y, ball.size, ball.size);
  pop();
}

// Adjust movePaddle to pass rodAngle
function movePaddle() {
    let userRodX = constrain(mouseX, 0, width - rodSpacing);
    drawRod(userRodX, userRodY, color(0, 255, 0), rodAngle); // Pass rodAngle
  
    // Update rotation angle
    if (keyIsDown(UP_ARROW)) rodAngle -= rotationSpeed;
    if (keyIsDown(DOWN_ARROW)) rodAngle += rotationSpeed;
  
    for (let i = 0; i < numPaddles; i++) {
      let paddleX = userRodX + i * (rodSpacing / (numPaddles - 1));
      checkCollision(paddleX, userRodY,rodAngle);
    }
  }

// Updated drawRod function to accept an angle parameter
function drawRod(x, y, rodColor, angle) {
    stroke(rodColor);
    strokeWeight(5);
    line(x, y, x + rodSpacing, y);
  
    // Draw paddles with individual rotation
    for (let i = 0; i < numPaddles; i++) {
      let paddleX = x + i * (rodSpacing / (numPaddles - 1));
      push();
      translate(paddleX, y); // Move to paddle position
      rotate(angle);         // Rotate each paddle individually
      fill(rodColor);
      noStroke();
      rect(-paddleWidth / 2, -paddleHeight / 2, paddleWidth, paddleHeight);
      pop();
    }
  }


// Updated aiPaddle to pass aiRodAngle
function aiPaddle() {
    let aiRodX = constrain(ball.x - rodSpacing / 2, 0, width - rodSpacing);
    drawRod(aiRodX, aiRodY, color(255, 0, 0), aiRodAngle); // Pass aiRodAngle
  
    // AI rotation logic: Rotate when the ball is nearby
    if (abs(ball.y - aiRodY) < 100) {
      aiRodAngle += aiRotationSpeed * aiRotationDirection;
    }
  

    for (let i = 0; i < numPaddles; i++) {
      let paddleX = aiRodX + i * (rodSpacing / (numPaddles - 1));
      checkCollision(paddleX, aiRodY,aiRodAngle);
    }
  }
  function checkCollision(paddleX, rodY, rodAngle) {
    // Translate and rotate ball coordinates to paddle's local space
    let dx = ball.x - paddleX;
    let dy = ball.y - rodY;
  
    // Apply reverse rotation to get ball's position relative to paddle orientation
    let rotatedX = dx * cos(-rodAngle) - dy * sin(-rodAngle);
    let rotatedY = dx * sin(-rodAngle) + dy * cos(-rodAngle);
  
    // Check collision in paddle's local space (non-rotated rectangle check)
    if (
      rotatedX >= -paddleWidth / 2 &&
      rotatedX <= paddleWidth / 2 &&
      rotatedY >= -paddleHeight / 2 &&
      rotatedY <= paddleHeight / 2
    ) {
      // Reflect ball with rotation consideration
      let angleReflect = atan2(speedY, speedX) + rodAngle;
      speedX = cos(angleReflect) * 5;
      speedY = sin(angleReflect) * 5;
      ball.y = rodY + (ball.y > rodY ? paddleHeight / 2 + 1 : -paddleHeight / 2 - 1);
    }
  }

function displayScore() {
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(playerScore, width / 2, height / 2 + 90);
  text(aiScore, width / 2, height / 2 - 50);
}

function drawGoal(goal) {
  push();
  stroke(255);
  fill(goal.fill);
  rect(goal.x, goal.y, goal.w, goal.h);
  pop();
}

function resetBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  speedX = random(-5, 5);
  speedY = random(3, 5) * (random() > 0.5 ? 1 : -1);
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

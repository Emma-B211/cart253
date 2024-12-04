"use strict";

// Goal settings
const goal1 = {
  x: 400,
  y: 15,
  w: 100,
  h: 30,
  fill: "pink"
};
const goal2 = {
  x: 400,
  y: 785,
  w: 100,
  h: 30,
  fill: "pink"
};

// Ball settings
const ball = {
  x: 400,
  y: 400,
  w: 20,
  size: 20,
  fill: "yellow"
};

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

// Score variables
let playerScore = 0;
let aiScore = 0;

// Delay after scoring
let resetTimer = 60;

function setup() {
  createCanvas(800, 800);
  resetBall();
  rectMode(CENTER);
  userRodY = height - 40;
  aiRodY = 40;  // AI rod near the top
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
  // Update ball position
  ball.x += speedX;
  ball.y += speedY;

  // Apply friction
  speedX *= friction;
  speedY *= friction;

  // Bounce off walls
  if (ball.x <= 0 || ball.x >= width) speedX *= -1;

  // Check for scoring conditions
  if (ball.y <= 0) {
    if (ball.x > goal1.x - goal1.w / 2 && ball.x < goal1.x + goal1.w / 2) {
      playerScore += 1;
      resetBall();
    }
  }

  if (ball.y >= height) {
    if (ball.x > goal2.x - goal2.w / 2 && ball.x < goal2.x + goal2.w / 2) {
      aiScore += 1;
      resetBall();
    }
  }
}

function drawBall() {
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x, ball.y, ball.size, ball.size);
  pop();
}

function movePaddle() {
  let userRodX = constrain(mouseX, 0, width - rodSpacing);
  drawRod(userRodX, userRodY, color(0, 255, 0));

  for (let i = 0; i < numPaddles; i++) {
    let paddleX = userRodX + i * (rodSpacing / (numPaddles - 1));
    checkCollision(paddleX, userRodY);
  }
}

function drawRod(x, y, rodColor) {
  stroke(rodColor);
  strokeWeight(5);
  line(x, y, x + rodSpacing, y);

  for (let i = 0; i < numPaddles; i++) {  // Corrected loop condition
    let paddleX = x + i * (rodSpacing / (numPaddles - 1));
    fill(rodColor);
    noStroke();
    rect(paddleX - paddleWidth / 2, y - paddleHeight / 2, paddleWidth, paddleHeight);
  }
}

function aiPaddle() {
  let aiRodX = constrain(ball.x - rodSpacing / 2, 0, width - rodSpacing);
  drawRod(aiRodX, aiRodY, color(255, 0, 0));

  for (let i = 0; i < numPaddles; i++) {
    let paddleX = aiRodX + i * (rodSpacing / (numPaddles - 1));
    checkCollision(paddleX, aiRodY);
  }
}

function checkCollision(paddleX, rodY) {
  if (
    ball.y >= rodY - paddleHeight / 2 &&
    ball.y <= rodY + paddleHeight / 2 &&
    ball.x >= paddleX - paddleWidth / 2 &&
    ball.x <= paddleX + paddleWidth / 2
  ) {
    speedY *= -1;
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

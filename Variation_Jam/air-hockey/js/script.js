"use strict";

/***
 * air hockey game variation
 * Emma Beldick
 */

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

const ball = {
  x: 10,
  y: 10,
  w: 20,
  size: 20,
  fill: "yellow"
};

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
let goalWidth = 100;

// score variable
let playerScore = 0;
let aiScore = 0;
// Delay after scoring
let resetTimer = 60;

let gameState='start';

function setup() {
  createCanvas(800, 800);
  speedX = random(-10, 10);
  speedY = random(-10, 10) * (random() > 0.5 ? 1 : -1); // randomize direction
  rectMode(CENTER);
  aiPaddleX = width / 2;      // Center AI paddle horizontally
  userPaddleY = height - 90;
}

function draw() {
  if(gameState==='start'){
    displayStartScreen();
  } else if (gameState==='play'){
     background("black");
  backdrop();

  drawBall();
  movePuck();
  movePaddle();
  aiPaddle();
  displayScore();
  moveGoals();
  drawGoal();
  drawGoal2();

  // check for game over condition
  if(playScore>=10|| aiScore>=10){
    gameState='gameOver';
  } else if (gameState==='gameOver'){
    displayGameOverScreen();
  }
  }
 
}
// display starting screen
function displayStartScreen(){
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER,CENTER);
  text("Air Hockey",width/2,height/2-50);
  textSize(30);
  text("Click to Start",width/2,height/2 +50);
}
//display game over screen
function displayGameOverScreen(){
  background(0);
  textSize(50);
  textAlign(CENTER,CENTER);
  text("Game Over", width/2,height/2-50);
  text(`${playerScore >= 10? "Player Wins!": "AI Wins!"}`,width/2,height/2);
  textSize(30);
  text("Click to Restart",width/2,height/2+80);
}

function mousePressed(){
  if (gameState==='start'|| gameState==='gameOver'){
    resetGame();
    gameState='play'; // switch to play state
  }
}
function resetGame(){
  playerScore=0;
  aiScore=0;
  resetBall();
}
function moveGoals() {
  // Goal 1 (top): Move randomly and avoid the ball if it's close
  if (abs(ball.y - goal1.y) < 200) {  // Check if ball is near goal1
    goal1.x += (ball.x > goal1.x) ? -2 : 2; // Move away from ball
  } else {
    goal1.x += random(-2, 2); // Random movement when ball is far
  }
  goal1.x = constrain(goal1.x, goal1.w / 2, width - goal1.w / 2); // Keep within canvas

  // Goal 2 (bottom): Similar logic
  if (abs(ball.y - goal2.y) < 200) {
    goal2.x += (ball.x > goal2.x) ? -2 : 2;
  } else {
    goal2.x += random(-2, 2);
  }
  goal2.x = constrain(goal2.x, goal2.w / 2, width - goal2.w / 2);
}

function movePuck() {
  ball.x += speedX;
  ball.y += speedY;

  speedX *= friction;
  speedY *= friction;

  // Bounce off walls
  if (ball.x <= 0 || ball.x >= width) speedX *= -1;

  // Bounce off top and bottom (with scoring or game logic, this would be modified)
  if (ball.y <= 0 || ball.y >= height) speedY *= -1;

  // Check for scoring conditions and goals
  if (ball.y <= 0) {
    if (ball.x > (width - goal1.w) / 2 && ball.x < (width + goal1.w) / 2) {
      playerScore += 1;
      resetBall();
    }
  }

  if (ball.y >= height) {
    if (ball.x > (width - goal2.w) / 2 && ball.x < (width + goal2.w) / 2) {
      aiScore += 1;
      resetBall();
    }
  }
}

function drawBall() {
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x, ball.y, ball.w, ball.size);
  pop();
}

function displayScore() {
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(playerScore, width / 2, height / 2 + 90); // player score at the bottom
  text(aiScore, width / 2, height / 2 - 50); // ai score at the top
}

function movePaddle() {
  let userPaddleX = constrain(mouseX, userPaddleWidth / 2, width - userPaddleWidth / 2);
  userPaddleY = mouseY;
  fill(0, 255, 0);
  rect(userPaddleX, userPaddleY, userPaddleWidth, userPaddleHeight);

  // User paddle collision
  if (ball.y >= userPaddleY && ball.x >= userPaddleX - userPaddleWidth / 2 &&
    ball.x <= userPaddleX + userPaddleWidth / 2) {
    speedY *= -1;
    ball.y = userPaddleY - 11;  // Prevent sticking
  }
}

function aiPaddle() {
  aiPaddleX = lerp(aiPaddleX, ball.x, 0.05); // Smoothly follow the ball with some delay
  aiPaddleX = constrain(aiPaddleX, aiPaddleWidth / 2, width - aiPaddleWidth / 2); // Keep within bounds
  fill(255, 0, 0);
  rect(aiPaddleX - aiPaddleWidth / 2, aiPaddleY, aiPaddleWidth, aiPaddleHeight);

  // AI paddle collision
  if (ball.y <= aiPaddleY + aiPaddleHeight / 2 && ball.x >= aiPaddleX - aiPaddleWidth / 2 &&
    ball.x <= aiPaddleX + aiPaddleWidth / 2) {
    speedY *= -1;
    ball.y = aiPaddleY + aiPaddleHeight + 11;  // Prevent sticking
  }
}

function resetBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  speedX = random(-10, 10);
  speedY = random(-10, 10);
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

function drawGoal() {
  push();
  stroke(255);
  fill(goal1.fill);
  rect(goal1.x, goal1.y, goal1.w, goal1.h);
  pop();
}

function drawGoal2() {
  push();
  stroke(255);
  fill(255, 230, 320);
  rect(goal2.x, goal2.y, goal2.w, goal2.h);
  pop();
}

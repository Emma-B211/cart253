"use strict";

/***
 * Air Hockey but with progressively more balls.
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
let balls=[]

const ball = {
  x: 10,
  y: 10,
  w: 20,
  size: 20,
  fill: (255,0,0)
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

let gameState="start"; // possible values: 'start','play','gameOver'


// new variable for game state
let gameOver=false;


function setup() {
  createCanvas(800, 800);
//   speedX = random(-10, 10);
//   speedY = random(-10, 10) * (random() > 0.5 ? 1 : -1); // randomize direction
  rectMode(CENTER);
  aiPaddleX = width / 2;      // Center AI paddle horizontally
  userPaddleY = height - 90;

  // initialize with one ball
  addNewBall();
}

function draw() {
    if (gameState === 'start') {
      displayStartScreen();
    } else if (gameState === 'play') {
      background("black");
      backdrop();
  
      for (let ball of balls) {
        moveBall(ball);
        drawBall(ball);
      }
      movePaddle();
      aiPaddle();
      displayScore();
      drawGoal();
      drawGoal2();
  
      // Check for game-over condition
      if (playerScore >= 10 || aiScore >= 10) {
        gameState = 'gameOver';
      }
    } else if (gameState === 'gameOver') {
      displayGameOver();
    }
  }
  //display start screen
function displayStartScreen(){
    background(0);
    fill(255);
    textSize(50);
    textAlign(CENTER,CENTER);
    text("Air Hockey with Too Much Balls",width/2,height/2-50);

    textSize(30);
    text("Click to Start",width/2,height/2+20);
}  
//display game over screen
function displayGameOver(){
    background(0);
    fill(255);
    textSize(50);
    textAlign(CENTER,CENTER);
    text("Game Over",width/2,height/2-50);
    text(`${playerScore>=10?"player": "AI"}Wins!`,width/2,height/2);

    textSize(30);
    text("Click to Replay",width /2, height /2 +80);
}

function mousePressed() {
    // Start or restart the game based on the state
    if (gameState === 'start' || gameState === 'gameOver') {
      resetGame();
      gameState = 'play';
    }
  }
  
    // reset game state
    function resetGame(){
        playerScore=0;
        aiScore=0;
        balls=[]; // Clear existing balls
        addNewBall(); // add the initial ball again
    }

  
  
  //drawBall();
  //movePuck();
  // update and draw all balls
  
function addNewBall(){
    balls.push({
        x: width/2,
        y:height/2,
        w:20,
        size:20,
        fill:"yellow",
        speedX: random(-10,10),
        speedY:random(-10,10)*(random()>0.5 ? 1 : -1),
    });
}

// Update ball position and handle collisions
function moveBall(ball) {
    ball.x += ball.speedX;
    ball.y += ball.speedY;
  
    // Bounce off walls
    if (ball.x <= 0 || ball.x >= width) ball.speedX *= -1;
  
    // Check scoring conditions
    if (ball.y <= 0 && ball.x > (width - goal1.w) / 2 && ball.x < (width + goal1.w) / 2) {
      playerScore++;
      resetBalls();
    } else if (ball.y >= height && ball.x > (width - goal2.w) / 2 && ball.x < (width + goal2.w) / 2) {
      aiScore++;
      resetBalls();
    }
  
    // Bounce off top and bottom if not scoring
    if (ball.y <= 0 || ball.y >= height) ball.speedY *= -1;
  }
  //draw each ball
// Draw each ball
function drawBall(ball) {
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.w, ball.size);
    pop();
  }

  function resetBalls() {
    // Reset all balls' positions and add a new one
    for (let ball of balls) {
      ball.x = width / 2;
      ball.y = height / 2;
      ball.speedX = random(-10, 10);
      ball.speedY = random(-10, 10);
    }
    addNewBall();  // Add an additional ball
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
  
    // Paddle collision for all balls
    for (let ball of balls) {
      if (ball.y >= userPaddleY && ball.x >= userPaddleX - userPaddleWidth / 2 &&
        ball.x <= userPaddleX + userPaddleWidth / 2) {
        ball.speedY *= -1;
        ball.y = userPaddleY - 11;  // Prevent sticking
      }
    }
  }

  function aiPaddle() {
    for (let ball of balls) {
      aiPaddleX = lerp(aiPaddleX, ball.x, 0.05); // Smoothly follow the ball with some delay
    }
    aiPaddleX = constrain(aiPaddleX, aiPaddleWidth / 2, width - aiPaddleWidth / 2); // Keep within bounds
    fill(255, 0, 0);
    rect(aiPaddleX, aiPaddleY, aiPaddleWidth, aiPaddleHeight);
  
    // AI paddle collision for all balls
    for (let ball of balls) {
      if (ball.y <= aiPaddleY + aiPaddleHeight / 2 && ball.x >= aiPaddleX - aiPaddleWidth / 2 &&
        ball.x <= aiPaddleX + aiPaddleWidth / 2) {
        ball.speedY *= -1;
        ball.y = aiPaddleY + aiPaddleHeight + 11;  // Prevent sticking
      }
    }
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

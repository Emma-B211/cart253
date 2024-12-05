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
const goal1 = {
  x: 400,
  y: 15,
  w: 300,
  h: 30,
  fill: "pink"
};
const goal2 = {
  x: 400,
  y: 785,
  w: 300,
  h: 30,
  fill: "pink"
};

const ball = {
  x: 10,
  y: 10,
  w:20,
  size: 20,
  fill: "yellow"
};

const rod={
    x: 40,
    y: 50,
    w: 100,
    h:10,
  fill:"blue"
};

// arrays for rods
let userRods=[];
let aiRods=[];

let speedX, speedY;
let friction = 1; // change it with velocity for a variation ??

let userRodX;
let userRodY;

let aiRodX;
// let aiPaddleY = 50;  // Top of the canvas
let goalScored = false;
let goalAnimationTimer = 0;

const aiRod={
    x:30,
    y:50,
    w:100,
    h:10,
    fill:"red"
}

// goal dimension
let goalWidth = 100;

// const goal = {
//   ballIsNear: false,
// }


// score variable
let playerScore = 0;
let aiScore = 0;
// Delay after scoring
let resetTimer = 10;



let gameState = 'start'; // Possible values: 'start', 'play', 'gameOver'

// Main draw loop based on game state
function setup() {
  createCanvas(800, 800);
  speedX = random(-10, 10);
  speedY = random(-10, 10) * (random() > 0.5 ? 1 : -1); // randomize direction
  rectMode(CENTER);
 // initialized rods with player
userRods.push(createRod(height-90,"blue",3));
aiRods.push(createRod(90,"red",3));
resetScore();
  
}
function draw() {
  if (gameState === 'start') {
    displayStartScreen();
  } else if (gameState === 'play') {
    background("black");
    backdrop();
    
    drawBall();
    movePuck();
    
    moveAndDrawRod(userRods[0], false); // User rod
    moveAndDrawRod(aiRods[0], true);    // AI rod
    
    displayScore();
    drawGoal();
    drawGoal2();
    
    // Game over condition
    if (playerScore >= 10 || aiScore >= 10) {
      gameState = 'gameOver';  // Fix the typo
  }
  } else if (gameState === 'gameOver') {
    displayGameOverScreen();
  }
}

// Display the start screen
function displayStartScreen() {
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Air Hockey Galore", width / 2, height / 2 - 50);
  textSize(30);
  text("Click to Start", width / 2, height / 2 + 50);
}

// Display the game over screen
function displayGameOverScreen() {
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2 - 50);
  text(`${playerScore >= 10 ? "Player Wins!" : "AI Wins!"}`, width / 2, height / 2);
  textSize(30);
  text("Click to Restart", width / 2, height / 2 + 80);
}

// Handle mouse clicks to start or restart the game
function mousePressed() {
  if (gameState === 'start' || gameState === 'gameOver') {
    resetGame();
    gameState = 'play';
  }
}

// Reset game state and scores
function resetGame() {
  playerScore = 0;
  aiScore = 0;
  resetBall();    // Reset the ball position

}

function createRod(y,fillColor,playerCount){
    return{
        x:width/2, // centered initially
        y:y,
        w:300, // total rod length
        h:10,
        fill:fillColor,
        playerCount: playerCount, // number of players on the rod
        offsetX:0, // for movement
    }
}
function moveAndDrawRod(rod, isAI) {
  if (isAI) {
    rod.x = lerp(rod.x, ball.x, 0.05); // Faster AI response
  } else {
    rod.x = constrain(mouseX, rod.w / 2, width - rod.w / 2); // User control
  }
  // Draw rod and players
  stroke(255);
  strokeWeight(4);
  line(rod.x - rod.w / 2, rod.y, rod.x + rod.w / 2, rod.y);
  for (let i = 0; i < rod.playerCount; i++) {
    let playerX = rod.x - rod.w / 2 + (rod.w / (rod.playerCount - 1)) * i;
    fill(rod.fill);
    rect(playerX, rod.y, 20, 50); // Player shape
  }
  checkCollision(rod);
}

function movePuck() {
    ball.x += speedX;
    ball.y += speedY;
  console.log(`Ball Position: (${ball.x}, ${ball.y}) Speed: (${speedX}, ${speedY})`);
    // Bounce off side walls
    if (ball.x <= 0 || ball.x >= width) {
      speedX *= -1;
    }
  
    // Check if the ball scores in goal1
    if (ball.y <= goal1.y + goal1.h / 2 && ball.x > goal1.x - goal1.w / 2 && ball.x < goal1.x + goal1.w / 2) {
      aiScore++;
      goalScored = true;
      goalAnimationTimer = 10; // Duration of the animation
      resetBall();
    }
    // Check if the ball scores in goal2
    if (ball.y >= goal2.y - goal2.h / 2 && ball.x > goal2.x - goal2.w / 2 && ball.x < goal2.x + goal2.w / 2) {
      playerScore++;
      goalScored = true;
      goalAnimationTimer = 10;
      resetBall();
    }
  }
  
  
function drawBall(){
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x,ball.y,ball.w,ball.size);
  pop();
}
function displayScore() {
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text(playerScore, width / 2, height / 2 + 90);// player score at the bottom
  text(aiScore, width / 2, height / 2 - 50); // ai score at the top

}
function moveRods(rods, isAI = false) {
    rods.forEach((rod) => {
      if (isAI) {
        // AI logic: follow the ball with smoothing
        rod.x = lerp(rod.x, ball.x, 0.02);
      } else {
        // User control: rods follow mouse movement horizontally
        rod.x = constrain(mouseX + rod.offset, rod.w / 2, width - rod.w / 2); // Uses defined offset
      }
      
      // Draw each rod
      fill(rod.fill);
      rect(rod.x, rod.y, rod.w, rod.h);
      checkCollision(rod); // Pass rod object to checkCollision
    });
  }
  
  function checkCollision(rod) {
    if (
        ball.y + ball.size / 2 >= rod.y - rod.h / 2 &&
        ball.y - ball.size / 2 <= rod.y + rod.h / 2 &&
        ball.x >= rod.x - rod.w / 2 &&
        ball.x <= rod.x + rod.w / 2
    ) {
        let impactPoint = (ball.x - rod.x) / (rod.w / 2);
        speedY *= -1;
        speedX += impactPoint * 5;

        // Clamp speeds to avoid uncontrollable motion
        speedX = constrain(speedX, -12, 12);
        speedY = constrain(speedY, -12, 12);

        // Prevent ball from sticking
        ball.y = rod.y + (ball.y > height / 2 ? -rod.h / 2 - ball.size / 2 : rod.h / 2 + ball.size / 2);
    }
}  
  

function resetBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  // Ensure non-zero speeds
  speedX = random(-5, 5);
  speedY = random([-5, 5]); // Choose from -5 or 5 to avoid zero
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
  if (goalScored && goalAnimationTimer > 0) {
    fill(color(random(255), random(255), random(255))); // Rainbow effect
    goalAnimationTimer--;
  } else {
    fill(goal1.fill);
    goalScored = false;  // Reset flag after animation
  }
  rect(goal1.x, goal1.y, goal1.w, goal1.h);
  pop();
}
// draws the other goal
function drawGoal2() {
  push();
  stroke(255);
  if (goalScored && goalAnimationTimer > 0) {
    fill(color(random(255), random(255), random(255))); // Rainbow effect
    goalAnimationTimer--;
  } else {
    fill(goal2.fill);
    goalScored = false;  // Reset flag after animation
  }
  rect(goal2.x, goal2.y, goal2.w, goal2.h);
  pop();
}

function resetScore() {
  playerScore = 0;
  aiScore = 0;
  resetBall();
}



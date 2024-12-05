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
let resetTimer = 60;

let gameState='start' // possible value: 'start','play','ganeOver'


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

/**
 * main draw loop based on game state
*/
function draw() {
  if (gameState==='start'){
    displayStartScreen();
  } else if (gameState==='play'){
    background("black");
    backdrop();
  drawBall();
    movePuck();
  moveAndDrawRod(userRods[0],false); // user rod
  moveAndDrawRod(aiRods[0],true); // ai rods
    displayScore();
    drawGoal();
    drawGoal2();
   
    // game over condition
    if (playScore >= 10 || aiScore>= 10){
      gameState='game0ver';
    } else if(gameState==='gameOver'){
      displayGameOverScreen();
    }


    // decrease animation timer
    if (goalAnimationTimer >0){
  goalAnimationTimer--;
    } else {
      goalScored=false;
    }
  }


}
//display start screen
function displayStartScreen(){
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER,CENTER);
  text("Air Hockey turn Foosball",width/2,height/2-50);
  textSize(30);
  text("Click to Start",width/2,height/2+50);
}

//display game over screen
function displayGameOverScreen(){
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER,CENTER);
  text("Game Over", width/2,height/2-50);
  text(`${playerScore>=10? "Player Wins!" : "AI Wins"}`, width/2, height/2);
  textSize(30);
  text("Click to Restart", width/2,height/2,+80);
}

//handle mouse click or restart game
function mousePressed(){
  if(gameState==='start'|| gameState==='gameOver'){
    resetGame();
    gameState='play';
  }
}
// reset game state and score
function resetGame(){
  playerScore=0;
  aiScore=0;
  resetBall();
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
function moveAndDrawRod(rod,isAI){
    if (isAI){
        rod.x=lerp(rod.x,ball.x,0.02);// ai follows the ball
    } else {
        rod.x=constrain(mouseX,rod.w/2,width-rod.w/2);// user control

    }
    // draw rod
    stroke(255);
    strokeWeight(4);
    line(rod.x-rod.w/2,rod.y,rod.x+rod.w/2,rod.y);

    // draw players on the rod
    for (let i =0; i < rod.playerCount;i++){
        let playerX = rod.x-rod.w/2 + (rod.w/(rod.playerCount-1))*i;
        fill(rod.fill);
        rect(playerX,rod.y,20,50); // player shape
    }
// check collision
checkCollision(rod);
}

function movePuck() {
    ball.x += speedX;
    ball.y += speedY;
  
    // Bounce off side walls
    if (ball.x <= 0 || ball.x >= width) {
      speedX *= -1;
    }
  
    // Check if the ball scores in goal1
    if (ball.y <= goal1.y + goal1.h / 2 && ball.x > goal1.x - goal1.w / 2 && ball.x < goal1.x + goal1.w / 2) {
      aiScore++;
      goalScored = true;
      goalAnimationTimer = 30; // Duration of the animation
      resetBall();
    }
    // Check if the ball scores in goal2
    if (ball.y >= goal2.y - goal2.h / 2 && ball.x > goal2.x - goal2.w / 2 && ball.x < goal2.x + goal2.w / 2) {
      playerScore++;
      goalScored = true;
      goalAnimationTimer = 30;
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
      // Calculate impact angle based on position hit on the rod
      let impactPoint = (ball.x - rod.x) / (rod.w / 2); // Normalized: -1 to 1
      
      // Reflect Y velocity and add variation based on impact point
      speedY *= -1;
      speedX += impactPoint * 5;  // Adjust 5 to control deflection strength
  
      // Ensure ball doesn't stick
      ball.y = rod.y + (ball.y > height / 2 ? -rod.h / 2 - ball.size / 2 : rod.h / 2 + ball.size / 2);
  
      // Add slight increase in speed after hit for more dynamic movement
      let speedMultiplier = 1.05;
      speedX *= speedMultiplier;
      speedY *= speedMultiplier;
    }
  }
  
  
  



// resets the ball back (will adjust to where it is reset two depending who won)
function resetBall() {
  // ball = createVector(width / 2, height / 2);
  ball.x = width/2;
  ball.y = height/2;
  //reset speeds after scoring
  speedX= random(-5,5);//lower values for realistic start speed
  speedY= random(-5,5);
 
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

// draws the goal
function drawGoal() {
    push();
    stroke(255);
    fill(goalScored && goalAnimationTimer > 0 ? color(random(255), random(255), random(255)) : goal1.fill);
    rect(goal1.x, goal1.y, goal1.w, goal1.h);
    pop();
  // ballIsNear: true;
}
// draws the other goal
function drawGoal2() {
    push();
    stroke(255);
    fill(goalScored && goalAnimationTimer > 0 ? color(random(255), random(255), random(255)) : goal2.fill);
    rect(goal2.x, goal2.y, goal2.w, goal2.h);
    pop();
  // ballIsNear: true;
}

// function resetScore() {
//   if (playerScore >= 10 || aiScore >= 10) {
//     playerScore = 0;
//     aiScore=0;
//     resetBall();//reset the ball when score reaches 10

//   }
// }

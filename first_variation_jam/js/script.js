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

// const rodsquare={
//   x:30,
//   y:20,
//   w:100,
//   h:20,
// }
let speedX, speedY;
let friction = 1; // change it with velocity for a variation ??

// User paddle variables
// let userPaddleWidth = 100;
// let userPaddleHeight = 20;
// let userPaddleY;
let userRodX;
let userRodY;
// AI paddle variables
// let aiPaddleWidth = 100;
// let aiPaddleHeight = 20;
let aiRodX;
// let aiPaddleY = 50;  // Top of the canvas

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

function setup() {
  createCanvas(800, 800);
  speedX = random(-10, 10);
  speedY = random(-10, 10) * (random() > 0.5 ? 1 : -1); // randomize direction
  rectMode(CENTER);
  // mouseY = height - 90;  // User paddle near the bottom
  aiRodX = width / 2;      // Center AI paddle horizontally
  userRodY = height - 90;

  for (let i = 0; i < 3; i++) {
    userRods.push({
      x: 150 * i + 100, // Adjust spacing
      y: height - 90,
      w: 100,
      h: 10,
      fill: "blue",
      offset: 150 * i, // Added offset for user control logic
    });
    
    aiRods.push({ // Corrected the syntax here
      x: 150 * i + 100,
      y: 90,
      w: 100,
      h: 10,
      fill: "red",
    });
  }
  
}

/**
 * 
*/
function draw() {
  background("black");
  backdrop();

  //drawPaddle1();
drawBall();
  movePuck();
  moveRods(userRods); //move and draw user rods
  moveRods(aiRods,true); // move and draw ai rods
//   movePaddle();
  //aiPaddle();
  displayScore();
  drawGoal();
  drawGoal2();
  // resetScore();
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
  ball.x += speedX;
  ball.y += speedY;

  // Gradually reduce speed (but not too much)
  speedX *= 0.995; // Adjust friction values for better gameplay
  speedY *= 0.995;

  // Bounce off side walls
  if (ball.x <= 0 || ball.x >= width) {
    speedX *= -1;
  }

  // Check for scoring
  if (ball.y <= goal1.y + goal1.h && ball.x > goal1.x - goal1.w / 2 && ball.x < goal1.x + goal1.w / 2) {
    playerScore++;
    resetBall();
  }

  if (ball.y >= goal2.y - goal2.h && ball.x > goal2.x - goal2.w / 2 && ball.x < goal2.x + goal2.w / 2) {
    aiScore++;
    resetBall();
  }






  // Draw the ball
  // fill('yellow');
  // ellipse(ball.x, ball.y, 20, 20);

  //puck.amITouch=true;
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
  

function checkCollision(rod) { // Added rod as a parameter
    if (
      ball.y + ball.size / 2 >= rod.y - rod.h / 2 &&
      ball.y - ball.size / 2 <= rod.y + rod.h / 2 && // Corrected division issue (was `h/w`)
      ball.x >= rod.x - rod.w / 2 &&
      ball.x <= rod.x + rod.w / 2
    ) {
      speedY *= -1; // Reflect the ball
      ball.y = rod.y + (ball.y > height / 2 ? -rod.h / 2 - ball.size / 2 : rod.h / 2 + ball.size / 2); // Prevent sticking
    }
  }
  
// function movePaddle() {
//   // -------- User Rod Movement --------
//   userRodX = constrain(mouseX, rod.w / 2, width - rod.w / 2);
//   fill(rod.fill);
//   rect(userRodX, userRodY, rod.w, rod.h); // Centered on mouseX

//   // User paddle collision
//   if (
//     ball.y + ball.size / 2 >= userRodY - rod.h / 2 &&
//     ball.x >= userRodX - rod.w / 2 &&
//     ball.x <= userRodX + rod.w / 2
//   ) {
//     speedY *= -1;
//     ball.y = userRodY - rod.h / 2 - ball.size / 2; // Prevent sticking
//   }
// }


// function aiPaddle() {
//   // AI follows the ball with a delay
//   aiRodX = lerp(aiRodX, ball.x, 0.05); // Smooth tracking
//   fill(aiRod.fill);
//   rect(aiRodX, aiRod.y, aiRod.w, aiRod.h);

//   // AI paddle collision
//   if (
//     ball.y - ball.size / 2 <= aiRod.y + aiRod.h / 2 &&
//     ball.x >= aiRodX - aiRod.w / 2 &&
//     ball.x <= aiRodX + aiRod.w / 2
//   ) {
//     speedY *= -1;
//     ball.y = aiRod.y + aiRod.h / 2 + ball.size / 2; // Prevent sticking
//   }
// }

// check overlap between ball and goal
// function overlap(ball, goal) {
//   if (ball.x - ball.size / 2 + goal.)

// }
// resets the ball back (will adjust to where it is reset two depending who won)
function resetBall() {
  // ball = createVector(width / 2, height / 2);
  ball.x = width/2;
  ball.y = height/2;
  // speedX = random(-10, 10);
  // speedY = random(-10, 10);
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
  fill(goal1.fill);
  rect(goal1.x, goal1.y, goal1.w, goal1.h);
  pop();
  // ballIsNear: true;
}
// draws the other goal
function drawGoal2() {
  push();
  stroke(255);
  fill(255, 230, 320);
  rect(goal2.x, goal2.y, goal2.w, goal2.h);
  pop();
  // ballIsNear: true;
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
resetBall();
  }
}

// function gameChange() {
//   if (score === 10) {
    
//   }
// }
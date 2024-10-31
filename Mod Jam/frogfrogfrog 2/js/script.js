/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 * 
 * 1.fly movement
 * fly to fly in different directions on x and y
 * 
 * 2.score
 * display score on top right corner
 * 
 * if (frogmissesfly){
 * score = score - 1
 *  size = size - 1
 * if (frogcatchesfly)
 * score = score + 1
 *  size = size + 5
 * }
 * 3. add a title, instructions and end screen
 * 
 * 4. code tongue bring fly back to the frogs mouth on capture
 * 
 * 5. visual effect when frog catches fly or when it loses fly
 */


"use strict";
let myText;
let mysecondText;
// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0, // random(0,648);,
    y: 100, //random(0,648);, // Will be random
    size: 10,
    velocity:{
        x:0,
        y:0,

    }
};
/***
 * score
 */
let score = 0;
// current state
let state = "title"
/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);
myText = "GAME OVER"
mysecondText="YOU WIN"
    // Give the fly its first random position
    resetFly();
}
 function draw(){
    if (state=== "title"){
        title();
    } else if (state === "instruction"){
       instruction();
    } else if (state === "game"){
        game();
    }
 }


function game() {
    background("#87ceeb");
    
    moveFly();
    drawFly();

    checkTongueFlyOverlap();
    drawScore();
    moveFrog();
    moveTongue();
    drawFrog();
    gameOver();
    

    
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    //fly change its mind
    const r = random(0,200);
    if(r<20){
        fly.velocity.x=random(-4,4);
        fly.velocity.y=random(-4,4);
    }
// keep the fly on the canvas
fly.x=constrain(fly.x,0,width);
fly.y=constrain(fly.y,0,height);

    fly.x = fly.x + fly.velocity.x;
    //fly.x= random(100);
    fly.y =fly.y + fly.velocity.y;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        // score -= 1;
        // frog.body.size -= 1;
        resetFly();
    }


}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = random(0,480);
    fly.y = random(0,480);
}
/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
    if(frog.tongue.y < 1){
        score -= 1;
        frog.body.size -= 10;
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
    
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    const noteaten = (d > frog.tongue.size/2 - fly.size/2);
    if (eaten) {
        // increase the score
        score= score + 1;
        // increase the frog body size
        frog.body.size += 10;
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    } else if (noteaten){
        // decrease the score
        // score -= 1;
        // decrease the frogs body size
        //frog.body.size= frog.body.size -5;
        // reset the fly
        //resetFly();
    }
    //frog.tongue.state="inbound";

    }
 //   const noteaten = (d > frog.tongue.size/2 + fly.size/2);
//  if (noteaten){
//         // decrease score
//         score = score -1;
//         // reset fly
//         resetFly();

//         // bring the tongue back
//         frog.tongue.state = "inbound";
        
//     }


/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}
// draws the scoreboard
function drawScore(){
push();
textAlign(RIGHT,TOP);
textSize(80);
textStyle(BOLD);
fill("#800080");
text(score,width,0);
pop();

//frog.body.size = map(score,0,10,50,500);

}
// title screen
function title(){
    background("green");
    textAlign(CENTER, BOTTOM);
    textSize(88);
    text("Catch The Fly",300, 300);
}

function instruction(){
    background("lilac");

    textAlign(LEFT, TOP);
    textSize(20);
    text("instructions",100,100);

    textAlign(LEFT, LEFT);
    textSize(20);
    text("1. move the frog using the mouse",100,200);

    textAlign(LEFT, CENTER);
    textSize(20);
    text("2.use the left mouse botton to catch the flies",100,250);

    textAlign(LEFT,CENTER);
    textSize(20);
    text("3. if you catch the fly, you get larger", 100,300);

    textAlign(LEFT,BOTTOM);
    textSize(20);
    text("4. if you missed, you'll get smaller",100,350);

    textAlign(LEFT,BOTTOM);
    textSize(20);
    text("5. Reach 10 points you won the game", 100, 400);

    textAlign(LEFT,BOTTOM);
    textSize(20);
    text("6. Reach -1 points you will lose the game", 100, 450);

}
function keyPressed(){
    state="title";

}
function mousePressed(){
    if (state ==="title"){
state="instruction";
} else if (state==="instruction"){
    state="game";
}
else if (state === "game"){
    if (frog.tongue.state === "idle") {
   frog.tongue.state = "outbound";
}

}
}

function gameOver(){
    if (score === 10){
        push();
        textAlign(CENTER. CENTER);
        textSize(50);
        textStyle(BOLD);
        text(mysecondText,width/2,height/2);
        pop();
    } else if (score === -1){
        push();
        textAlign(CENTER,CENTER);
        textSize(50);
        textStyle(BOLD);
        text(myText,width/2,height/2);
        pop();

    }
    //stop game
}


/**
 * Catch The Flies
 * Emma Beldick
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
//mode=0;// initially the game has not started
let myText;
let mysecondText;
let startButton;
let youWinhue = 0;
//let dragging = false;
//var time;
//var wait = 2000;
// var col = 100;
// var c = 80;
// var d = 100;
// var color = 240;
// var e = 30;
// var b = 120;

//let reset;

//let gamePaused=false;
//let gameOver=false;
//let gameStarted=false;
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
    velocity: {
        x: 0,
        y: 0,

    },
    amICaught: false,
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
    // myText = "GAME OVER"
    // mysecondText = "YOU WIN"
    //time=millis();
    // button= createButton('main menu','white');
    // button.position()

    // Give the fly its first random position
    resetFly();
}
function draw() {
    // title, instructions and game screen sequence
    if (state === "title") {
        title();
    } else if (state === "instruction") {
        instruction();
    } else if (state === "game") {
        game();
    } else if (state === "gameOver") {
        gameOver();
    } else if (state === "You Win") {
        youWin();
    } else if (state === "gameOver") {
        gameOver();
    }
    // when score equals to 10, the game will stop playing once it goes to the you win screen
    // if (score === 10){
    //reset();
    //     //restart();
    //     state="youWin"

    // }

}

// displays gameover when you lose
function gameOver() {
    push();
    background(0);
    textAlign(CENTER, CENTER);
    textSize(50);
    textStyle(BOLD);
    fill(255);
    text("gameOver", width / 2, height / 2);
    pop();

    // if (key === 'c') {
    //   restartGame();
    // }
}
// displays you win when you win
function youWin() {
    push();
    // background colour changes when you win
    push();
    colorMode(HSB);
    background(youWinhue, 100, 100);
    pop()
    youWinhue = (youWinhue + 1) % 360;
    textAlign(CENTER, CENTER);
    textSize(50);
    textStyle(BOLD);
    fill(255);
    text("You Win", width / 2, height / 2);
    // if (key === 'c') {
    //   restartGame();
    // }
}

// if c is pressed during you win or game over it will bring you back to the title 
// through the restartgame function.
function keyPressed() {
    if (key === 'c' && (state === "You Win" || state === "gameOver")) {
        restartGame();
    }
}
// code that when game is over and goes back to title it'll reset everything to normal
function restartGame() {
    score = 0;
    state = "title";
    frog.tongue.y = frog.body.y;
    frog.tongue.state = "idle";
    frog.body.size = 150;
}
// sets up everything in the game
function game() {
    background("#87ceeb");

    moveFly();
    drawFly();
    //restartGame();
    checkTongueFlyOverlap();
    drawScore();
    moveFrog();
    moveTongue();
    drawFrog();
    checkGameOver();
    //gameOver();
    //loseScene();
    //winScene();
    //mainMenu();
    //restartGame();
    // gameOver();
    // startGame();
    // pauseGame();
    // youWin();
    // youLose();
    //gameOver();

}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    //fly change its mind
    const r = random(0, 200);
    if (fly.amICaught === false) {
        if (r < 20) {
            fly.velocity.x = random(-4, 4);
            fly.velocity.y = random(-4, 4);
        }
        // keep the fly on the canvas
        fly.x = constrain(fly.x, 0, width);
        fly.y = constrain(fly.y, 0, height);

        fly.x = fly.x + fly.velocity.x;
        //fly.x= random(100);
        fly.y = fly.y + fly.velocity.y;
        // Handle the fly going off the canvas
        if (fly.x > width) {
            // score -= 1;
            // frog.body.size -= 1;
            resetFly();
        }

        // if (frog.tongue === fly) {
        //     dragging = true;
        // }
    }
    else {
        fly.y = frog.tongue.y;
        fly.x = frog.tongue.x;
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
    fly.x = random(0, 480);
    fly.y = random(0, 480);
    fly.amICaught = false;
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
            resetFly();
        }
    }
    if (frog.tongue.y < 1) {
        score -= 1;
        frog.body.size -= 10;
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    console.log(frog.body.size);

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
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    //const noteaten = (d > frog.tongue.size/2 - fly.size/2);
    if (eaten && !fly.amICaught) {
        // increase the score
        score += 1;
        // increase the frog body size
        frog.body.size += 10;
        // Reset the fly
        // resetFly();
        fly.amICaught = true;
        // Bring back the tongue
        frog.tongue.state = "inbound";
        // } else if (noteaten){
        //     // reset the fly
        //     //resetFly();
    }
    //frog.tongue.state="inbound";

}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (state === "title") {
        state = "instruction";
    } else if (state === "instruction") {
        state = "game";
    } else if (state === "game") {
        if (frog.tongue.state === "idle") {
            frog.tongue.state = "outbound";
        }
    }

}
// draws the scoreboard
function drawScore() {
    push();
    textAlign(RIGHT, TOP);
    textSize(80);
    textStyle(BOLD);
    fill("#800080");
    text(score, width, 0);
    pop();

    //frog.body.size = map(score,0,10,50,500);

}
// checks if the game is over 
function checkGameOver() {
    // when score equals to -1, the game will stop once the game over screen is shown
    if (score === -1) {
        //reset();
        //restart();
        push();
        noStroke();
        fill(255);
        //square(250,250,250)
        //text("Game Over",350,350);
        //square(250,250,250)
        pop();
        state = "gameOver"
        // reset();
        // if (state==="game"){
        //     state="title"
        // }
        //reset();
        // if (key === 'c') {
        //     //title();
        //     //reset();
        //     state = "title";
        // }

    } else if (score === 5) {
        push();
        noStroke;
        fill(255);
        //text("You Win", width/2, height/2 )
        pop();
        state = "You Win"
        // reset();
        // } else if(state==="gameOver"){
        //     state="title"
        // } else if (state==="youWin"){
        //     state="title"
        // }
        // if (key === 'c') {
        //     // title();
        //     state = "title";
        //     reset();
        // }
    }
}

// title screen
function title() {
    push();
    // col, c, d = mouseX / 3;
    background("green");
    fill(0);
    textAlign(CENTER, BOTTOM);
    textSize(88);
    text("Catch The Fly", 300, 300);
    pop();
}
// instruction screen
function instruction() {
    background("#c8ae2d8");

    textAlign(LEFT, TOP);
    fill(0);
    textSize(20);
    text("instructions", 100, 100);

    textAlign(LEFT, LEFT);
    fill(0);
    textSize(20);
    text("1. move the frog using the mouse", 100, 200);

    textAlign(LEFT, CENTER);
    fill(0);
    textSize(20);
    text("2.use the left mouse botton to catch the flies", 100, 250);

    textAlign(LEFT, CENTER);
    fill(0);
    textSize(20);
    text("3. if you catch the fly, you get larger", 100, 300);

    textAlign(LEFT, BOTTOM);
    fill(0);
    textSize(20);
    text("4. if you missed, you'll get smaller", 100, 350);

    textAlign(LEFT, BOTTOM);
    fill(0);
    textSize(20);
    text("5. Reach 5 points you won the game", 100, 400);

    textAlign(LEFT, BOTTOM);
    fill(0);
    textSize(20);
    text("6. Reach -1 points you will lose the game", 100, 450);

}
// function keyPressed() {
//     state = "title";

// }
// function that would make the player go from the title screen to the instruction screen than the game
function mousePressed() {
    if (state === "title") {
        state = "instruction";
    } else if (state === "instruction") {
        state = "game";
    }
    else if (state === "game") {
        state = "game";
        if (frog.tongue.state === "idle") {
            frog.tongue.state = "outbound";
        }
    } else if (state === "gameOver") {
        state = "gameOver";
    }
    else if (state === "youWin") {
        state = "youWin";
    }
    // else if (state === "youWin") {
    //     state = "YouWin";
    // } else if (state === "youLose") {
    //     state = "youLose";
    // }
    //     if (frog.tongue.state === "idle") {
    //    frog.tongue.state = "outbound";
    // }

}
// function scoreChanges() {
//     if (score === 10) {
//         state = "youWin"
//     } else if (score === -1) {
//         state === "youLose"
//     }
//     restartGame();
// }

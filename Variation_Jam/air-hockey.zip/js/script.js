/**
 * Air Hockey Galore
 * Emma Beldick
 * 
 */

"use strict";
/***
 * air hockey game variation
 * 1. goal area would open and close
 * 2. added foosball sticks to control where the ball/puck would go
 * 3. the ball would change shape after every point(maybe might change)
 */
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 800);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("black");
    backdrop();
    paddle();
    paddle1();
    puck();
    drawGoal();
    drawGoal2();

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



function paddle() {
    push();
    noStroke();
    fill(255, 0, 255);
    rect(340, 640, 100, 30);
    rect(300, 650, 180, 40);
    pop();
}

function puck() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(400, 400, 50, 50);
    pop();
}

function paddle1() {
    push();
    noStroke();
    fill(255, 0, 255);
    rect(340, 140, 100, 50);
    rect(300, 150, 180, 40);
    pop();
}

function drawGoal() {
    push();
    noStroke();
    fill(255, 230, 320);
    rect(250, 750, 300, 90);
    pop();
}

function drawGoal2() {
    push();
    noStroke();
    fill(255, 230, 320);
    rect(250, 0, 300, 50);
    pop();
}
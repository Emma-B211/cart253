/**
 * Day to Night
 * Emma Beldick
 

"use strict";

// const sun = {
//     x: 100,
//     y: 100,
//     size: 50,
//     fills:("#ffff01");

// }

// const flower = {
//     x: 300,
//     y: 250,
//     size: 50,
//     maxSize: 150,
//     growRate: 1
// }

// controls
// move mouse left and right to move the sun

/**
 * p5.js
 * https://p5.js.org
 */
let sunHeight;
let horizon = 350;
let y = mouseY;
var mouseY;
//let mouseX
function setup() {
    createCanvas(600, 600);
    sunHeight = mouseY;
    noCursor;
}

//let accelerationX = 30


function draw() {
    // background("lightblue");
    nightTime();
    //sun();
    cloud();
    clouds2();
    clouds3();
    field();
    field2();
    field3();
    flower();
    flower2();
    flower3();
    flower4();
    flower5();
    flower6();
    let n = map(0, mouseY, 100, 0, 255);
}
// draw the field
function field() {
    push();
    noStroke()
    fill(0, 105, 30);
    ellipse(500, 550, 450);
    pop();
}
function field2() {
    push();
    noStroke();
    fill(0, 125, 50);
    ellipse(300, 550, 450);
    pop();
}
function field3() {
    push();
    noStroke();
    fill(0, 105, 30);
    ellipse(100, 550, 450);
    pop();

}
// draws the clouds
function cloud() {
    push();
    noStroke();
    fill("#ffffff");
    ellipse(100, 100, 50);
    pop();

    push();
    noStroke();
    fill("#d3d3d3");
    ellipse(130, 90, 50);
    pop();

    push();
    noStroke();
    fill("#ffffff");
    ellipse(150, 100, 50);
    pop();
}

function clouds2() {
    push();
    noStroke();
    fill("#ffffff");
    ellipse(250, 100, 50);
    pop();

    push();
    noStroke();
    fill("#d3d3d3");
    ellipse(270, 90, 50);
    pop();

    push()
    noStroke();
    fill("#ffffff");
    ellipse(290, 100, 50);
    pop()
}

function clouds3() {
    push();
    noStroke();
    fill("#ffffff");
    ellipse(380, 100, 50);
    pop();

    push();
    noStroke();
    fill("#d3d3d3");
    ellipse(400, 90, 50);
    pop();

    push();
    noStroke();
    fill("#ffffff");
    ellipse(420, 100, 50);
    pop();
}

//draws the flowers on the field
function flower() {
    push();
    noStroke();
    fill("#ff0000");
    circle(200, 350, 50);
    pop();


    push();
    noStroke();
    fill("#ffff01");
    ellipse(200, 350, 10);
    pop();
}

function flower2() {
    push();
    noStroke();
    fill("#9F2B68");
    ellipse(350, 350, 50);
    pop();

    push();
    noStroke();
    fill("#ffff01");
    ellipse(350, 350, 10)
}

function flower3() {
    push();
    noStroke();
    fill("#5D3FD3");
    ellipse(400, 400, 20);
    pop();

    push();
    noStroke();
    fill("#ffff01");
    ellipse(400, 400, 5);
    pop();
}

function flower4() {
    push();
    noStroke();
    fill("#FADBD8");
    ellipse(50, 500, 35);
    pop();

    push();
    noStroke();
    fill("#ffff01");
    ellipse(50, 500, 20);
    pop();
}

function flower5() {
    push();
    noStroke();
    fill("#F0B27A");
    ellipse(520, 500, 60);
    pop();

    push();
    noStroke();
    fill("#ffff01")
    ellipse(520, 500, 20);
    pop();
}
// condition that would change from day to night by moving the sun on the y axis
function nightTime() {
    if (mouseY < horizon) {
        background("lightblue")
    } else if (mouseY > horizon) {
        background(0);
    }
    // sun
    fill("#ffff01");
    circle(mouseX, mouseY, 140);

    //horizon
    stroke("#06402B");
    line(0, horizon, 600, horizon);
}

function flower6(){
    push();
    noStroke();
    fill("#ffffff");
    ellipse(300,500,50);
    pop();

    //flower centre
    push();
    noStroke();
    fill("#ffff01");
    ellipse(300,500,20);
    pop();
}

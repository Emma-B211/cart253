/**
 * Growing Flower
 * Emma Beldick
 

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
// const sun = {
//     x: 100,
//     y: 100,
//     size: 50,
//     fills:("#ffff01");

// }

const flower = {
    x: 300,
    y: 250,
    size: 50,
    maxSize: 150,
    growRate: 1
}

let growFlower =

    //let mouseX
    function setup() {
        createCanvas(600, 600);

    }

//let accelerationX = 30


function draw() {
    background(0, 150, 155);
    sun();
    cloud();
    clouds2();
    clouds3();
    field();
    field2();
    field3();
    // checkFlowerSize();
    flower();
    growFlower();
    stem();
}
// grow the flower code
function growFlower() {
    flower.size += flower.growRate;
}

// function checkFlowerSize() {
//     const holeIsAtMaximum = (flower.size >= flower.maxSize);

//     if (holeIsAtMaximum) {
//         // Stop the hole's growth! It's big enough!
//         flower.growthRate = 0;
//     }
// }
function field() {
    push();
    noStroke()
    fill(0, 105, 30);
    ellipse(500, 500, 400);
    pop();
}
function field2() {
    push();
    noStroke();
    fill(0, 125, 50);
    ellipse(300, 500, 400);
    pop();
}
function field3() {
    push();
    noStroke();
    fill(0, 105, 30);
    ellipse(100, 500, 400);
    pop();

}

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
// interactive sun moves on the x axis.
function sun() {
    push();
    noStroke();
    fill("#ffff01");
    ellipse(mouseX, 50, 60);
    pop();
}


// growing flower
function flower() {
    push();
    noStroke();
    fill("#ff0000");
    circle(300, 250, flower.size);
    pop();

}

// stem of the flower
function stem() {
    push();
    noStroke();
    fill("#06402B");
    line(30, 20, 85, 75, 20, -10);
    pop();
}
// // grow the flower code
// function growFlower(); {
//     flower.size += flower.growRate;

//     // if (sun){
//     //     growRate = 1;
//     // } else {
//     //     stop;
//     // }

// }

// function checkHoleSize() {
//     const holeIsAtMaximum = (flower.size >= flower.maxSize);

//     if (holeIsAtMaximum) {
//         // Stop the hole's growth! It's big enough!
//         flower.growthRate = 0;
//     }
// }
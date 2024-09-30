/**
 * Growing Flower
 * Emma Beldick
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
// const cloud = {
//     x: 100,
//     y: 100,
//     size: 50,
//     fills: ("#ffffff")

// }
function setup() {
    createCanvas(600, 600);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 150, 155);
    cloud();
    clouds2();
    clouds3();
    field();
    field2();
    field3();
}
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
    ellipse(400,90,50);
    pop();

    push();
    noStroke();
    fill("#ffffff");
    ellipse(420,100,50);
    pop();
}
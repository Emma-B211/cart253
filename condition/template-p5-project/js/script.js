/**
 * Circle Master
 * Emma Beldick
 * 
 * This will be a program in which the user can move a circle
 * on the canvas using their own circle to "lead" it around.
 */

const puck = {
    x: 350,
    y: 350,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "000000"
};

/**
 * create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * move the user circle, check for overlap, draw the two circles
 */

function draw() {
    background("#aaaaaa");

    // draw the user and pack
    drawUser();
    drawPuck();
}
/**
 * sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;

}
/**
 * display the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}
/**
 * draw the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}
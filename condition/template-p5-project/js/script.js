/**
 * Circle Master
 * Emma Beldick
 * 
 * This will be a program in which the user can move a circle
 * on the canvas using their own circle to "push" it around.
 */

const puck = {
    x: 300,
    y: 300,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

const target = {
    x: 200,
    y: 200,
    size: 20,
    fill: "#ffff00",
    fills: {
        noOverlap: "#ffff00",
        overlap: "#ff0000"
    }
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

    //noCursor();
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();
    movePuck();
    // Draw the user and puck
    drawUser();
    drawPuck();
    drawTarget();
}

function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}
function checkTarget() {
    const d = dist(puck.x, puck.y, target.x, target.y);
    const overlap = (d < puck.size / 2 + target.size / 2);
    if (overlap) {
        target.fill = target.fills.overlap;
    } else {
        target.fill = target.fills.noOverlap;
    }
}
/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}
/**
 * move the puck based on user
 */
function movePuck() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size / 2 + puck.size / 2);
    if (overlap) {
        const dx = user.x - puck.x;
        const dy = user.y - puck.y;

        if (abs(dx) < abs(dy)) {
            // closer on x
            if (dx < 0) {
                puck.x += 1;
            } else if (dx > 0) {
                puck.x -= 5;
            }

        }
        else {
            // its further on y
            if (dy > 0) {
                puck.y += 1;
            }
            else if (dy < 0) {
                puck.y -= 5;
            }
        }
    }
}
/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}
// move target
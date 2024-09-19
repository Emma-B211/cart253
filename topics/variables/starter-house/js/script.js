/**
 * Starter House
 * Pippin Barr
 * 
 * Draws a house with shapes.
 * 
 * Disclaimer: Not actually my house.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(640, 480);
}

/**
 * Draws a house and its immediate environment
 */
function draw() { 
    background(150,200,250);
    drawSky();
   drawCloud();
    drawGround(); 
   drawmainBody();
   drawWindow();
   drawRoof();
drawEntrance();
drawDoorknob();
}
/**
 *  Draws a fluffly cloud
 */
function drawCloud(){
     // A cloud
     push();
     noStroke();
     // Note: using a single number for a colour will be greyscale
     // (As if you used the same number for R, G, and B)
     // So this is white:
     fill(255);
     ellipse(100, 100, 100, 100);
     ellipse(180, 80, 100, 100);
     ellipse(160, 120, 60, 60);
     ellipse(190, 130, 60, 60);
     ellipse(220, 120, 60, 60);
     pop();
}
/***
 * draws the ground
 */
function drawGround(){
    // The ground
    push();
    noStroke();
    fill(200);
    rect(0, 400, 640, 480);
    pop();
}
/***
 * draws the mainbody of the house
 */
function drawmainBody(){
       // The main body of the house
       push();
       noStroke();
       fill(250, 250, 200);
       rect(200, 240, 280, 180);
       pop();
}
/***
 * draws the roof
 */
function drawRoof(){
     // The roof
     push();
     noStroke();
     // You can also write colors in hex code in quote marks
     fill("#dc143c");
     triangle(180, 240, 340, 120, 500, 240);
     pop();
}
/***\
 * draws the window
 */
function drawWindow(){
     // A window
     push();
     // You can also write colour names from the CSS standard in quotes
     // https://www.w3.org/wiki/CSS/Properties/color/keywords
     stroke("deeppink");
     strokeWeight(5);
     fill("blanchedalmond");
     rect(220, 260, 80, 80);
     pop();
}
/***
 * display the sky
 */ 
function drawSky(){
    background(150,200.250);
   } 

   /***
    * draws the entrance
    */
  // An entrace
function drawEntrance(){
      // An entrace

    // The door
    push();
    noStroke();
    fill(0, 128, 0);
    rect(320, 300, 80, 120);
    pop();

}
/***
 * draws the doorknob
 */
function drawDoorknob(){
     // The doorknob
     push();
     noStroke();
     fill(255, 215, 0);
     ellipse(340, 360, 10, 10);
     pop();
 }


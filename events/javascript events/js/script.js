/**
 * plain javascript events
 * Author Name
 * 
 *Experimenting with event handling in Plain Javascript
 */

"use strict";
// information about the current and possible background fills
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    },
    switchKey: 32 // space bar
};



/**
 * creates the canvas
*/
function setup() {
    createCanvas(400, 400);

    window.addEventListener("keydown", changeBG);
}


/**
 * displays the background
*/
function draw() {
    background(bg.fill)
}

/**
 * switches the background from black to white
 */
function changeBG(event) {
    if (event.keyCode === bg.switchKey) {
        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        } else {
            bg.fill = bg.fills.black;
        }
    }
}



// "mousedown" "mouseup""mousemove" "mouseleave" "dblclick"
//"keydown" "keyup"
// "online" "offline"
// "scroll"
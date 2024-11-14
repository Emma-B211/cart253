/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

let mainText = "Click to generate a car name.";
let secondaryText = "Click to generate a dinosaur";
/**
 * Load the car and dinosaur data
 */
function preload() {
    carData = loadJSON("assets/data/cars.json");
    dinosaurData = loadJSON("assets/data/dinosaurs.json")
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    //const hyundai = carData.cars_description[0].cars[0];
    //const crocodilia = dinosaurData.dinosaurs_description[0].dinosaurs[0];

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    fill("blue");
    text(mainText, width / 2, height / 2);
    pop();

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    fill("blue");
    text(secondaryText, width / 2, height / 3);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
    // choose a random car
    // const car = random(car.cars_cars);
    carData = random(car.cars_cars);
    // choose a random dinosaurs
    //  const dino = random(dino.dinosaurs_dinosaurs);
    dinosaurData = random(dino.dinosaurs_dinosaurs);

}
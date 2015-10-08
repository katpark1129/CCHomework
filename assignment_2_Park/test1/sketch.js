// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Ported from Learning Processing
// https://github.com/shiffman/LearningProces

// The radius of a circle
var r = 100;
var dangle= 0; 

function setup() {
  createCanvas(640, 360);
  textFont('Georgia');
  textSize(32);
  // The text must be centered!
  textAlign(CENTER);
}

function draw() {
  background(255);

  
  if (mouseIsPressed){
  
  
  resetMatrix();
  translate(mouseX, mouseY);
  rotate(dangle);
  translate(30,30)
  ellipse(0,0, r*2, r*2);
  dangle =(dangle+.7) % TWO_PI;
 
  
}
}

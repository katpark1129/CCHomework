var result; 
var dangle =0;

function preload() {
  result = loadStrings('./Swift.txt');
  
}

function setup() {
  textAlign(CENTER);
}


function draw() {
  createCanvas(710, 500);
  background(0);
  var ind = floor(random(result.length));
  
  r = random(255);
  g = random(0);
  b = random(255);
  fill (r,g,b);
  textSize(10);
  stroke(r,g,b,255);
  frameRate(10)
  text(result[ind], 200,75);
 
  r = random(100);
  g= random(100);
  b= random (255);
  fill (r,g,b); 
  text(result[ind], 0,100);
  
  r = random(100);
  g= random(200);
  b= random (0);
  fill (r,g,b); 
  text(result[ind], 100,125);
  
  r = random(100);
  g= random(200);
  b= random (155);
  fill (r,g,b); 
  text(result[ind], 125,170);
 
if (mouseIsPressed){
  frameRate (2);
  text(result[ind], 125,170);
  dangle =(dangle+.7) % TWO_PI;
  
  resetMatrix();
  translate(mouseX, mouseY);
  rotate(dangle);
  translate(30,30)
  fill (0);
  ellipse(0,0,r*2,r*2);
 
  dangle =(dangle+.7) % TWO_PI;


  
}
 
   }

   


var result; 
function preload() {
  result = loadStrings('./Swift.txt');
}


function draw() {
  createCanvas(710, 500);
  background(0);
  var ind = floor(random(result.length));
 
  r = random(255);
  g = random(0);
  b = random(255);
  fill (r,g,b);
  textSize(15);
  stroke(r,g,b,255);
  
  frameRate(5);
  fill(r,g,b);
    text(result[ind], 10, 10, 80, 80);
  fill(r,g,b);
    text(result[ind], 160, 160, 80, 80);
  fill(r,g,b);  
   text(result[ind], 80, 80, 80, 80);  
  fill(r,g,b);  
   text(result[ind], 240, 240, 80, 80);  

}

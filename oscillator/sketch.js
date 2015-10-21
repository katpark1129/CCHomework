var osc; 
var thenotes = [64,62,64,65, 71, 72, 67, 72,67];
var whichnote = 0; 

function setup(){
  createCanvas(800,600); 
  osc = new p5.Oscillator(); 
  osc.setType('square'); 
  osc.start(); 
  
}

function draw() {
  background(255); 
  var thefreq = midiToFreq(thenotes[floor(whichnote)]);
  osc.freq(thefreq); 
  var increment = map(mouseX, 0, width, 0.05, 0.3);
  var theamp = map (mouseY, 0, height, 1, 0); 
  osc.amp(theamp, 0.1); 
  whichnote = (whichnote+increment)%thenotes.length; 
  }
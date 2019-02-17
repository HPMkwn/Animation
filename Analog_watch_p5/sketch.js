function setup() {
  createCanvas(windowWidth, windowHeight);
  rotate(PI/2)
}

function draw() {
  background(0)
  translate(windowWidth/2, windowHeight/2);
	var h = hour()
	var m = minute();
	var s = second();
	var mil = millis();
	var hr = map(((h%12)*60+m)/60,0,12,0,PI*2-.01);
	var mi = map(((m)*60+s)/60,0,60,0,PI*2-.01);
	var se = map(s,0,60,0,PI*2-.01);
  noFill();
  
  push();
  rotate(-PI+hr);
	stroke(235,48,124);
	strokeWeight(15);
  line(0,0,0,150)
  pop();
  
  push();
  rotate(-PI+mi);
	stroke(88, 42, 114);
	strokeWeight(13);
  line(0,0,0,200)
  pop();
  
  push();
  rotate(-PI+se);
  stroke(255, 250, 101)
	strokeWeight(10);
  line(0,0,0,180)
  pop();
  
 

  
	strokeWeight(15);
	stroke(235,48,124);
	arc(0,0,700,700,-PI/2,-PI/2+hr);
  
	stroke(88, 42, 114);
	strokeWeight(12);
	arc(0,0,660,660,-PI/2,-PI/2+mi);
  
  stroke(255, 250, 101)
	strokeWeight(8);
	arc(0,0,630,630,-PI/2,-PI/2+se);
  

}

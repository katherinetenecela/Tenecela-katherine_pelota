function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 background(255);
 fill(255,200,200);
 ellipse(60,90,16,16);
 strokeWeight(mouseY);
 circle(windowWidth / 2, windowHeight / 2, 300);
 rect(windowWidth / 5, windowHeight / 5, 20);
 textSize(20);
 text(mouseX, 50, 50);
 text(int(mouseY), 50, 100);
}

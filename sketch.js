function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 background(255);
 fill(255,200,200);
 ellipse(60,90,16,16);
 strokeWeight(mouseY);
 circle(windowWidth / 2, windowHeight / 2, 300);
 circle(windowWidth / 1, windowHeight / 1, 400);
 textSize(20);
 text(mouseX, 50, 50);
 text(int(mouseY), 50, 100);
}

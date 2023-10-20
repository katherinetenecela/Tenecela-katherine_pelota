let posX;
let posY;
let diametro = 100;
let radio = diametro / 2;
let colorDeFondo;
let vel = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  // frameRate(10);
  colorDeFondo = color(255, 182, 193);
}

function draw() {
  background(colorDeFondo);
  posX -= vel;

  if (posX < -radio) {
    diametro = random(20, 200);
    radio = diametro / 2;

    colorDeFondo = color(200, random(10, 255), 40);
    // colorDeFondo.saturation(0.7);
    posX = windowWidth + radio;
  }
  fill(190);
  strokeWeight(10);
  stroke(0, 200, 255);
  circle(posX, posY, diametro);

  print(posX);
}

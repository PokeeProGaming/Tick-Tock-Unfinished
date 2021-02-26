var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  hr = hour();
  mc = minute();
  sc = second();

}

function draw() {
  background(0);
  
  scAngle = map(sc,0,60,0,360);
  scAngle = map(sc,0, 120,0,360);
  scAngle = map(sc,0,60,0,360);


  drawSprites();
}
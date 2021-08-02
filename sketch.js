var ground;
var backgroundImage;
var rocket , rocketImage;

function preload(){
  backgroundImage = loadImage("backImage.jpg");
  rocketImage = loadImage("rocketImage.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth/2,windowHeight/2,50,height);
  ground.addImage(backgroundImage,"backImage.jpg");
  ground.velocityY = 2;

  rocket = createSprite(600,400);
  rocket.addImage(rocketImage,"rocketImage.png");
}

function draw() {
  background(0);  

  if(ground.y > height-100){
    ground.y = windowHeight/2;
  }

  drawSprites();
}
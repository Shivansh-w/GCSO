var car , wall;
var speed , weight;
var deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(50 , 200, 50, 50);
  car.shapeColor = color(0,230,230);
  wall = createSprite(400 , 300, 20, 800);
  speed = random(55 , 90);
  weight = random(400 , 1500);
  car.velocityX = speed;
}

function draw() {
  background(230,230,230);
  
  

  if (wall.x-car.x < (car.width+wall.width)/2) {
    deformation = 0.5 * weight * speed * speed/22509;

    if (deformation>180) {
      car.shapeColor = color(255, 0, 0);
    }

    if (deformation<180 && deformation>100) {
      car.shapeColor = color(230, 230, 0);
    }

    if (deformation<100) {
      car.shapeColor = color(0, 255, 0);
    }

    car.velocityX = 0;
 }

  drawSprites();
}
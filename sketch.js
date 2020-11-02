var car, wall
var speed, weight







function setup() {
  createCanvas(800,400);
  speed=random(30,100)
  weight=random(400,1500)
  
 car= createSprite(40, 200, 50, 50);
 wall=createSprite(700,200,15,400)
 car.velocityX=speed
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0
    var D =0.5 * speed * weight * speed/22509
    if(D>180){
car.shapeColor= color(255,0,0)

    }
    if(D>100 && D<180){
car.shapeColor=color(230,230,0)

    }
    if(D<100){
      car.shapeColor=color(0,255,0)
    }

  }
}
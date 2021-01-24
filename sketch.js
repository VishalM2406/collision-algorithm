var movingRect;
var fixedRect;

function setup() {
  createCanvas(1250,800);
  fixedRect = createSprite(400, 200, 70, 70);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600, 200, 50,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("lightBlue");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}
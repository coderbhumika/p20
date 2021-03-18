var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";
  fixedRect.debug=true;

  movingRect=createSprite(300,200,60,30);
  movingRect.shapeColor="red";
  movingRect.debug=true;

  movingRect.velocityX=+1;
  fixedRect.velocityX=-1;
}

function draw() {
  background("pink");  
  /*  Code for the alogrithm for istouching !! 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x< fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2)
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else
  {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  }*/

  // code for algorithm bounce Off

if(fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2 &&
  movingRect.x-fixedRect.x< fixedRect.width/2+movingRect.width/2)
  {
      movingRect.velocityX=movingRect.velocityX * -1;
      fixedRect.velocityX= fixedRect.velocityX *-1;
  }
  
  if( fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2)
    {
      movingRect.velocityY=movingRect.velocityY* -1;
      fixedRect.velocityY= fixedRect.velocityY *-1;
    }


 




  drawSprites();

  
}
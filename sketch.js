var playground;



function preload(){
 //load your images here 
redballoonImage = loadImage("red_balloon0.png");
blueballoonImage = loadImage("blue_balloon0.png");
greenballoonImage =loadImage("green_balloon0.png");
pinkballoonImage = loadImage("pink_balloon0.png");
bowImage = loadImage("bow0.png")
playgroundImage = loadImage("background0.png");
arrowImage = loadImage("arrow0.png");
  
}

function setup() {
  createCanvas(600, 600);

  playground = createSprite (0,0,600,600);
  playground.addImage (playgroundImage);
  playground.scale = 2.5
  //add code here
  bow = createSprite(450,300,20,50);
  bow.addImage (bowImage);
  for(var i = 60;i < 400;i = i + 60){
    blueballoon = createSprite(50,i,1,1);
    blueballoon.addImage(blueballoonImage);
    blueballoon.scale = 0.1
  }
  for(var i = 120;i < 350; i = i + 60){
    redballoon = createSprite(100,i,1,1);
    redballoon.addImage (redballoonImage);
    redballoon.scale = 0.1;
  }
  for(var i = 180; i < 250; i = i + 60){
    greenballoon = createSprite(150,i,1,1);
    greenballoon.addImage(greenballoonImage);
    greenballoon.scale = 0.1;
    
  }
  pinkballoon = createSprite(200,200,1,1);
  pinkballoon.addImage(pinkballoonImage);
  pinkballoon.scale = 1.2;
  
}

function draw() {
  
playground.velocityX = -2;
if (playground.x <0){
  playground.x = playground.width/2
  
}
  bow.y = World.mouseY;
  if (keyDown("space")){
    
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y;
  }
  drawSprites()
  
}
function createArrow(){
  arrow = createSprite (360,100,5,10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow
  
}

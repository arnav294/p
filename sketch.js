var dolphin,dodo,dolphinI,dodoI;
var dolphinFoodI;
var foodGroup;
var dolphinFood;
var eg;
var mediKit,mi,xio;

var rand ,rando
var score = 0;
var dolphinH = 5;
var laserShooter,laserShooterI;
var gameOver,gaveOverI

function preload(){
dolphinI = loadImage("dolphin.png");
dodoI = loadImage("dodo.png");
dolphinFoodI = loadImage("budo.png");
laserShooterI = loadImage("images.png");


}

function setup() {
  createCanvas(1400,800);
  dodo = createSprite(1000,400,200,200);
  dodo.addImage(dodoI);
  dodo.scale = 5.3;
  
  dolphin = createSprite(200,400);
  dolphin.addImage(dolphinI);
  dolphin.scale = 0.6;

  rand = random(100,900);
  rando = (400,800);
  foodGroup = createGroup();
  eg =  createGroup();
  xio = createGroup();
  
}

function draw(){
  


  background(200);
  

  dodo.velocityX = -3;
  

  if(dodo.x<300){
    dodo.x = dodo.width*2;
  }

  if(keyDown("Down_Arrow")){
    dolphin.velocityY = 2
  }
    if(keyDown("space")){
       dolphin.velocityY = 0
    }
    

    if(keyDown("Up_Arrow")){
      dolphin.velocityY = -2
   }


    

  
   if(foodGroup.isTouching(dolphin)){
     foodGroup.destroyEach();
     score =score+1

   }
   if(eg.isTouching(dolphin)){
    eg.destroyEach();
    dolphinH = dolphinH-1

  }
 if(xio.isTouching(dolphin)){
   dolphinH = dolphinH+1;
   xio.destroyEach();
 }

  drawSprites();
  SpawnAttack();
  spawnVillan();
 

if(dolphinH == 0){
  textSize(70);
  text("khel khatam", 600,600);
  dolphin.velocvityY = 0 ;
  dolphinFood
}

  textSize(30);
  text("score :"+score, 400,400);

  text("Dolphin Health :"+ dolphinH,700,200);
}

function SpawnAttack(){
if(frameCount % 220 === 0){
   dolphinFood = createSprite(1200,rand,200,200);
   dolphinFood.y = random(100,700)
  dolphinFood.addImage(dolphinFoodI);
  dolphinFood.scale = 0.4
  dolphinFood.velocityX = -4;
  dolphinFood.lifetime = 500;

  foodGroup.add(dolphinFood)
}
}
function spawnVillan(){
  if(frameCount % 160 === 0){

    laserShooter = createSprite(1200,rando,200,200);
    laserShooter.y = random(100,800)
    laserShooter.addImage(laserShooterI);
    laserShooter.scale = 0.4;
    laserShooter.velocityX = -4;
    laserShooter.lifetime = 400;


   eg.add(laserShooter)
  }
}

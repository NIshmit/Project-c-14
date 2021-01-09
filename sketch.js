var PLAY = 1;
var END = 0;
var gameState = PLAY;
var sword,swordimage;
var fruit,fruit1,fruit2,fruit3,fruit4;
var enemy,enemy1,enemy2;
var score=0;
var gameoverimage,gameover
var cut;
var over;
var position;

function preload(){
  swordimage=loadImage("sword.png")
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  enemy1=loadImage("alien1.png")
 gameoverimage = loadImage("gameover.png")
  cut=loadSound("knifeSwooshSound.mp3");
  over=loadSound("gameover.mp3");
}

function setup(){
  createCanvas(600,600)
  
  sword=createSprite(400,400)
  sword.addImage(swordimage);
  
  gameover = createSprite(300,100);
  gameover.addImage(gameoverimage);
  
  fruitGroup=new Group();
  enemyGroup=new Group();
}

function draw(){
background("blue")
  sword.x= mouseX
  sword.y= mouseY
  
  text ("score")

  if(gameState === PLAY){
     gameover.visible=false;
    
     if(position==1){
       fruit.X=400
       fruit.velocityX=-(7+(score/4));
     }
    else
      {
      if(position==2){
        fruit.X=0;
        fruit.velocityX= (7+(score/4));
      }
      }
    
    
    
  
     if(sword.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
       
       cut.play();
    score=score+2
  }
    
    if(sword.isTouching(enemyGroup)){
      enemyGroup.destroyEach(); 
      
      over.play();
       gameState = END;
      
    }
    
     Fruits();
  Enemy();
   
  }
  
  else if (gameState===END){
    gameover.visible=true;
  
    
    fruitGroup.setLifetimeEach(-2);
    enemyGroup.setLifetimeEach(-2);
    
    fruitGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0);
  }
  
  
  

  
 
  
  drawSprites();
  
   text("score:"+score,500,50)
  
}

function Fruits(){
  if(frameCount%80===0){
    position=Math.round(random(1,2))
  fruit=createSprite(400,200,20,20)
    fruit.scale=0.2;
  var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      default: break;}
    
 
    fruit.setLifetime=50;
    fruit.y=Math.round(random(50,340))
    
    fruitGroup.add(fruit);
}
}

function Enemy(){
  if(frameCount%200===0){
  enemy=createSprite(400,200,20,20)
 
  enemy.addImage(enemy1);  
  enemy.velocityX=-8
  enemy.y=Math.round(random(100,300))
    enemy.velocityX=-(8+(score/10));
  enemy.setLifetime=50;
    
    enemyGroup.add(enemy);
  }
}

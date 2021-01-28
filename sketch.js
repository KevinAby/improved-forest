
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var forest,forestImg;
var snake,snakeImg;
var rock,rImg;
var iG;
var gameState=Play
var Play
var End
var gameover,gImg


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  

 
  groundImg = loadImage("Imported piskel (22).gif")
 
  
  bananaImg = loadImage("Imported piskel (23).gif")
  forestImg = loadImage("deep-tropical-jungles-southeast-asia-260nw-483766129.webp")
  
  snakeImg = loadImage("Imported piskel (25).gif")
  
  rImg = loadImage("Imported piskel (24).gif")
  
  gImg = loadImage("Imported piskel (26).gif")
}




function setup() {
  createCanvas(500, 300);

   forest = createSprite(160,220,20,50);
  forest.addImage("f",forestImg);
 forest.scale=2.8
  
monkey = createSprite(80,260,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1
  
  
   gr1ound = createSprite(400,290,500,20);
 gr1ound.addImage("running",groundImg );
  gr1ound.scale=8
  gr1ound.velocityX=-9
  gr1ound.x = gr1ound.width /0.5;
  
   gr1ound.depth=monkey.depth
  monkey.depth=monkey.depth+1
  
 iG = createSprite(400,260,800,10)
  iG.visible= false
 
  gameover = createSprite(200,150,10,10)
  gameover.addImage("s",gImg)
  gameover.visible = false
  
    FoodGroup = new Group()
  bg = new Group()
  
}
function draw() {
background("blue");
  
  
  if (gameState===  Play){
    
    score = Math.ceil(frameCount/frameRate()/3);
    
    if (monkey.isTouching(FoodGroup)){
     
     banana.destroy()
   }
    banan ()
  jump()
  sss ()
  r()
    
    if(monkey.isTouching(bg)){
      gameState="End"
      bg.setVelocityXEach(0);
      gr1ound.velocityX=0
      FoodGroup.setVelocityXEach(0);
      
      bg.setLifetimeEach(-1);
      FoodGroup.setLifetimeEach(-1);
      monkey.velocityY=0
       gameover.visible = true
      
    }
  }
  
  
    
  
if (gr1ound.x < 95){
      gr1ound.x = gr1ound.width/0.3;
    }
    
   
      
   
  
monkey.collide(iG)
  
  
   drawSprites();
  
  fill("yellow")
  textSize(15)

  text("SurvivalTime:"+score,300,30)
}


function jump(){
   if(keyDown("space")&& monkey.y >= 198) {
        monkey.velocityY = -13;
     
     } 
  monkey.velocityY = monkey.velocityY + 0.8
  
  
}

function banan (){
  if (frameCount % 100===0 ){
    banana=createSprite(700,40,10,10)
    banana.addAnimation("peel",bananaImg)
     banana.velocityX=-30;
 banana.y=Math.round(random(50,130))
  banana.scale=0.1; 
   banana.lifetime=30.8
    
    FoodGroup.add(banana)
  }   
}

    function sss(){
      if (frameCount % 220===0 ){
      snake=createSprite(700,230,20,20)
      snake.addAnimation("ss",snakeImg)
      snake.scale=0.2
        snake.velocityX=-15
        snake.lifetime=48
      bg.add(snake)
      }
    }
       function r(){
      if (frameCount % 140===0 ){
      rock=createSprite(650,230,20,20)
      rock.addAnimation("ss",rImg)
      rock.scale=0.15
        rock.velocityX=-17
        rock.lifetime=38
       bg.add(rock)
      }
    }



  
  var backgroundImage , background;
  var redBalloon , red_balloonFloating ; 
  var blue_balloonFloating , blueBalloon ; 
  var green_balloonFloating , greenBalloon ; 
  var pink_balloonFloating , pinkBalloon ;
  var bow_floating , bow;
  var arrow , arrowImage ; 
  var score = 0;

function preload()
{
 //load your images here 
   bow_floating =loadAnimation("bow0.png") 
   backgroundImage =loadImage("background0.png") 
   red_balloonFloating =loadImage("red_balloon0.png")
   blue_balloonFloating =loadAnimation("blue_balloon0.png") 
   green_balloonFloating =loadAnimation("green_balloon0.png") 
   pink_balloonFloating =loadAnimation("pink_balloon0.png") 
   arrowImage=loadImage ("arrow0.png")
}

function setup()
 {
      createCanvas(600, 600);
   //add code here


      background =createSprite(0, 0, 600, 600);
      background.addImage(backgroundImage)
      background.scale=2.5;

      bow =createSprite(500, 200, 30, 30);
      bow.addAnimation("floating" , bow_floating)
      bow.scale=1
   
       redGroup= new Group();
       blueGroup= new Group();
       greenGroup= new Group();
       pinkGroup= new Group();
       arrowGroup= new Group();
 }

function draw() 
 {
  //add code here
     background.velocityX=-3;
     if(background.x<0) 
      {
        background.x=background.width/2
      }
  
       

      bow.y= mouseY;

      if (keyDown("space"))
      {
        createArrow();
        
      }
      
      if (arrowGroup.isTouching(redGroup))
      {
        redGroup.destroyEach();
        arrowGroup.destroyEach();
        score=score+4
      }
   
      if (arrowGroup.isTouching(blueGroup))
      {
        blueGroup.destroyEach();
        arrowGroup.destroyEach();
        score=score+2
      }
    
      if (arrowGroup.isTouching(pinkGroup))
      {
        pinkGroup.destroyEach();
        arrowGroup.destroyEach();
        score=score+1
      }
      
      if (arrowGroup.isTouching(greenGroup))
      {
        greenGroup.destroyEach();
        arrowGroup.destroyEach();
        score=score+3
      }
   
   
   
      var select_balloon = Math.round(random(1, 4));
      console.log(select_balloon)
  
      if (World.frameCount % 80 == 0){
      if (select_balloon == 1){
        red();
      } else if (select_balloon == 2){
        blue();
      } else if (select_balloon == 3 ){
        green();
      } else {
        pink();
      }
        
    }
  
       
      drawSprites();
  
      fill("black");
      text("score : "+score, 500, 30);


      function createArrow() 
      {
          arrow =createSprite(360 , 100, 5 ,5); 
          arrow.velocityX = -7; 
          arrow.scale= 0.3;
          arrow.lifetime=85;
          arrow.addImage(arrowImage);
          arrow.y=bow.y;
          arrowGroup.add(arrow);
          
       }
  
      function red()
      {
  
        redBalloon =createSprite(0,Math.round(random(20,370)),10, 10);
        redBalloon.addImage("floating", red_balloonFloating);
        redBalloon.velocityX=3;
        redBalloon.scale=0.1;
        redBalloon.lifetime=200;
        redGroup.add(redBalloon);
      }
  
      function blue()
      {
    
        blueBalloon =createSprite(0,Math.round(random(20,370)),10, 10);
        blueBalloon.addAnimation("floating", blue_balloonFloating);
        blueBalloon.velocityX=3;
        blueBalloon.scale=0.1;
        blueBalloon.lifetime=200;
        blueGroup.add(blueBalloon);
      }
  
      function green()
      {
    
        greenBalloon =createSprite(0,Math.round(random(20,370)),10, 10);
        greenBalloon.addAnimation("floating", green_balloonFloating);
        greenBalloon.velocityX=3;
        greenBalloon.scale=0.1;
        greenBalloon.lifetime=200;
        greenGroup.add(greenBalloon);
      }
  
      function pink()
      {
        
        pinkBalloon =createSprite(0,Math.round(random(20,370)),10, 10);
        pinkBalloon.addAnimation("floating", pink_balloonFloating);
        pinkBalloon.velocityX=3;
        pinkBalloon.scale=1.3;
        pinkBalloon.lifetime=200;
        pinkGroup.add(pinkBalloon);
      }
}

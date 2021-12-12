
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){
  forestOffier = loadAnimation("image/100.png","image/200.png","image/300.png","image/400.png","image/500.png","image/600.png","image/700.png","image/800.png","image/900.png","image/1000.png","image/1100.png")
  backgroundImg = loadImage("image/park.jpg");
  animalImg = loadAnimation("image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg","image/9.jpg","image/10.png","image/11.jpg")
   rockImg = loadImage("image/download.jpg")
}


function setup() {
	createCanvas(800, 600);
	   
	//engine = Engine.create();
	//world = engine.world;
	 background1 = createSprite(400,300);
     background1.addImage(backgroundImg)
	 background1.velocityX = -3
	 background1.scale = 10

   ground = createSprite(400,500,width,10)
	//Engine.run(engine);
	Offier = createSprite(90,490,20,20)
	Offier.addAnimation('forest',forestOffier)
 Offier.debug=true
 Offier.setCollider("rectangle",0,0,Offier.width,Offier.height)
}


function draw() {
  
  background(0);

  if(background1.x < 0){
  background1.x = background1.width/2
  }
   
Offier.collide(ground)

if(keyCode === 32){
offier.velocityY = -9
}

bouncerock();
  
  drawSprites();
}

function bouncerock(){
  if(frameCount%60 === 0){
    rock = createSprite(800,490,10,10)
    rock.addAnimation('rock',rockImg)
    rock.velocityX = -8
    rock.scale=0.125
    rock.debug=true
  }
}





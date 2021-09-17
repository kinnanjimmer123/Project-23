var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    

	engine = Engine.create();
	world = engine.world;

	boxBottomBody = new Box (400,610,200,20)
	boxLeftBody = new Box (310,570,20,100)
	boxRightBody = new Box (490,570,20,100)
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  boxRightBody.display()
  boxLeftBody.display()
  boxBottomBody.display()


  drawSprites();
 
}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x - 20
		translation = {x: -20, y: 0}
		Matter.Body.translate(packageBody,translation)
	}
	else
	if(keyCode === RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x + 20
		translation = {x: +20, y: 0}
		Matter.Body.translate(packageBody,translation)
	}

	
	
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)
  }
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var monkey;
var track,background;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	monkey=createSprite(400,350,50,50);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  if(keyDown(UP_ARROW)){
	monkey.y=monkey.y+20;
  camera.position.x = 400;
  camera.position.y = monkey.y;
  }
  
  
  drawSprites();
 
}






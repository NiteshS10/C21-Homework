
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

var ballOptions =  {
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
groundObj = new Ground(width/2,670,width,20);
leftSide = new Ground(600,600,20,120);
rightSide = new Ground(400,600,20,120);

ball = Bodies.circle(100,200,20,ballOptions);
World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball,ball.position,{x:40,y:-40})

}


}


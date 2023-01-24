
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftWall;
var rightWall;

function setup() {
	createCanvas(500, 300);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world; 

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction :0,
		density:1.2,
	}

	ball = Bodies.circle(100,100,20, ball_options);
	World.add(world, ball);
	
	leftWall=new Ground(280,260,15,50);
	rightWall=new Ground(370,260,15,50);

	ground=new Ground(width/2,300,width,30);
 	 Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(40);
  fill("red");
  stroke("purple");
  strokeWeight(4);
  ellipse(ball.position.x, ball.position.y, 30, 30);


  ground.show();
	leftWall.show();
	rightWall.show();

  Engine.update(engine);
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:32,y:-50})
	}

}

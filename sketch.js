const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pelota;
var radio = 20;
var world;
var engine;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
var pelota_options  ={
	density:1.2,
	restitution:0.3
}
pelota = Bodies.circle(260,100,radio/2,pelota_options);
World.add(world,pelota);

ground2 = new Ground(width/2,450,width,20);

  leftSide = new Ground(1150,400,20,120);

  rightSide = new Ground(1000,400,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(pelota.position.x,pelota.position.y,radio,radio);

 
 ground2.display();
  leftSide.display();
  rightSide.display();
  

}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(pelota,pelota.position,{
      x:18,
      y:-18
    })
  }
}


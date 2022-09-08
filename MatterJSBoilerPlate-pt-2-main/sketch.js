
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var particle1,particle2,particle3,particle4,particle5
var particle6,particle7,particle8,particle9,particle10

var rotator1,rotator2,rotator3
var block1,block2

var angle1=0
var angle2=60
var angle3=90


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

var plane_options={
	isStatic:true
}


particle1 = Bodies.circle(220,10,10,particle_options)
World.add(world,particle1)

particle2 = Bodies.circle(220,10,10,particle_options)
World.add(world,particle12)

particle3 = Bodies.circle(225,10,10,particle_options)
World.add(world,particle13)

particle4 = Bodies.circle(230,10,10,particle_options)
World.add(world,particle4)


particle5 = Bodies.circle(235,10,10,particle_options)
World.add(world,particle5)



var rotator_options={
	isStatic:true
}

rotator1 = Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator1)

rotator2 = Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator2)


rotator3 = Bodies.rectangle(250,200,150,20,rotator_options)
World.add(world,rotator3)





	Engine.run(engine);
  
}


function draw() {

rect(plane.position.x,plane.position.y,1200,20)
rect(block1.position.x,block1.position.y,150,20)
rect(block2.position.x,block2.position.y,150,20)


ellipse(particle1.position.x,particle1.position.y,10)
ellipse(particle2.position.x,particle2.position.y,10)
ellipse(particle3.position.x,particle3.position.y,10)
ellipse(particle4.position.x,particle4.position.y,10)
ellipse(particle5.position.x,particle5.position.y,10)


Metter.body.rotate(rotator1,angle1)
push()
translate(rotator1.position.x,rotator1.position.y)
rotate(angle1)
rect(0,0,150,20)
pop()
angle1 +=2



Metter.body.rotate(rotator2,angle2)
push()
translate(rotator2.position.x,rotator2.position.y)
rotate(angle2)
rect(0,0,150,20)
pop()
angle1 +=0.5



Metter.body.rotate(rotator3,angle3)
push()
translate(rotator3.position.x,rotator3.position.y)
rotate(angle3)
rect(0,0,150,20)
pop()
angle1 +=1




  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




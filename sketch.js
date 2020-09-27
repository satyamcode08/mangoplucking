
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	mango1= new Mango(600,200,20,20);
	mango2= new Mango(600,250,20,20);
	mango3= new Mango(500,250,20,20);
    mango4= new Mango(500,200,20,20);
    mango5= new Mango(550,225,20,20);
	mango6= new Mango(550,175,20,20);
	stone= new Stone(250,500,50);
	SlingShot=new SlingShot(250,500)
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
mango1.display();  
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
stone.display();
Slingshot.display();
}




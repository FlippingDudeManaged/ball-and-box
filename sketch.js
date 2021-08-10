
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  flor = new Ground(200,350,400,30)
  box1 = new Box(170,300,50,50)
  box2 = new Box(200,250,50,50)
  box3 = new Box(200,200,50,50)
  box4 = new Box(200,150,50,50)
  box5 = new Box(200,100,50,50)
  ball = new Ball(100,100,40,40)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  flor.show()
  box1.show()
  box2.show()
  box3.show()
  box4.show()
  box5.show()
  ball.show()
}


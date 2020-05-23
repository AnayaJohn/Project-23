const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(800, 600)

  ground= new Block(400,300,800,50);
  
  block1= new Block(330,235,30,40);
  block2= new Block(360,235,30,40);
  block3= new Block(390,235,30,40);
  block4= new Block(420,235,30,40);
  block5= new Block(450,235,30,40);

  block6= new Block(360,195,30,40);
  block7= new Block(390,195,30,40);
  block8= new Block(420,195,30,40);

  block9= new Block(390,155,30,40);
  }

function draw() {
  background(0); 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();

  block9.display();

  ground.display();
  drawSprites()
}

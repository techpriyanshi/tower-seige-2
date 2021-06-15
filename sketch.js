const Engine = matter.Engine;
const World  = matter.World;
const Body   = matter.Body;
const Bodies = matter.Bodies;
const Constraint = matter.Constraint;

var engine , world;
var polygon,ground,miniG1,miniG2,ball,chain,polygon_image;

function preload(){
  polygon_image =loadImage("polygon.gif");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground= new Ground(400,580,1000,20);
  miniG= new Ground(640,250,220,20);
  miniG2= new Ground(330,450,250,20);

  
  block1 = new Block(240,425,30,30);
  block2 = new Block2(270,425,30,30);
  block3 = new Block(300,425,30,30);
  block4 = new Block2(330,425,30,30);
  block5 = new Block(360,425,30,30);
  block6 = new Block2(390,425,30,30);
  block7 = new Block(420,425,30,30);

  block8 = new Block(270,395,30,30);
  block9 = new Block2(300,395,30,30);
  block10 = new Block(330,395,30,30);
  block11 = new Block2(360,395,30,30);
  block12 = new Block(390,395,30,30);

  block13 = new Block(300,365,30,30);
  block14 = new Block2(330,365,30,30);
  block15 = new Block(360,365,30,30);

  block16 = new Block(330,335,30,30);

  block17 = new Block2(400,225,30,30);
  block18 = new Block(430,225,30,30);
  block19 = new Block2(370,225,30,30);
  block20 = new Block(400,225,30,30);
  block21 = new Block2(385,225,30,30);

  block22 = new Block2(610,195,30,30);
  block23 = new Block(640,195,30,30);
  block24 = new Block2(670,195,30,30);

  block25 = new Block2(640,165,30,30);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  chain = new Chain(polygon,{x:150,y:200})

Engine.run(engine);
}

function draw() {
  background("orange");
  ground.display();
  miniG.display();
  miniG2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  chain.display();

  imageMode(CENTER);
  image(polygon_image,polygon.position.x,polygon.position.y,40,40);

  drawSprites();
}
  function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
    chain.fly();
  }


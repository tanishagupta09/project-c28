const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree;
var ground;
var stone;
var boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var mango9, mango10, mango11, mango12;
var launcher;
var tree, treeObj;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png");
	tree = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//tree = new Tree(1000,300,500,550);
	treeObj = createSprite(1050, 280, 450, 600);
	treeObj.addImage(tree);
	treeObj.scale = 0.5;

	ground = new Ground(650,580,1300,20);
	
	stone = new Stone(235,420,30);

	mango1 = new Mango(1100,100,30);
  	mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,150,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	mango11 = new Mango(900,70,40);
	mango12 = new Mango(900,160,40);

	launcher = new Launcher(stone.body, {x:235, y:420});

  
}


function draw() {
	background(0);

	Engine.update(engine);

	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy,200,340,200,300);

	drawSprites();
	
	//tree.display();
	ground.display();

	stone.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();

	launcher.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);
	detectCollision(stone,mango11);
	detectCollision(stone,mango12);


	
}


function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
	launcher.fly();
}

function detectCollision(lstone, lmango)
{
	
  	mangoBodyPosition = lmango.body.position;
  	stoneBodyPosition = lstone.body.position;
  
 	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  
  	if(distance <= lmango.radius + lstone.radius)
    {
  		Matter.Body.setStatic(lmango.body,false);
    }
  }

function keyPressed()
{
	if (keyCode === 32)
	{
    	Matter.Body.setPosition(stone.body, {x:235, y:420});
		launcher.attach(stone.body);
	}
  }
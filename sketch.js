const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var polygon;
var slingShot;
var block1, block2, block3, block4, block5,block6;
var gameState = "onsling";

function setup() {
	createCanvas(1200,700);

	engine = Engine.create();
	world = engine.world;

	this.poly_image = loadImage("polygon.png");

	var options = {
		isStatic: false
	}

	polygon = Bodies.circle(200,200,20,options);
	World.add(world,polygon);

	//Create the Bodies Here.
	stand1 = new Stand(580,380,400,20);
	stand2 = new Stand(1000,250,200,20);
	stand3 = new Stand(600,630,1200,20);

	slingShot = new Sling(polygon,{x:180, y:200});

	block1 = new Block(450,340,60,60);
	block2 = new Block(510,340,60,60);
	block3 = new Block(570,340,60,60);
	block4 = new Block(630,340,60,60);
	block5 = new Block(690,340,60,60);

	block6 = new Block(480,280,60,60);
	block7 = new Block(540,280,60,60);
	block8 = new Block(600,280,60,60);
	block9 = new Block(660,280,60,60);

	block10 = new Block(510,220,60,60);
	block11 = new Block(570,220,60,60);
	block12 = new Block(630,220,60,60);

	block13 = new Block(540,160,60,60);
	block14 = new Block(600,160,60,60);

	block15 = new Block(570,100,60,60);

	block16 = new Block(950,210,60,60);
	block17 = new Block(1010,210,60,60);
	block18 = new Block(1070,210,60,60);

	block19 = new Block(980,150,60,60);
	block20 = new Block(1040,150,60,60);

	block21 = new Block(1010,90,60,60);
}


function draw() {
	background(0,255,132);
	Engine.update(engine);

	imageMode(CENTER);
	image(this.poly_image,polygon.position.x,polygon.position.y,50,50);


	stand1.display();
	stand2.display();
	stand3.display();

	slingShot.display();

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

	fill("green");
	block8.display();
}

function mouseDragged(){
	if(gameState === "onsling"){
		Matter.Body.setPosition(polygon,{x: mouseX, y: mouseY});
	}
	
}

function mouseReleased(){
	slingShot.fly();
	gameState = "launched";
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		slingShot.attach(polygon);
		Matter.Body.setPosition(polygon,{x:180,y:200});
		gameState = "onsling";
	}
}



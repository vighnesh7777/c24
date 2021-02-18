const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box1;
var box3;
var pig1;
var log2;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    ground = new Ground(600,height,1200,20);

    pig1= new Pigs(810,350);
    pig2= new Pigs(810,220);
    log1= new Logs(810,260,300,PI/2);
    log2= new Logs(810,180,300,PI/2);
    log3= new Logs(760,120,150,PI/7);
    log4= new Logs(870,120,150,PI/-7);

    bird=new Birds(100,100);
}
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box4.display();
    box3.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}
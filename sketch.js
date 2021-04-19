const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1;
var plane;
var iron1,rubber1,stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer1 = new Hammer(10,100);

    iron1= new iron(700,260,50,50);
    rubber1= new rubber(0,0,5);
    stone1= new stone(810,160,50,50);



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer1.display();
    
    iron1.display();
    rubber1.display();
    stone1.display();

    
 
}
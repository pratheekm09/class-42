const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var umbrella;
 var batAnimation,bat;
 function preload(){
   
  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png");

  batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                      "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                      "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                      "bat/bat10.png","bat/bat11.png","bat/bat12.png");
 
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(400,800);
  umbrella = new Umbrella(180, 690, 225);

}

function draw() {
  background("black");
  umbrella.display(); 

  if(frameCount % 1 === 0){
    var raindrop = new Raindrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();
  }
}

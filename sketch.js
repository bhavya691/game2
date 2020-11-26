const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine , world;

var king , kingImage;
var castle , castleImage;
var rubber , enemy , button1;
var arrow , bomb , arrow1;
var platformImage , platform , backImg , back;
var enemy , enemyImg , arrowImg , enemyArrow;
var time = 0;
var score = 0;

function preload(){
  kingImage = loadImage("king.png");
  castleImage = loadImage("castle.png");
  platformImage = loadImage("platform.png");
  backImg = loadImage("back.jpg");
  enemyImg = loadImage("enemy.png");
  arrowImg = loadImage("sprite_0.png");
  enemyArrow = loadImage("sprite_0enemy.png");
}

function setup(){
  engine = Engine.create();
  world = engine.world;

  createCanvas(displayWidth , displayHeight);

  back = createSprite(displayWidth/2 , displayHeight/2 , displayWidth , displayHeight);
  back.addImage(backImg);
  back.scale = 1.2;

  castle = createSprite(200,400,20,200);
  castle.addImage(castleImage);
  castle.scale = 2.0;

  king = createSprite(190,170,20,200);
  king.addImage(kingImage);
  king.scale = 0.2;

  platform = createSprite(displayWidth-200 , displayHeight-300 , 50 , 700);
  platform.addImage(platformImage);
  
  enemy = createSprite(displayWidth-200 , displayHeight-450 , 20 ,20);
  enemy.addImage(enemyImg);
  enemy.scale = 0.6;

  arrow = new Arrow(300,108);

 

  rubber = new Sling(arrow.body , {x:210 , y:170});

  button1 = createSprite(230,30,30,30);
  button1.shapeColor = "red";
  bomb = new Fire(random(400,displayWidth-300) , random(100,displayHeight-400));


}


function draw() {
  background(100,200,300);  
  Engine.update(engine);

  spawnArrows();
  drawSprites();
  noStroke();
  fill(0);
  textSize(30);
  text("score : " + score, displayWidth-150,50);
  text("time : " + time , 20 , 50);
  arrow.display();
  rubber.display();
  // arrow1.display();
if(arrow.body.position.x > enemy.x && arrow.body.position.y <= enemy.y ){
    enemy.x = random(displayWidth-1000 , displayWidth-100);
    enemy.y = random(displayHeight-600 , displayHeight-100);
    platform.x = enemy.x;
    platform.y = enemy.y+150;
    score = score+1;

}

if(frameCount%30 === 0){
  time++;
}
// if(arrow.body.position.x > 600){
//  rubber.attach( arrow);
// }
 
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body , {x:mouseX , y:mouseY});
}

function mouseReleased(){
  rubber.release();
  
}

function spawnArrows(){
  if (frameCount % 100 === 0) {
    var cloud = createSprite(enemy.x-10,enemy.y,40,10);
    cloud.y = Math.round(random(enemy.y-10,enemy.y + 40));
    cloud.addImage(enemyArrow);
    cloud.scale = 0.13;
    cloud.velocityX = -3;

  }
}


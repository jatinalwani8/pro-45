let ground;
let lander;
var lander_img;
var bg_img;
var bullet_img,bullet;
var alien_img,alien;
var aliensGroup,bulletsGroup;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  bullet_img = loadImage("bullet.png");
  alien_img = loadImage("alien.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(150,300,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;


  bullet = createSprite(150,270,30,30);
  bullet.addImage(bullet_img);
  bullet.scale = 0.015;


  aliensGroup = createGroup();
  bulletsGroup = createGroup();


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
 // vy +=g;
  //lander.position.y+=vy;

  spawnAliens();

  if(keyIsDown(UP_ARROW)){
    lander.position.y-=5;
   }

   if(keyIsDown(DOWN_ARROW)){
    lander.position.y+=5;
   }

   if(keyIsDown(LEFT_ARROW)){
    lander.position.x-=5;
   }

   if(keyIsDown(RIGHT_ARROW)){
    lander.position.x+=5;

   }

   if(keyDown("space")){
    bullet.position.y-=8;
   }

   //if(bullet.isTouching (alien)){
   // alien.destroy();
   //}

   





  drawSprites();
}

function spawnAliens(){
  if(frameCount % 60 === 0){
    alien = createSprite(150,100,50,70);
  alien.x=Math.round(random(150,600));
  alien.addImage(alien_img);
  alien.scale = 0.3;
  alien.velocityY=2;

  alien.lifetime=180;
  aliensGroup.add(alien);


  }
}






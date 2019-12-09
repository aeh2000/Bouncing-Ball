var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var sound 
var bullet = 5;
var ellipse
var asteroid;
var x = 250;
var y = 250






function preload(){
  
  sound = loadSound('pew.wav');
  img = loadImage('Ship.PNG');
  img2 = loadImage('planet.PNG');
  img3 = loadImage('asteroid.PNG');
  img4 = loadImage('bullet.PNG');
  fontRegular = loadFont('Square.ttf');
  //createVideo('explosion.PNG');
  
}

function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function setup() {
  createCanvas(600, 480);
  
  var bulletY = 30;
var bulletSpeed = 10;
  var asteroidY = 30;
  var asteroidSpeed = 10;
  
  
  
  
  
  e = color(250);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
  
  
  
  
  
  
}

function startScreen(){
		background(0)
		
  fill(300);
        textAlign(CENTER);
        textSize(40);
        textFont(fontRegular);
		text('Space Destroyer', width / 2 , height / 2 )
        textSize(20);
        textFont(fontRegular);
		text('click to start', width / 2 , height / 2 + 40 );
  text('Rules: click to shoot', width / 2, height / 2 + 60);
		reset();
 
  
  
}

function gameOn(){
	background(0)
  
  
  fill(255)
  textSize(14);
  textFont(fontRegular);
  text("score = " + score, 30,20)
    

  
 
  //bullet
if (mouseIsPressed){
  y = 5
}  
  if(bullet <= 400 && mouseIsPressed){
  y = 415
  }
  
  fill(e);
    ellipse(mouseX + 44, y , 5, 5)
  rectMode(CENTER)
  
  //rocket
  image(img, mouseX, 400, 100, 80, 0);
  
   
  
  //asteroid
   image(img3, x, -y, 75, 75);
    y = y + 3
  
  
  
  
  
  
	y-= speed;
  if(y>height){
  	screen =2
	 }
  if(y>height-10 && x>mouseX-20 && x<mouseX+20){
  	y=-20
    speed+=.5
    score+= 1
  }
	if(y==-20){
  	pickRandom();
   }
 
}

function pickRandom(){
	x= random(20,width-20)
}


function endScreen(){
		background(0)
        fill(255)
		textAlign(CENTER);
        textSize(40);
        textFont(fontRegular);
		text('GAME OVER', width / 2, height / 2)
    textSize(16);
  	text("SCORE = " + score, width / 2, height / 2 + 20)
		text('click to play again', width / 2, height / 2 + 40);
  
 
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
  
    sound.play()
  
  
}

function reset(){
	  score=0;
  	speed=10;
  	y=-20;
}

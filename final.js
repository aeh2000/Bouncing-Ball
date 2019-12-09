// Variables
var screen = 0;
var xBounceBall = Math.floor(Math.random() * 300) + 25;
var yBounceBall = 25;
var size = 25;
var xBounceBallAlt = 5;
var yBounceBallAlt = 5;
var xBar;
var yBar;
var BarWidth = 75;
var BarHeight = 15;
var started = false;
var score = 0;
var sound;

// Preload
function preload(){
  fontRegular = loadFont('Square.ttf');
  sound = loadSound('boing.wav');  
}

// Setup
function setup(){
  createCanvas(540, 480);
}

// Draw
function draw() {
	if(screen == 0){
    startScreen();
  }else if(screen == 1){
  	gameOn();
  }else if(screen == 2){
  	endScreen();
  }	
}

// Start screen
function startScreen(){
  background(220)		
  fill(50, 55, 100);
        textAlign(CENTER);
        textSize(40);
  textFont(fontRegular);
		text('BOUNCING BALL', width / 2 , height / 2 )
        textSize(20);
  textFont(fontRegular);
		text('Click to Start :]', width / 2 , height / 2 + 40 );
		reset();  
}

// Play Game
function gameOn(){
  background(220);
  fill(50, 55, 100);
  noStroke();
  ellipse(xBounceBall, yBounceBall, size, size);
  xBounceBall += xBounceBallAlt;
  yBounceBall += yBounceBallAlt;
  
  if (xBounceBall < size/2 || xBounceBall > 540 - 0.5*size) {
  xBounceBallAlt *= -1;
  }
  if (yBounceBall < size/2 || yBounceBall > 480 - size) {
    yBounceBallAlt *= -1;
  }
  
  if ((xBounceBall > xBar && xBounceBall < xBar + BarWidth) && (yBounceBall + (size/2) >= yBar)) {
  xBounceBallAlt *= -1;
  yBounceBallAlt *= -1;
  sound.play();
  score++;
  }
    
  if (!started) {
    xBar = 540 / 2;
    yBar = 480 - 100;
    started = true;    
  }
  fill(65);
  noStroke();
  rect(xBar, yBar, BarWidth, BarHeight);
  
  fill(65);
  textSize(24);
  textFont(fontRegular);
  text("Score: " + score, 50, 25);
  
   if (yBounceBall > yBar){
    endScreen();
    screen=2;
  }
}

// Bar Control
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xBar -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xBar += 50;
  }
}

// End Screen
function endScreen(){
  background(220)
  fill(50, 55, 100);
        textAlign(CENTER);
        textSize(40);
  textFont(fontRegular);
		text('BOUNCING BALL', width / 2 , height / 2 )
        textSize(20);
  textFont(fontRegular);
		text('Game Over :[', width / 2 , height / 2 + 30 );
  textFont(fontRegular);
        text('Your Final Score is '+ score, width / 2 , height / 2 + 60 );
  textFont(fontRegular);
        text('Click to Play again', width / 2 , height / 2 + 90 );
}

// Mouse Pressed
function mousePressed(){
	if(screen == 0){
  	screen = 1;   
  }else if(screen == 2){
  	screen = 0;
    window.location.reload();return false;    
}
}

// Reset Score
function reset(){
  score = 0;
}

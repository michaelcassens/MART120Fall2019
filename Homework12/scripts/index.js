var squareX = 50;
var squareY = 50;
var circleX = 100;
var circleY = 100;
var playerX = 300;
var playerY = 400;
var exitXTop = 0;
var exitXBottom = 0;
var exitYTop = 0;
var exitYBottom = 0;
var mousex = -10;
var mousey = -10;

function setup()
{
    createCanvas(800, 600);
    
}

function draw()
{
    background(30,120,229);

    createFirstShape();

    createSecondShape();
    
    moveSquare();

    moveCircle();
   
    createPlayer();
    
    createExit();
   
    youWin();
    
    createCircle();
}

function createCircle()
{
   fill(200,20,30);
   circle(mousex,mousey,30);
}
function createSecondShape()
{
   fill(129,12,10);
   circle(circleX,circleY, 15);

}
function createFirstShape()
{
   fill(34,39,39);
   square(squareX,squareY,20);
}
function youWin()
{
   exitXTop = width-10;
   exitYTop = height/2;
   exitYBottom = height/2 + 200;
   if(playerX >= width-60 && playerY >=exitYTop && playerY <= exitYBottom)
   {
      textSize(28);
      fill(0);
      text("You win!", width/2-100, height/2)
   }
}
function createExit()
{
   textSize(28);
   text("Exit",width-60,height/2-20);
   fill(0);
   rect(width-10,height/2,10,200);
}
function keyPressed()
{
   
   movePlayer();

}

function moveCircle()
{
   circleX -= Math.floor(Math.random() * 15) + 1;
   circleY -= Math.floor(Math.random() * 5) + 1;

   if(circleX <= 0)
    {
      circleX = width;
    }
    else if(circleX >= width)
    {
      circleX = 0;
    }

    if(circleY <= 0)
    {
      circleY = height;
    }
    else if(circleY >= height)
    {
      circleY = 0;
    }
}

function moveSquare()
{
   squareX += Math.floor(Math.random() * 2) + 1;
   squareY += Math.floor(Math.random() * 3) + 1;

   if(squareX <= 0)
    {
       squareX = width;
    }
    else if(squareX >= width)
    {
       squareX = 0;
    }

    if(squareY <= 0)
    {
       squareY = height;
    }
    else if(squareY >= height)
    {
       squareY = 0;
    }
}
function movePlayer()
{
   if(key == 'a')
   {
      playerX-=10;
   }

   else if(key == 'd')
   {
      playerX+=10;
   }
   else if(key == 'w')
   {
      playerY-=10;
   }
   if(key == 's')
   {
      playerY+=10;
   }
}
function createPlayer()
{
   fill(0,255,0);
   square(playerX, playerY, 50);
}

function mousePressed()
{
   mousex = mouseX;
   mousey = mouseY;
}


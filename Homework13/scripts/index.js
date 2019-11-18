var playerX = 300;
var playerY = 400;
var exitXTop = 0;
var exitXBottom = 0;
var exitYTop = 0;
var exitYBottom = 0;
var mousex = -10;
var mousey = -10;

var x = [];
var y = [];
var diameter = [];

function setup()
{
    createCanvas(800, 600);
    for(var i = 0; i < 5; i++)
    {
       x[i] = Math.floor(Math.random() * 800 + 10);
       y[i] = Math.floor(Math.random() * 600 + 10);
       diameter[i] = Math.floor(Math.random() * 25 + 10);
    }
}

function draw()
{
    background(30,120,229);

    createShapes();
    
    moveShapes();

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
function createShapes()
{

   for(var i = 0; i < x.length; i++)
   {
      fill(Math.floor(Math.random()* 255),Math.floor(Math.random() * 255),Math.floor(Math.random()* 255)); 
      if(i % 2 == 0)
      {
         circle(x[i],y[i],diameter[i]);
      }
      else
      {
         square(x[i],y[i],diameter[i]);
      }
      
   }

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

function moveShapes()
{
   for(var i = 0; i < x.length; i++)
   {
      
      if(i % 2 == 0)
      {
         x[i] -= Math.floor(Math.random() * 15) + 1;
         y[i] -= Math.floor(Math.random() * 5) + 1;
   
      }
      else
      {
         x[i] += Math.floor(Math.random() * 2) + 1;
         y[i] += Math.floor(Math.random() * 3) + 1;
      }
   
      if(x[i] <= 0)
       {
         x[i] = width;
       }
       else if(x[i] >= width)
       {
         x[i] = 0;
       }
   
       if(y[i] <= 0)
       {
         y[i] = height;
       }
       else if(y[i] >= height)
       {
         y[i] = 0;
       }
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


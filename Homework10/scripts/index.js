var y1,y2;

// for the head
var x;
var movement = 10;

// left eye movement
var x2;
var movement2 = 3;

// right eye movement
var rightEyeY = 75;
var movement3 = 5;

// make mouth go up and down
var mouthY = 120;
var movement4 = 7;

// move leg diagonal
var legX;
var legY = 300;
var movement5 = 12;

var titleSize = 25;
var count = 0;
var increase = 5;
function setup()
{
    createCanvas(800, 600);
    y2 = 100;
    y1 = 100;
    background(30,120,229);
    x = width/2;
    x2 = width/2-15;
    legX = width/2 + 50;
}

function draw()
{
    background(30,120,229);
    // head
    fill(120,28,39);
    circle(x,100,100);

    if(x >= 800 || x <= 0)
    {
       movement *= -1;
    }

     x += movement;
    // eyes
    fill(0);

    ellipse(x2,75,20,10);
    if(x2 >= 800 || x2 <= 0)
    {
       movement2 *= -1;
    }

     x2 += movement2;

    ellipse(width/2+15,rightEyeY,20,10);
    if(rightEyeY >= 600 || rightEyeY <= 0)
    {
       movement3 *= -1;
    }

     rightEyeY += movement3;
    // nose
    ellipse(width/2,100,10,15);

    // mouth
    rect(width/2-25,mouthY,50,5);
    if(mouthY >= 600 || mouthY <= 0)
    {
       movement4 *= -1;
    }

    mouthY += movement4;
    // hair to the left    
    line(width/2,50,width/2-100,y2);
    if(y2 <150)
    y2 += 10;

    // hair to the right
    line(width/2,50,width/2+100,y1);
    if(y1 <150)
    y1 += 10;

    // arms
    fill(28,232,239);
    rect(width/2-170,220,80,10);
    rect(width/2+90,220,80,10);

    // body
    fill(120,28,228);
    triangle(width/2-200,300,width/2,150,width/2+200,300);
    
    // legs
    fill(28,232,239);
    
    square(width/2-100,300,60);

    square(legX,legY,60);
    if(legY >= 600 || legY <= 0 || legX >=800 || legX <= 0)
    {
       movement5 *= -1;
    }

    legY += movement5;
    legX += movement5;

    fill(0);
    textSize(titleSize);
    text("Myself",50,50);
    
    count++;
    if(count >= 50)
    {
        increase *= -1;
        count = 0;
    }
    if(count %10 == 0)
    {
        titleSize+=increase;
    }
    
    textSize(25);
    text("Michael Cassens", width-300,height-100);

}
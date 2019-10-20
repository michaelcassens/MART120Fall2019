var y1,y2;
function setup()
{
    createCanvas(800, 600);
    y2 = 100;
    y1 = 100;
    background(30,120,229);
   
}

function draw()
{
    fill(120,28,39);
    circle(width/2,100,100);

    // eyes
    fill(0);
    ellipse(width/2-15,75,20,10);
    ellipse(width/2+15,75,20,10);

    // nose
    ellipse(width/2,100,10,15);

    // mouth
    rect(width/2-25,120,50,5);
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
    square(width/2+50,300,60);

    fill(0);
    textSize(25);
    text("Myself",50,50);
    text("Michael Cassens", width-300,height-100);

}
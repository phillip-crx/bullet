var bullet , wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200, 200, thickness , height/2);
  bullet = createSprite(200,200,50,10)

  speed = random(55,90);
  weight = random(400,1500)
  thickness = random(22,83)

  bullet.velocityX = speed

  wall.shapeColor = color(80,80,80);
  bullet.shapecolor = color(255);

  //wall.debug = true;
}

function draw() {
  background(0);  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2) 
  {
    bullet.velocityX = 0

  var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

   if (deformation>10)
    {
     wall.shapeColor = color(225,0,0)
   }
   if (deformation<10) 
   {
     wall.shapeColor = color(0,225,0)
   }
   

  }
  drawSprites();
}
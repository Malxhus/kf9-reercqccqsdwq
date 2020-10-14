var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed  = random(55,90)
  weight = random(400,1500)
  bullet    = createSprite(50,200,80,10);
  wall   = createSprite(1200,200,thickness,height/2);
  (wall).spriteColor = (80,80,80);
  (bullet).spriteColor = (255,255,255)
  bullet.velocityX = speed;
  thickness = random(22,83)
  speed  = random(223,321)
  weight = random(30,52)
  if(hasCollided(bullet,wall)){
    
  }
} 

function draw() {
  background("black");  
 
if(hasCollided(bullet,wall)){
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage > 10){
     wall.shapeColor = color(255,0,0);
  }
  if(damage < 10){
    wall.shapeColor = color(0,255,0);
  }
 
}

  drawSprites();
}

function hasCollided(Lbullet, Lwall) {
 bulletRightEdge = Lbullet.x + Lbullet.width;
 wallLeftEdge    = Lwall.x
 
    
 if(bulletRightEdge >= wallLeftEdge){
   return true

 }

return false

}
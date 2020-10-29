var box,box1;




function setup(){
createCanvas(1200,800);
box=createSprite(400,800,80,30)
box.shapeColor="red";
box1=createSprite(400,100,50,80)
box1.shapeColor="blue";
box.velocityY=-3;
box1.velocityY=3;
  
}
function draw(){
background("white");




if(box.x-box1.x<box1.width/2+box.width/2
    &&box1.x-box.x<box1.width/2+box.width/2){
box.velocityX=box.velocityX*(-1)
box1.velocityX=box1.velocityX*(-1)

    }

   if( box.y-box1.y<box1.height/2+box.height/2
   &&box1.y-box.y<box1.height/2+box.height/2){
    box.velocityY=box.velocityY*(-1)
    box1.velocityY=box1.velocityY*(-1)

   }
    
   





    drawSprites();

}
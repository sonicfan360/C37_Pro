var Godzilla, GodzillaImage

function preload()
{
  GodzillaImage = loadImage("images/Hungry_Godzilla_Adult.png");
  
}

function setup() {
	createCanvas(400, 400);
  Godzilla = createSprite(200,300,50,50)
  Godzilla.addImage("Hungry_Godzilla_Adult", GodzillaImage)
  Godzilla.scale = 0.1
}


function draw() {  
text("Feed your Kaiju " + " Press Space To Feed", 150, 100)

  drawSprites();
  

}




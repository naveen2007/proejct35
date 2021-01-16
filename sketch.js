var dog, happyDog;
var foods, foodStock;
var database; 
var count;

function preload()
{
  dogimg = loadImage("images/Dog.png");
  happyDogimg = loadImage("images/happydog.png");
}

function setup() {
  
	createCanvas(500, 500);
  dog = createSprite(250,250,40,40);
  dog.addImage(dogimg);
  dog.scale = 0.25;
  database=firebase.database();   
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  count = 20;
}

function draw() {  
  background(255);

  if(keyWentDown(UP_ARROW)){
    writeStock();
    dog.addImage(happyDogimg);
  }
  drawSprites();
  textSize = 3;
  stroke(2)
  text("Food remaining : " + count,30,30);
 
}
function readStock(data){
  foods = data.val();
}

function writeStock(){

  if(count<1){
    count=0;
  }else{
    count=count-1;
  }
  

}

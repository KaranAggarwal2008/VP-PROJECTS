var dog, database;
var foodLeft;
var dogIMG;
var dogIMGtrouble;

function preload(){
dogIMG = loadImage("Dog.png");
dogIMGtrouble = loadImage("happydog.png")
}
function setup(){
 // console.log(database);
  createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(100,100,10,10);
  dog.shapeColor = "red";
  dog.scale=0.1;

  var foodLeft = database.ref('dog/food');
  foodLeft.on("value", readfoodLeft, showError);
}

function draw(){
  background("white");
   if(keyDown(UP_ARROW)){
     //i
     if(foodLeft.x<=0){
      foodLeft.x = 0;
      dog.addImage(dogIMG)
     }else if(foodLeft.x>0){
       writefoodLeft(-1)
       dog.addImage(dogIMGtrouble)
     }else()=>{
      dog.addImage(dogIMG);
     }
    }
    drawSprites();
  textSize(20)
  text("Press up arrow to feed Tommy 1 litre of milk",200,200)
  text("Milk left: "+foodLeft+"Litres of milk left",150,150)
}

function writefoodLeft(x){
  database.ref('dog/food').set({
    'x': foodLeft.x + x ,
  })
}

function readfoodLeft(data){
  foodLeft = data.val();
  console.log(foodLeft.x);
  //dog.x = foodLeft.x;
  //dog.y = foodLeft.y;
}

function showError(){
  console.log("Error in writing to the database");
}
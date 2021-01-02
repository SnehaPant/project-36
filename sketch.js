//Create variables here
var dog,happydog,database, foodStock;
 var foodS 
 
 var food1,food2
 var foodobj
 var fedTime
 var lastfed
var button1
var button2
function preload()
{
  //load images here
  dog=loadImage('Dog.png')
  happydog=loadImage('happydog.png')
}

function setup() {
  createCanvas(900, 900);
  database=firebase.database()
  dog1=createSprite(750,390,10,10)
  dog1.addImage(dog)
  dog1.scale=0.3

foodobj=new Food()


     button1 = createButton('feed the dog');
    button1.position(600, 95);
  
  
     button2 = createButton('Add Food');
    button2.position(700, 95);
  


}

  function draw() {  
  background(46,139,87)
 
foodobj.getFoodStock()
//console.log(foodS)
button1.mousePressed(feedDog)
button2.mousePressed(addFoods)

 foodobj.display()
 //console.log("working")
  drawSprites();
 
 fill(225,225,254)
 textSize(15)
  fedTime=database.ref("lastfed")
fedTime.on("value",function(data){
lastfed=data.val()
})
 
 if(lastfed>=12)
{
  text("Last Feed : " +lastfed%12+" PM ",70,55)
} else if (lastfed==0){
text("Last Feed : 12 AM",70,55)
}else{
  text("Last Feed : " + lastfed +" AM ",70,55)
}
}

 
  

function feedDog(){
  dog1.addImage(happydog)
  food1=foodS-1
  foodobj.updateFoodStock(food1)
 
   
}
function addFoods(){
 food2=foodS+1
 foodobj.updateFoodStock(food2)
   
}



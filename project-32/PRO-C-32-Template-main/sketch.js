const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg){
    background(backgroundImg)
}

    Engine.update(engine);

    // write code to display time in correct format here
if(hour>=12){
    text("time: "+hour%12+" pm",50,100)
}else if(hour===0){
    text("time: 12am",100,100)
}
else{
    text("time: "+hour%12+" am",50,100)
}



}

async function getBackgroundImg(){

    // write code to fetch time from API
var info = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var infojson= await info.json()
    // write code slice the datetime
var datetime = infojson.datetime
hour = datetime.slice(11,13)
if (hour>=04&&hour<=06){
    debugger
    bg = "sunrise1.png"
}
else if (hour>=06&&hour<=08){
    debugger
    bg = "sunrise2.png"
}
else if (hour>=08&&hour<=11){
    debugger
    bg = "sunrise3.png"
}
else if (hour>=11&&hour<=17){
    debugger
    bg = "sunrise4.png"
}
else if (hour>=17&&hour<=21){
    debugger
    bg = "sunset10.png"
}
else if (hour>=21&&hour<=00){
    debugger
    bg = "sunset11.png"
}
else {
    debugger
    bg = "sunset12.png"
}

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg)
}

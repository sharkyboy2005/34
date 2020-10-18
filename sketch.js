var dog;
var position, database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    dog = createSprite(250,250,10,10);
    dog.shapeColor = "red";
    var dogRef = database.ref("dog/position")
    digRef.on("value", readPosition)
}

function draw(){
    background("white");
    if (position !==undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
        drawSprites();
    }
}

function readPosition(data){
    position = data.val()
    dog.x = position.x;
    dog.y = position.y;
}

function changePosition(x,y){
    database.ref("dog/position").set({
        'x': position.x+x,
        'y': position.y+y
    })
}
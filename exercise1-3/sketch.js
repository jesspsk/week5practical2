let player = {
    x : 50,
    y : 50,
    size : 50
};
let obstacle = {
    x : 150,
    y: 100,
    width :100,
    height : 200
}

function setup(){
    createCanvas(400, 400);
    background(255);
    noStroke();
}

function draw(){
    fill(255,0,0);
    square(player.x, player.y, player.size);
    fill(0);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

function move(){
    if (canPass()){
        if(keyPressed === 'w'){
            player.y += 1
        }
    }
}

function canPass(){
    if (obstacle.x < player.x || player.x > obstacle.x + obstacle.width){
        return false;
    } else if (obstacle.y < player.y || player.y > obstacle.y + obstacle.height){
        return false;
    } else{
        return false;
    }
}
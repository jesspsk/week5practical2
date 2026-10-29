let shapes = [];

function setup(){
    createCanvas(600,600);
}

function draw(){
    background(180, 120,200);
    for (let i = 0; i < shapes.length; i++){
        if (i % 2 === 0){
            fill(0);
        } else {
            fill(255);
        }
        rect(shapes[i].x, shapes[i].y, shapes[i].w, shapes[i].h);
    }
}

function addRect(){
    for (let i = 0; i < 100; i++){
        let r ={
            x : random(width),
            y : random(height),
            w : random(5, 10),
            h : random(5, 10),
        }
        shapes.push(r);
        console.log(shapes);
    }
}

function keyPressed(){
    shapes = []
    if(key===' '){
        addRect()
    }
}
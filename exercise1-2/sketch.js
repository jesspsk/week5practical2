let ball = {
    x: 50,
    y: 50,
    speedX: 3,
    speedY: 3,
    diameter : 100,
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    circle(ball.x, ball.y, ball.diameter);
    if (ball.x < 0 + ball.diameter/2 || ball.x > width - ball.diameter/2) {
        ball.speedX *= -1;
        ball.diameter = ball.diameter -1; 
    }
    if (ball.y < 0 + ball.diameter/2 || ball.y > height - ball.diameter/2) {
        ball.speedY *= -1;
        ball.diameter = ball.diameter -1; 
    }
    console.log(ball.diameter)
    ball.x += ball.speedX;
    ball.y += ball.speedY;
}
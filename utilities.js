function animate() {
    ctx3.clearRect(0,0,canvas.width, canvas.height);
    frogger.draw();
    frogger.update();
    handleObstacles();
    handleScoreBoard();
    //frame++;
    requestAnimationFrame(animate);
}
animate();

//Disparar frogger

window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        frogger.jump();
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode];
    frogger.moving = false;
});

function scored(){
    score++;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;

}

function handleScoreBoard(){
    ctx4.fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Score', 265, 15)
    ctx4.font = '60px Verdana';
    ctx4.fillText(score, 270, 65);
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Machines destroyed: ' + collisionsCount, 10, 39);
    ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 10, 60);
}

//colisão entre dois rectangulos

function collision(first, second){
    return !( first.x > second.x + second.width ||
            first.x + first.width < second.x ||
            first.y > second.y + second.height ||
            first.y + first.height < second.y); //ALELUIA!
}

function resetGame() {
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    score = 0;
    collisionsCount++;
    gameSpeed = 1;
}
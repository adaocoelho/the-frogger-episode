class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x= x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.carType = Math.floor(Math.random() * numberOfCars);
               
    }
    draw(){

        if (this.type === 'log') {
            ctx2.drawImage(log, this.x, this.y)
        } else {
            ctx.drawImage(car, 0, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height);
        }



        //colisão
        
       /*if (this.type === 'log'){
            ctx2.fillRect(this.x, this.y, this.width, this.height);
            ctx2.drawImage(kramer, 0, 0, 70, 70, this.x, this.y, this.width, this.height);
           
        }*/
        
           
           
           /* if (frame % this.random === 0) {


               if (this.frameX >= 1) this.frameX = 0;
                else this.frameX++;     
            }
          ctx5.drawImage(kramer, this.frameX * 70, this.frameY * 70, 70, 70, 
            this.x, this.y, this.width, this.height);
        } else if (thys.type === 'log'); {
            ctx5.drawImage(log, this.x, this.y, this.width. this.height);

        } else {
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(car, 0, 0, gird * 2, grid, this.x, this.y, this.width, this.height);
        } */
        //ctx.fillStyle = 'blue';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }
    update(){
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
        if (this.x > canvas.width * this.width){ //reinciar após volta completa a width / x
            this.x = 0 - this.width;
            
        }
    } else {
        if (this.x < 0 - this.width) {
            this.x = canvas.width + this.width
            Math.floor(Math.random() * 30 + 30); // delay para surgir novamente
        }
    }
    } 
}
   
function initObstacles() { //  1
    for (let i = 0; i < 2; i++) {
        let x = i * 350; //distancia dos carros
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, -3, 'car')); //passar novo obstaculo para o array e com 6 atributos.
    } //grid * 2 => duas linhas acima 

    for (let i = 0; i < 2; i++) { // 2
        let x = i * 300;
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car'))
    }
    
    for (let i = 0; i < 2; i++) { //3
        let x = i * 400; //distancia dos carros
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, -4, 'car')); 
    }
    for (let i = 0; i < 2; i++) { 
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid *2, grid, -2, 'log')); 
    }
    //for (let i = 0; i < 3; i++) {  // i < 3 porque obs vao ser mais pequenos e 200 pq quero obs mais proximos
       // let x = i * 200;
       // logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, -5, 'kramer' ));
   // }
}

initObstacles();

function handleObstacles() {
    for (let i = 0; i < carsArray.length; i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();
    }

//colisão com carros

    for (let i = 0; i < carsArray.length; i++){
        if (collision(frogger, carsArray[i])){
            ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50);
            resetGame();
        }
    for (let i = 0; i <  logsArray.length; i++){
        if (collision(frogger, logsArray[i])){
                ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50);
                resetGame();
        } 
    } 
}
}
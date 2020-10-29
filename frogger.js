class Frogger {
    constructor() {
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5; 
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40; //posiciona frog 40px no parte inferior do canvas
        this.moving = false; 
        this.frameX = 0; 
        this.frameY = 0;
    }
    update() {
        if (keys[38]) { //cima
            if (this.moving === false){
                this.y -= grid; 
                this.moving = true;
            }
        }
        if (keys[40]) { //baixo
            if (this.moving === false && this.y < canvas.height - this.height * 2) {
                this.y += grid;
                this.moving = true;
            }
        }
        if (keys[37]) { //esquerda
            if (this.moving === false && this.x > this.width){
                this.x -= grid;
                this.moving = true;
            }
        }
        if (keys[39]) { //direita
            if (this.moving === false && this.x < canvas.width - this.width * 2) {
                this.x += grid;
                this.moving = true;
            }
        }
        if (this.y < 0) scored();
    }
    draw() {
        ctx3.fillStyle = 'transparent'; // alterado para ctx3
        ctx3.fillRect(this.x, this.y, this.width, this.height);
        ctx3.drawImage(george, 0, 0, this.spriteWidth, this.spriteHeight, this.x - 25, this.y - 25, this.width * 2, this.height * 2);

    } //inseri ct3.drawyimage 1603 - vid 1.15
    jump(){
        
    }
}

const frogger = new Frogger();
const CONSTANTS = {
    GRAVITY: 0.4,
    FLAP_SPEED: -8,
    TERMINAL_VEL: 12,
    BIRD_WIDTH: 40,
    BIRD_HEIGHT: 30
};
export default class Bird {
    constructor(dimensions){
        this.velocity = 1;
        this.dimensions = dimensions;
        this.y = 300;
        this.x = 100;
    }
    drawBird(ctx){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x,this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    }
    animate(ctx){
        this.move();
        this.drawBird(ctx);
    }
    move(){
        this.y += this.velocity;
        this.velocity += CONSTANTS.GRAVITY;
    }
    flap(){
        this.velocity = CONSTANTS.FLAP_SPEED;
    }
}
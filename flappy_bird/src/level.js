const CONSTANTS = {
  PAIR_DISTANCE:220,
  GAP: 150
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [100,270,420];
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
  drawPipes(ctx){
    for(let ele of this.pipes){
      ctx.fillStyle = "green";
      ctx.fillRect(ele,0,40,250);
      // ctx.fillStyle = "green";
      // ctx.fillRect(ele,640,40,250);
    }
  }
  animate(ctx){
    this.drawBackground(ctx);
    this.drawPipes(ctx);
  }
}
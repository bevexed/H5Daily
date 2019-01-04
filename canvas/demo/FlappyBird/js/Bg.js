class Bg {
  constructor() {
    this.image = game.R.sky;
    this.distance = 0
  }

  render() {
    game.ctx.save();
    game.ctx.fillStyle = "rgb(78,192,202)";
    game.ctx.fillRect(0, 0, innerWidth, innerHeight);

    game.ctx.fillStyle = 'rgb(94,226,112)';
    game.ctx.fillRect(0, innerHeight * .5, innerWidth, innerHeight);

    this.distance -= 2;
    if (this.distance < -2 * this.image.width) this.distance = 0;
    game.ctx.drawImage(this.image, this.distance, (innerHeight - this.image.height) * 0.9);
    game.ctx.drawImage(this.image, this.distance + this.image.width, (innerHeight - this.image.height) * 0.9);
    game.ctx.drawImage(this.image, this.distance + this.image.width * 2, (innerHeight - this.image.height) * 0.9);
    game.ctx.restore()
  }
}

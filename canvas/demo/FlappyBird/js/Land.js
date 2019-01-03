class Land {
  constructor() {
    this.image = game.R.land
    this.distance = 0
  }

  render() {
    game.ctx.fillStyle = 'rgb(222,216,149)'
    game.ctx.fillRect(0, innerHeight * .9, innerWidth, innerHeight)

    this.distance -= 1;
    if (this.distance < -1 * this.image.width) this.distance = 0
    game.ctx.drawImage(this.image, this.distance, innerHeight * 0.8)
    game.ctx.drawImage(this.image, this.distance + this.image.width, innerHeight * 0.8)
    game.ctx.drawImage(this.image, this.distance + 2 * this.image.width, innerHeight * 0.8)
  }
}

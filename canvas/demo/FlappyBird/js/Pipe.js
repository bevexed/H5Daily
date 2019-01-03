class Pipe {
  constructor() {
    this.imagedown = game.R.pipe1
    this.imageup = game.R.pipe2
    this.interSpace = 100 // 管子的间隙
    this.allHeight = innerHeight //  管子总高
    this.upHeight = -(Math.random() * 0.4 + 0.1) * this.allHeight
    this.downHeight = this.allHeight - this.interSpace + this.upHeight
    this.distance = innerWidth
    game.pipes.push(this)
  }

  render() {
    this.distance -= 1;
    game.ctx.drawImage(this.imageup, this.distance, this.upHeight)
    game.ctx.drawImage(this.imagedown, this.distance, this.downHeight)
  }
}

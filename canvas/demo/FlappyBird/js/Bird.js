class Bird {
  constructor() {
    this.img = game.R.birds;
    this.x = (1 - 0.618) * innerWidth;
    this.y = (1 - 0.618) * innerHeight;
    this.rotate = 0;
    this.dropFps = 0;
    this.start = false;
    this.flyState = 0;

  }

  render() {
    this.update()
  }

  update() {
    game.canvas.onclick = () => {
      this.rotate = -0.2;
      this.dropFps = 0;
      this.y -= 1.3 * (25 - this.dropFps);
      this.start = true
    };

    if (game.time % 10 === 0) {
      this.flyState++;
      if (this.flyState === 3) this.flyState = 0
    }

    if (this.start) {
      this.dropFps += 0.8;
      this.rotate += 0.02;
      this.y += this.dropFps * 0.4
    }

    if (this.y < 0) {
      this.y = 0
    } else if (this.y > innerHeight * 0.8) {
      this.y = innerHeight * 0.8 - 26;
      this.start = false
    }
    game.ctx.save();
    // 将坐标系移到小鸟身上
    game.ctx.translate(this.x + 26, this.y + 22);
    game.ctx.rotate(this.rotate);
    // game.ctx.fillText(this.dropFps, -26, -22)
    game.ctx.drawImage(this.img, this.flyState * 52, 0, 52, 45, -26, -22, 52, 45);
    game.ctx.restore()

    game.BL = this.x;
    game.BR = this.x + this.img.width / 3 - 13;
    game.BT = this.y;
    game.BB = this.y + this.img.height
  }

}

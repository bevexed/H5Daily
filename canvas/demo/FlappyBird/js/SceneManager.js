class SceneManager {
  constructor() {
    // 1 => 欢迎  2 => 游戏 3 => 结束
    this.sceneNumber = 1;

    this.titleHeight = -48;

    this.startButton = innerHeight;

    this.bg = new Bg();
    this.land = new Land()
    this.bird = new Bird();
    this.bindEvent()
  }

  update() {
    switch (this.sceneNumber) {
      case 1:
        this.titleHeight += 2;
        if (this.titleHeight > canvas.height * 0.302) this.titleHeight = canvas.height * 0.302;
        this.startButton -= 3;
        if (this.startButton < 0.46 * innerHeight) this.startButton = 0.46 * innerHeight;
        break;
    }
  }

  render() {
    this.bg.render();
    this.bg.update();
    this.bird.render();
    game.time++;
    switch (this.sceneNumber) {
      case 1:
        game.ctx.drawImage(game.R.title, game.canvas.width / 2 - game.R.title.width / 2, this.titleHeight);
        game.ctx.drawImage(game.R.start, game.canvas.width / 2 - game.R.start.width / 2, this.startButton);
        break;
      case 2:
        this.bird.update()
        game.pipes.forEach((item, index, arr) => {
          item.render();
          if (arr.length > 5) {
            arr.splice(0, 2)
          }
        });

        if (game.time % 200 === 0) {
          new Pipe()
        }

        break;
    }
    this.land.render();
  }

  enter(sceneNumber) {
    this.sceneNumber = sceneNumber;
    switch (sceneNumber) {
      case 1:
        this.titleHeight = -48;
        this.startButton = innerHeight
        break;
      case 2:
        break;
    }
  }

  bindEvent() {
    game.canvas.onclick = event => {
      let mouseX = event.clientX
      let mouseY = event.clientY
      switch (this.sceneNumber) {
        case 1:
          if (mouseX > game.canvas.width / 2 - game.R.start.width / 2 && mouseX < game.canvas.width / 2 + game.R.start.width / 2) {
            if (mouseY > this.startButton && mouseY < this.startButton + game.R.start.height) {
              this.sceneNumber = 2
            }
          }
      }
    }
  }
}

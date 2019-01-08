class SceneManager {
  constructor() {
    // 1 => 欢迎  2 => 游戏 3 => 结束
    this.sceneNumber = 1;

    this.titleHeight = -48;

    this.startButton = innerHeight;

    this.bg = new Bg();
    this.land = new Land();
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
    game.time++;
    switch (this.sceneNumber) {
      case 1:
        this.bg.update();
        this.land.update();
        this.bird.render();
        this.bird.swing();
        game.ctx.drawImage(game.R.title, game.canvas.width / 2 - game.R.title.width / 2, this.titleHeight);
        game.ctx.drawImage(game.R.start, game.canvas.width / 2 - game.R.start.width / 2, this.startButton);
        break;

      case 2:
        game.ctx.fillStyle = '#fff';
        game.ctx.fillText(game.point, 10, 20);
        this.bg.update();
        this.land.update();
        this.bird.render();
        this.bird.swing();
        this.bird.update();
        game.pipes.forEach((item, index, arr) => {
          item.render();
          item.update();
          item.gameEnd();
          if (arr.length > 5) {
            arr.splice(0, 2)
          }
        });

        if (game.time % 200 === 0) {
          new Pipe()
        }
        break;

      case 3:
        this.bird.render();
        game.pipes.forEach((item, index, arr) => {
          item.render();
          if (arr.length > 5) {
            arr.splice(0, 2)
          }
        });
        game.ctx.drawImage(game.R.gameover, game.canvas.width / 2 - game.R.gameover.width / 2, innerHeight * 0.3);
        game.ctx.drawImage(game.R.start, game.canvas.width / 2 - game.R.start.width / 2, innerHeight * 0.4);
        break;

      case 4:
        break;
    }
    this.land.render();
  }

  enter(sceneNumber) {
    this.sceneNumber = sceneNumber;
    switch (sceneNumber) {
      case 1:
        this.bird = new Bird()
        game.pipes = [];
        this.titleHeight = -48;
        this.startButton = innerHeight;
        break;
      case 2:
        break;
    }
  }

  bindEvent() {
    game.canvas.onclick = event => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      switch (this.sceneNumber) {
        case 1:
          if (mouseX > game.canvas.width / 2 - game.R.start.width / 2 && mouseX < game.canvas.width / 2 + game.R.start.width / 2) {
            if (mouseY > this.startButton && mouseY < this.startButton + game.R.start.height) {
              this.enter(2)
            }
          }
          break;
        case 2:
          this.bird.rotate = -0.2;
          this.bird.dropFps = 0;
          this.bird.y -= 1.3 * (25 - this.bird.dropFps);
          this.bird.start = true;
          break;
        case 3:
          if (mouseX > game.canvas.width / 2 - game.R.start.width / 2 && mouseX < game.canvas.width / 2 + game.R.start.width / 2) {
            if (mouseY > 0.4 * innerHeight && mouseY < 0.4 * innerHeight + game.R.start.height) {
              this.enter(1)
            }
          }
          break;
      }
    }
  }
}

class Game {
  constructor(option) {
    this.canvas = document.querySelector(option.id);
    this.ctx = this.canvas.getContext('2d');
    this.ResourceJson = option.ResourceJson;
    this.init();
    this.loadAllResource(this.start)
  }

  // 设置画布的宽度和高度
  init() {
    if (innerWidth > 414) {
      innerWidth = 414
    } else if (innerWidth < 320) {
      innerWidth = 320
    }

    if (innerHeight > 736) {
      innerHeight = 736
    } else if (innerHeight < 500) {
      innerHeight = 500
    }

    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight
  }

  // 加载资源
  loadAllResource(callback) {
    this.R = {};
    let alreadyDone = 0;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        let res = JSON.parse(xhr.response);
        console.log(res);
        res.images.forEach((item, index, array) => {
          this.R[item.name] = new Image();
          this.R[item.name].src = item.url;
          this.R[item.name].onload = () => {
            alreadyDone++;
            this.ctx.clearRect(0, 0, innerWidth, innerHeight);
            this.ctx.textAlign = "center";
            this.ctx.font = "20px 黑体";
            this.ctx.fillText(`正在加载${alreadyDone}/${array.length},请稍候`, innerWidth / 2, innerHeight * (1 - 0.618));

            if (alreadyDone === array.length) {
              callback.call(this)
            }
          }
        })
      }
    };
    xhr.open("get", this.ResourceJson, true);
    xhr.send(null)
  }

  // 开始游戏
  start() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, innerWidth, innerHeight)
    })
  }
}

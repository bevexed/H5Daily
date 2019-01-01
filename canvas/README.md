## Canvas
### 属性
  - width
    - 默认 300
  - height
    - 默认 150

### 使用 canvas 的步骤
  - 取得 canvas 元素
  - 取得上下文（context）
    - getContext('2d')
  - 填充(fill)与绘制(stroke)边框
  - 设置绘图样式(style)
    - fillStyle
    - strokeStyle
  - 指定线宽(line)
    - lineWidth
  - 指定颜色
    - fillStyle
    - strokeStyle
  - 绘制图形
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
  <body>
  <canvas id="canvas"></canvas>
  </body>
  <script>
    const canvas = document.querySelector('#canvas')
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = "red"
    ctx.strokeStyle = "blue"
    ctx.strokeRect(0,0,100,100)
    ctx.fillRect(100,100,200,200)
  </script>
  </html>
  ```

### 绘制矩形
  - 绘制一个填充的矩形
    - fillRect(x, y, width, height)
  - 绘制一个矩形的边框
    - strokeRect(x, y, width, height)
  - 清除指定的矩形区域，然后这块区域会变的完全透明
    - clearRect(x, y, width, height)

### 绘制路径
  - 绘制路径的步骤
    - 创建路径起始点
    - 调用绘制方法去绘制出路径
    - 把路径封闭
    - 一旦路径生成，通过描边或填充路径区域来渲染图形
  - 绘制路径用到的方法
    - beginPath()
      - 新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
    - moveTo(x, y)
      - 把画笔移动到指定的坐标(x, y)。相当于设置路径的起始点坐标
    - lineTo(x, y)
    - closePath()
      - 闭合路径之后，图形绘制命令又重新指向到上下文中
      - closePath 会 closePath
    - stroke()
      - 通过线条来绘制图形轮廓
    - fill()
      - 通过填充路径的内容区域生成实心的图形
      - 如果path没有闭合，则fill()会自动闭合路径。

### 绘制圆形(椭圆)
  - 通过 路径（path）绘制
    - arc(x, y, radius, startAngle, endAngle, anticlockwise)
    - ellipse(x, y, radiusX, radiusY, rotation, startAngle, ,endAngle. anticlockwise)
      - rotation 顺时针的旋转角度
  - 注意事项
    - 此方法需要 beginPath() 来开始新的路径
    - 此方法需要 closePath()
      - 如果不关闭路径 会造成路径的 重绘 ，可以利用这个特性绘制特殊的图形
    - 此方法只是绘制了 圆的路径，因此需要通过 fill() 或 stroke() 方法来 填充 或 描边 路径
  ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
      </head>
      <body>
      <canvas id="canvas"></canvas>
      </body>
      <script>
        const canvas = document.querySelector('#canvas')
        let ctx = canvas.getContext('2d')
        ctx.beginPath()
        ctx.arc(Random(), Random(), Random()/10, 0, Math.PI * 2)
        ctx.stroke()
      </script>
      </html>
  ```

### 绘制直线
  - moveTo(x, y)
  - lineTo(x, y)
  - closePath()
    - 会与第一个坐标点自动闭合
  - lineCap
    - 为直线添加 线帽
      - butt : 默认属性值，不添加线帽 (线帽有长度，所以不添加线帽的线 比 添加线帽的线 长)
      - round ： 圆型 线帽
      - square ：正方形 的线帽
  - lineJoin
    - 定义 两条直线交汇时的 拐角 的形状
    - miter : 默认属性，尖角拐角
    - round : 圆角拐角
    - bevel ：斜角拐角
  - setLineDash(\[x, y])
    - 定义 虚线形状
    - x ：定义虚线的每段线段长度
    - y ：定义线段与线段之间的间距
    - 如果数值中只有一个值
      - 线段长度 以及 线段之间的距离都等于改数值
    - 如果数组中的数组数量超过 2，则数组中数值的数量应为 偶数
      - 第奇数个数值代表线段的长度，第偶数个数值表示线段与线度之间的距离
    - 如果数组中数值数量大于1且不为偶数，浏览器自动复制数组中数值使数组中数值数量为偶数倍
  - getLineDash()
    - 获取虚线数组

### 绘制曲线
  - artTo(x1, y1, x2, y2, radiusX\[,radiusY, rotation])
    - 该方法使用 7 个 参数 ，radiusY 与 rotation 为可选参数
    - (x1, y1) 代表 控制点 的坐标
    - (x2, y2) 代表 圆弧 终点 的坐标
    - 当不使用 radiusY 时，radiusX 代表圆弧半径
    - 当时用 radiusY 时，radiusX 代表圆弧的横向半径，radiusX 代表圆弧的纵向半径

  - bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    - 该方法使用6个参数，绘制贝塞尔曲线
    - (cp1x, cp1y) 为第一个控制点的坐标
    - (cp2x, cp2y) 为第二个控制点的坐标
    - (x, y) 终点坐标

  - quadraticCurveTo(in float cpx, in float cpy, in float x, in float y)
    - 该方法通过4个参数，绘制二次养条曲线
    - (in float cpx, in float cpy) 控制点的坐标
    - (in float x, in float y) 终点坐标

### Path2D
  - 通过 Path2D 创建的路径，可以直接被 fill() 或 stroke() 方法绘制
  ```js
  function _path(id){
    let canvas = document.querySelector(id)
    let ctx = canvas.getContext('2d')
    let path = new Path2D()
    path.rect(10, 10, 10, 10)
    ctx.fill(path)
  }
  ```

### 绘制图形渐变
#### 绘制线性渐变
  - createLinearGradient(xStart, yStart, xEnd, yEnd)
    - 该方法使用 4 个参数，创建一个使用两个坐标点的 LinearGradient 对象
  - addColorStop(offset, color)
    - 该方法使用 2 个参数，为 LinearGradient 对象 追加渐变的颜色
    - offset ：所设定的颜色离开渐变起始点的偏移量，该参数为 \[0-1] 的浮点值
    - color  ： 绘制时所使用的颜色
    - 因为是渐变，所以最少调用两次 addColorGradient 方法
  - LinearGradient
    - 把 fillStyle 设定为 LinearGradient 对象，才可以绘制渐变颜色

#### 绘制径向渐变
  - createRadialGradient(xStart, yStart, radiusStart, xEnd, yEnd, radiusEnd)
    - 该方法使用 6 个参数，创建一个使用使用两个坐标点的 RadialGradient 对象
  - 同样需要使用 addColorStop 方法添加渐变颜色

### 图形变换
#### 坐标变换
  - 平移
    - translate(x, y)
  - 放大
    - scale(x, y)
  - 旋转
    - rotate(angle)
  > 三者都是基于 原点 变换

#### 矩阵变换
  - transform(m11, m12, m21, m22 ,dx, dy)

  | m11 | m21 | dx |
  | ----| ----|----|
  | m12 | m22 | right|
  | 0   |  0  |  1 |

  - setTransform()
    - 重置 坐标原点Y

### 绘制阴影
 - shadowOffsetX：阴影横向位移量
 - shadowOffsetY：阴影纵向位移量
 - shadowColor：  阴影颜色
 - shadowBlur：   阴影模糊范围

### 使用图像
#### 绘制图像
  - drawImage(image, x, y,)
  - drawImage(image, x, y, w, h)
  - drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)

    ```js
    let canvas = document.querySelector('#canvas')
      canvas.width = innerWidth
      canvas.height = innerHeight
      let ctx = canvas.getContext('2d')
      let img = new Image()
      img.src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546064531104&di=888a5e4eeb5eeb2c0f585fb9da9378dd&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015cb958098437a84a0e282b877334.jpg'
      img.onload = function () {
        ctx.drawImage(img, 0, 0)
      }
    ```

#### 图像平铺
  - createPattern(image,type)
    - image：平铺图像源
    - type ：平铺方法
      - no-repeat
      - repeat-x
      - repeat-y
      - repeat
  ```js
   let canvas = document.querySelector('#canvas')
    let ctx= canvas.getContext('2d')
    let img  = new Image()
    img.src = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2174870178,3676368630&fm=26&gp=0.jpg'
    img.onload=function () {
      let prtn = ctx.createPattern(img,'repeat')
      ctx.fillStyle = prtn
      ctx.fillRect(0,0,300,300)
    }
  ```

#### 裁剪
  - clip()
  ```js
   let canvas = document.querySelector('#canvas')
    let ctx = canvas.getContext('2d')
    let img = new Image()
    img.src = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2298249555,303155384&fm=26&gp=0.jpg'
    img.onload = () => {
      ctx.drawImage(img, 0, 0)
    }

    let path = new Path2D()
    path.moveTo(100, 30)
    path.lineTo(60, 30)
    path.lineTo(60, 60)
    path.closePath()
    ctx.clip(path)
   ```

#### 像素处理
  - getImageData(sx, sy, sw, sh)
    - (sx, sy) : 所获取区域的横纵坐标
    - (sw, sh) : 所获取区域的高度和宽度
    - getImageData 所获取的 值 是一个 CanvasPixelArray 对象，具有 height、width、data 等属性
      - data属性：保存图谱安像素数据的数组。类似\[r1 ,g1, b1, a1, r2, g2, b2, a2.....]
       - 透明度的取值范围是 0-255

  - putImageData(ImageData, dx, dy, \[, dirtyX, dirtyY, dirtyWidth, dirtyHeight])
    - (dx, dy) : 重绘图片的起始横纵坐标
    - (dirtyX, dirtyY, dirtyWidth, dirtyHeight) : 给出一个矩形，只显示此矩形内的数据

### 图形、图像的组合与混合
#### 组合图形
  - globalCompositeOperation
    - source-over (默认值)
      - 新图形覆盖在原图形之上
    - destination-over
      - 在原有图形之下绘制图形
    - source-in
      - 新图行与原有图形做 in 运算，新图行 与 旧图型 做 交集 , 新图片在上
    - destination-in
      - 原有图形与新图形做 in 运算， 新图行 与 旧图型 做 交集 , 旧图片在上
    - source-out
      - 新图行与原有图形做 out 运算， 新图行 与 旧图型 做 差集 , 新图片在上
    - destination-out
      - 原有图形与新图形做 out 运算，新图行 与 旧图型 做 差集 , 旧图片在上
    - source-atop
      - 只绘制新图形中与原有图形相重叠的部分以及未被重叠覆盖的原有图形，新图形的其他部分变为透明
    - destination-atop
      - 只绘制原有图形被新图形重叠覆盖的部分以及新图形的其他部分，原有图形中的其他部分变为透明，不绘制新图形中与原有图形相重叠部分
    - lighter
      - 原图型与新图行均重绘，重叠部分加高亮处理
    - xor
      - 只绘制新图形中与原图形中不重叠部分，重叠部分变透明
    - copy
      - 只绘制新图形，原有图形中未与新图形重叠部分变透明

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
  - 绘制矩形
    - 绘制一个填充的矩形
      - fillRect(x, y, width, height)
    - 绘制一个矩形的边框
      - strokeRect(x, y, width, height)
    - 清除指定的矩形区域，然后这块区域会变的完全透明
      - clearRect(x, y, width, height)

  - 绘制路径
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
    1. 此方法需要 beginPath() 来开始新的路径
    2. 此方法需要 closePath()
      - 如果不关闭路径 会造成路径的 重绘 ，可以利用这个特性绘制特殊的图形
    3. 此方法只是绘制了 圆的路径，因此需要通过 fill() 或 stroke() 方法来 填充 或 描边 路径
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

- Path2D
  - 通过 Path2D 创建的路径，可以直接被 fill() 或 stroke() 方法绘制
  ```js
  function _path(id){
    let canvas = document.querySelector(id)
    let ctx = canvas.getContext('2d')
    let path = new Path2D()
    path.rect(10,10,10,10)
    ctx.fill(path)
  }
  ```



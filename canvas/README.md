## canvas
### 基础
  - canvas
    - 属性
      - width
        - 默认 300
      - height
        - 默认 150
  - 使用 canvas 的步骤
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



- 绘制圆形



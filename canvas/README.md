## canvas
### 基础
  - canvas
    - 属性
      - width
      - height
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

// 适配器模式
console.log('///////////////////// { 适配器模式 } /////////////////////')

interface Graph {
  drwLine(): void

  drawPie(): void
}

class Canvas2D implements Graph {
  drwLine(): void {
    console.log('draw 2d line')
  }

  drawPie(): void {
    console.log('draw 2d pie')
  }
}

class Canvas3D {
  drwLine(): void {
    console.log('draw 3d line')
  }

  drawPie(): void {
    console.log('draw 3d pie')
  }
}

class Canvas3DAdapter implements Graph {
  private canvas3D: Canvas3D = new Canvas3D()

  drwLine(): void {
    this.canvas3D.drwLine()
  }

  drawPie(): void {
    this.canvas3D.drawPie()
  }
}

const canvas2D: Graph = new Canvas2D()
canvas2D.drwLine()
canvas2D.drawPie()

const canvas3D: Graph = new Canvas3DAdapter()
canvas3D.drwLine()
canvas3D.drawPie()

export {}

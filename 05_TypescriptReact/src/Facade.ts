// 外观模式

console.log('///////////////////// { 适配器模式 } /////////////////////')

class Axis {
  draw(): void {}
}

class Line {
  draw(): void {}
}

class FanShape {
  draw(angle: number): void {}
}

interface Graph {
  drawLineChart(): void
  drawPieChart(): void
}

class Chart implements Graph {
  drawLineChart(): void {
    new Axis().draw()
    new Line().draw()
  }

  drawPieChart(): void {
    new FanShape().draw(12)
    new FanShape().draw(186)
    new FanShape().draw(54)
  }
}


export {}

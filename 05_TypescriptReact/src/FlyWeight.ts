// 享元模式
console.log('///////////////////// { 享元模式 } /////////////////////')

interface Element {
  isHidden: boolean
  name: string
  draw(): void
  remove(): void
}

class Circle implements Element {
  isHidden: boolean = false
  constructor(public name: string) {
  }

  draw(): void {
    if(!this.isHidden) {
      console.log(`draw circle: ${this.name}`)
    }
  }

  remove() {
    this.isHidden = true
    console.log(`remove circle: ${this.name}`)
  }
}

class Rectangle implements Element{
  isHidden: boolean = false

  constructor(public name: string) {}

  draw(): void {
    if(!this.isHidden) {
      console.log(`draw circle: ${this.name}`)
    }
  }

  remove() {
    this.isHidden = true
    console.log(`remove circle: ${this.name}`)
  }
}

class GraphFactory {
  static readonly instance: GraphFactory = new GraphFactory()
  private grahPool: {[key: string]: Array<Element>} = {} // 图元池

  getCircle(newName: string): Circle {
    return this.getElement(newName, Rectangle) as Circle
  }

  getRectangle(newName: string): Rectangle {
    return this.getElement(newName, Rectangle) as Rectangle
  }

  getCount(isHidden: boolean) {
    let count = 0
    for(let item in this.grahPool) {
      count += this.grahPool[item].filter(o => o.isHidden === isHidden).length
    }
    return count
  }

  removeAll() {
    console.log('remove all')
  }

  private getElement(newName: string, eleConstructor: typeof Circle | typeof Rectangle): Element {
    if(this.grahPool[eleConstructor.name]) {
      let element = this.grahPool[eleConstructor.name].find(o => o.isHidden)
      if(element) {
        element.isHidden = false
        element.name = newName
        return element
      }
    }
    let element = new eleConstructor(newName)
    this.grahPool[eleConstructor.name] = this.grahPool[eleConstructor.name] || []
    this.grahPool[eleConstructor.name].push(element)
    return element
  }
}


const num = 5;
console.log('create elements');

for(let i = 1;i<=num;i++){
  let circle = GraphFactory.instance.getCircle(`circle ${i}`);
  let rectangle = GraphFactory.instance.getRectangle(`rectangle ${i}`);

  circle.draw();
  rectangle.draw();
}

console.log(`element count: ${GraphFactory.instance.getCount(false)}`);

GraphFactory.instance.removeAll();

console.log(`visible element count: ${GraphFactory.instance.getCount(false)}`);
console.log(`hidden element count: ${GraphFactory.instance.getCount(true)}`);

console.log('create elements again');

for(let i = 1;i<=num;i++){
  let circle = GraphFactory.instance.getCircle(`new circle ${i}`);
  let rectangle = GraphFactory.instance.getRectangle(`new rectangle ${i}`);

  circle.draw();
  rectangle.draw();
}

console.log(`visible element count: ${GraphFactory.instance.getCount(false)}`);
console.log(`hidden element count: ${GraphFactory.instance.getCount(true)}`);



export {}

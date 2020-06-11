// 组合模式

console.log('///////////////////// { 组合模式 } /////////////////////')
abstract class MenuBase extends Array<MenuBase> {
  name: string | undefined

  abstract click(): void

  addChild(...childs: Array<MenuBase>) {
    childs.forEach(item => this.push(item))
  }
}

class MenuItem extends MenuBase {
  constructor(public name: string, private clickFunc?: (() => string) | undefined ) {
    super();
  }

  click(): void{
    console.log(`click ${this.name}`)

    if(this.clickFunc) {
      console.log(this.clickFunc)
    }

    if(this.length > 0) {
      const childs = this.reduce((prev, next) => ({name: `${prev.name}, ${next.name}`}) as MenuItem).name
      console.log(`${this.name}'s childs: ${childs}`)
      console.log(this)
    }

  }
}

const root = new MenuItem('root')
const A1 = new MenuItem('A1')
const A2 = new MenuItem('A2', () => 'my name is A2')

const B1 = new MenuItem('B1')
const B2 = new MenuItem('B2', () => 'my name is B2')
const B3 = new MenuItem('B3', () => 'my name is B3')

root.push(A1, A2)

A1.push(B1, B2, B3)

root.click()

A1.click()
A2.click()
B1.click()

export {}

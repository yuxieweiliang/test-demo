/**
 * 如果数值存在，则显示数值与单位，否则显示空
 * @param num
 * @param unit
 */
export function verifyEmptyUnit (num: any, unit: string) {
  const _num = num as unknown as number
  return _num > 0 ? (num + unit) : ''
}

/**
 * 如果数字为小数，并且小数位大于 numb 则截取为小数位
 * 否则返回
 * @param num
 * @param numb
 */
export function toFixed(num: number | string, numb: number = 4):number {
  if (num) {
    const bool = num.toString().split('.')[1]
    if(bool && bool.length > 4) {
      const _num: number = num as number || 0
      return _num.toFixed(numb) as unknown as number
    } else {
      return num as number
    }
  } else {
    return num as number
  }
}

export function printLabel (label: {label: string}) {
  console.log(label.label)
}

printLabel({label: 'size 10 object'})

// 接口
interface LabelledValue {
  label: string
}

function printLabelled(labelValue: LabelledValue) {
  console.log(labelValue.label)
}

printLabelled({label: 'labelled value is 1000'})


// 接口 - 可选属性
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = { color: 'white', area: 100 }
  if(config.color) newSquare.color = config.color
  if(config.width) newSquare.area = Math.pow(config.width,2)
  return newSquare
}


console.log(createSquare({color: '<<< black >>>', width: 100}))

// console.log(createSquare({ colour: 'red', width: 100 })) Error

{
  // 添加一个字符串索引签名
  interface SquareConfig2 {
    color?: string
    width?: number
    [propName: string]: any
  }
  const createSquare2 = (config: SquareConfig2): SquareConfig => {
    let newSquare = { color: 'white', area: 100 }
    if(config.color) newSquare.color = config.color
    if(config.width) newSquare.area = Math.pow(config.width,2)
    return newSquare
  }
  console.log(createSquare2({ colour: 'red', width: 100 }))
}

// 接口 - 只读属性

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = {x: 10, y: 20}
// p1.x = 20 Error

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
// ro[0] = 12 Error
// a = ro Error
a = ro as number[]

// 接口 - 函数类型

interface SearchFunc {
  (source: string, subString: string): boolean
}


const mySearch: SearchFunc = function(source: string, subString: string): boolean {
  let result = source.search(subString)
  return result > -1
}

console.log(mySearch('aaaaa', 'aa'))

/**
 * 可以不为函数再次指定类型，因为接口已经指定类型。
 */
const selfSearch: SearchFunc = function (src, sub):boolean {
  let result = src.search(sub)
  return result > -1
}

console.log(selfSearch('url/jpg.image', 'jpg'))

// 接口 - 可索引的类型

interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr:string = myArray[0]
console.log(myStr)

let youArray: StringArray
youArray = {
  0: 'Bob',
  2: 'Fred'
}

let youStr: string = youArray[1]

console.log(youStr)

class Animal {
  name: string
}
class Dog extends Animal {
  breed: string
}

interface NotOkay {
  // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  // [x: number]: Animal
  [x: string]: Dog
}

let okay: NotOkay = {
  key: {
    name: 'sting',
    breed: ''
  }
}
console.log(okay)

interface NumberDictionary {
  [index: string]: number
  length: number
  // Property 'name' of type 'string' is not assignable to string index type 'number'.
  // name: string
}

let dic:NumberDictionary = {
  1: 1,
  2: 2,
  length: 1
}
console.log(dic)

interface ReadonlyStringArray {
  readonly [index: number]: string
}

let myArrayString: ReadonlyStringArray = ['Alice', 'Bob']
// myArrayString[2] = 'Mallory' Error
console.log(myArrayString)

// 接口 - 类类型

interface ClockInterface {
  currentTime: Date
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h:number, m:number) {}
}

interface DateInterface {
  currentTime: Date
  setTime(d: Date):void
}

class MyClock implements DateInterface{
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}

// 接口 - 类型静态部分与私有部分的区别
/*interface ClockConst {
  new (hour: number, minute: number): void
}

class ClockConstructor implements ClockConst {
  currentTime: Date
  constructor(h: number, m: number) {
  }
}*/

interface ClockInterface2 {
  tick():void
}

interface ClockConst {
  new (hour: number, minute: number): ClockInterface2
}

function createClock(ctor: ClockConst, hour: number, minute: number): ClockInterface2 {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick(): void {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface2 {
  constructor(h: number, m: number) {
  }
  tick(): void {
    console.log('tick tick')
  }
}

let digital = createClock(DigitalClock, 12, 12)
let analog = createClock(AnalogClock, 7, 32)

digital.tick()
analog.tick()

// 接口 - 继承

interface Shape {
  color: string
}

interface Square extends Shape{
  sideLength: number
}

let square = <Square>{color: 'blue', sideLength: 10}

console.log(square)

// 可以继承多个接口

interface PenStroke {
  penWidth: number
}

interface SquareSub extends Shape, PenStroke {
  sideLength: number
}

let square2 = <Square>{ color: 'blue', sideLength: 10, penWidth: 2 }

// 接口 - 混合类型

interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = <Counter>function (start) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter
}

let c = getCounter()
c(10)



// 接口 - 接口继承类

class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select(): void {}
}

class TextBox extends Control {

}

/*
 state 可以继承，但是不可以重写
class Image implements SelectableControl {
  private state: any
  constructor(state: any) {
    this.state = state
  }
  select(): void {
  }
}*/

class Location {

}



















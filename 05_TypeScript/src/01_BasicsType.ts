// 布尔值
import {not} from "should";

export const isDone: boolean = false
// 数字
export const decLiteral: number = 6
export const hexLiteral: number = 0xf00d
export const binaryLiteral: number = 0b1010
export const octalLiteral: number = 0o744

// 字符串
// @ts-ignore
export const name: string = 'bob'
export const firstName: string = `Gene`
export const fillName: string = `${firstName} ${name}`

// 数组
export const array1: number[] = [1, 2, 3]
export const array2: Array<number> = [1, 2, 3]
export const list1: string[] = ['a', 'b', 'c']
export const list2: Array<string> = ['a', 'b', 'c']

// 元组
export const tupleX: [string, number] = ['hello', 10]

// 枚举
// @ts-ignore
export enum Color1 { Red, Green, Blue }
export const red: Color1 = Color1.Red
export const green: Color1 = Color1.Green
export const blue: Color1 = Color1.Blue

console.log(Color1.Red, Color1.Green, Color1.Blue)
export enum Color2 { Red = 2, Green = 7, Blue = 12 }
console.log(Color2.Red, Color2.Green, Color2.Blue)
// Potentially invalid target of indexed property access 索引属性访问的目标可能无效
console.log(Color2[0], Color2[1], Color2[2])

// Any
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false
console.log('notSure: => ', notSure)

// notSure.inItExists() // notSure.inItExists is not a function
// notSure.toFixed() // notSure.toFixed is not a function

const prettySure: Object = 4
console.log('prettySure: => ', prettySure)

const list: any[] = [1, true, 'free']
list[1] =100
console.log('list[1]: => ', list[1])

// Void

function warnUser(): void {
  console.log('this is my warning message')
}
warnUser()

// Never

// 返回 never 的函数必须存在无法达到的终点
function error(message: string): never {
  if(message) {
    throw new Error(message)
  } else {
    throw new Error('has error message')
  }
}

// 推断的返回值类型为never
function fail():never {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop():never {
  while(true) {
    // 无线循环也没有返回值
  }
}

// Object
declare function create(o: object | null): void;

// create({props: 0})
// create(null)

// create(42) // Error
// create(true) // Error
// create('string') // Error
// create(undefined) // Error

// 类型断言

let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
console.log(strLength)

let someVal: any = someValue
let strLen: number = (someVal as string).length
console.log(strLen)







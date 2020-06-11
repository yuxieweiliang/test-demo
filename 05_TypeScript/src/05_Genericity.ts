// 泛型 - any
function identity<T>(arg: T): T {
  return arg
}

const id = identity<number>(2)
const id2 = identity(2)

// 泛型 - 变量

function identity2<T>(arg: T[]): number {
  return arg.length
}

function identity3<T>(arg: Array<T>): number {
  return arg.length
}

// 泛型 - 类型

let myIdentity22: <T>(arg: T[]) => number = identity2
myIdentity22([1, 2, 3])

// 使用不同的泛型参数名
let myIdentity33: <UFO>(arg: UFO[]) => number = identity2
myIdentity33([1, 2, 3])

// 使用带有函数签名的对象
let myIdentity2233: { <U>(arg: U[]): number } = identity2
myIdentity2233([1, 2, 3])

// 泛型 - 接口

interface GenericIdentity {
  <T>(arg: T): T
}

function identityCopy<T>(arg: T): T {
  return arg
}
let myIdentityCopy: GenericIdentity = identityCopy

// 泛型参数当作整个接口的参数

interface GenericIdentity22<T> {
  <T>(arg: T): T
}

function identityCopy22<T>(arg: T): T {
  return arg
}
let myIdentityCopy22: GenericIdentity22<string> = identityCopy22
const ident22 = myIdentityCopy22(11) // string 完全咩用
const ident2233 = myIdentityCopy22<string>('11')
console.log(ident22)

// 泛型 - 类
class Generic<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

const addGeneric = new Generic<string>()
addGeneric.zeroValue = 's'
// addGeneric.add('s','s')

// 泛型 - 实现 length 约束
interface Lengthwise {
  length: number
}

function logging<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
console.log(logging('some thing').length)

// 泛型 - 在泛型中使用类型参数

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let xData = { a: 1, b: 2, c: 3, d: 4 }
const mString = 'm'
const keyA = () => mString
getProperty(xData, 'a')
// getProperty(xData, keyA()) // Error


















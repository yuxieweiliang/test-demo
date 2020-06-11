

let x: [string, null, number];

x = ['num', null, 2];

// @ts-ignore
x[3] = 'string';


enum Color {
  Green = 1,
  Read = 'color',
  Yellow = 4,
}

console.log(Color['Green']);


let a: null = null;
let b: undefined = undefined;
{
  b = a;
}
a = b;
console.log(b);
console.log(a);

function infiniteLoop(): never {
  let i = 1;
  while (true) {
    if (i == 100) {
      throw new Error('fffffff');
    }
    i++;
  }
}

// infiniteLoop();

interface Square {
  color: string,
  area: number,
}

// 可选属性
interface SquareConfig {
  color?: string,
  width?: number,
}

function createSquare(config: SquareConfig): Square {
  let newSquare = {color: 'white', area: 100};
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare;
}

createSquare({color: '#fff', width: 20});

interface Point {
  readonly x: number,
  readonly y: number,
}

let p1: Point = {x: 10, y: 10};

// p1.x = 5; // error


let a1 = [1, 2, 3, 4, 5]

let ob: ReadonlyArray<number> = a1;

// let a = ob as number[];


interface ClockInterface {
  tick(): void
}

interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface
}

class Digital implements ClockInterface {
  constructor(h: number, m: number) {

  }

  tick() {
  }

}

let Digital2: ClockConstructor = Digital;
let digita2 = new Digital2(1, 2);


function identity2233<T>(arg: T): T {
  return arg;
}

var ident = identity2233<string>('string');
identity2233({});
identity2233(null);

function logingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;

}

logingIdentity(['fdsafsafdsa', 'fdsafsafdsa']);

// ----------------------------------------------------------------
let myIdentity: <T>(arg: T) => T = identity2233;

let myIdentity2: { <T>(arg: T): T } = identity2233;

// ----------------------------------------------------------------

interface GenericIdentity {
  <T>(arg: T): T;
}

let myIdentity3: GenericIdentity = identity2233;

// ----------------------------------------------------------------

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity4: GenericIdentityFn<string> = identity2233;

// ----------------------------------------------------------------


class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGener = new GenericNumber<number>();
myGener.zeroValue = 0;
myGener.add = function (x, y) {
  return x + y;
};

let stringNum = new GenericNumber<string>();
stringNum.zeroValue = '';
stringNum.add = function (x, y) {
  return x + y;
};

console.log(stringNum.add(stringNum.zeroValue, ' test'));


// ----------------------------------------------------------------
function getPropertyss<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let obj = {a: 1, b: 2, c: 3, d: 4};

getPropertyss(obj, 'a');
// getProperty(obj, 'm'); //  Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.


// ----------------------------------------------------------------
// 创建工厂函数
/*function create<T>(c: {new(): T}): T {
  return new c();
}*/


// ----------------------------------------------------------------


interface Obj {
  name: string,
  age: number,
  sex: undefined,

}


















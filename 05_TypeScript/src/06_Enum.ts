enum Direction {
  Up = 1,
  Dow,
  left,
  Right = 0
}

console.log('Direction => ', Direction.Right)

enum ResponseTypeStatus {
  No = 0,
  Yes = 1
}

function respond(recipient: string, message: ResponseTypeStatus): void {

}

respond('Princess Caroline', ResponseTypeStatus.Yes)

// 枚举值可以相同
const getB = () => 0
enum Word {
  A,
  C = 0,
  B = getB()
}
console.log('Direction => ', Word.A)

// 枚举 - 字符串枚举

enum StringEnum {
  Left = 'LEFT',
  Up = 'UP',
  Right = 'RIGHT',
  Bottom = 'BOTTOM'
}

console.log('Direction => ', StringEnum.Right)

// 枚举 - 异构枚举

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = 'YES'
}

// 枚举 - 计算的和常量成员

enum E { X, 'F'}

function enumF(obj: {X: number}) {
  return obj.X
}

console.log(enumF(E))

const aV = E.F
console.log('E[aV]', E[aV])

// 枚举 - 常量枚举 * 常量枚举会被编译到代码中
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// >>>>>>> var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];







interface Res {
  username: string
  password: string
  age: string
  following: string
}

function login(): Res {
  return {
    username: 's',
    password: 's',
    age: 's',
    following: 's'
  }
}

interface Sp {
  get: () => {}
}


class Spear<Sp> {
  get(src: string, cb: () => {}) {}
  add(src: string, cb: () => {}) {}
  update(src: string, cb: () => {}) {}
  up(src: string, cb: () => {}) {}
  delete(src: string, cb: () => {}) {}
  del(src: string, cb: () => {}) {}
  remove(src: string, cb: () => {}) {}
}

const sp = new Spear()
sp.get('/', function () {

  return {}
})















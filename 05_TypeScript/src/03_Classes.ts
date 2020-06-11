export class User {
  fullName: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName;
  }
}

// 类 - 继承

export class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}`)
  }
}

export class Dog extends Animal {
  htmls: string
  bark() {
    console.log('Woof! Woof!')
  }

  get html() {
    return 'value'
  }

  set html(value) {
    this.htmls = value
  }
}

class Animal1 {
  name: string
  constructor(theName: string) {
    this.name = theName
  }

  move(distanceInMeters = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

export class Snake1 extends Animal1 {
  age: number;
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters: number = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters);
    return distanceInMeters
  }
}

export class Horse extends Animal1 {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters: number = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
    return distanceInMeters
  }
}

// 类 公共、私有、受保护的修饰符
/**
 * public: 公共属性，可以在任意地方使用
 * private: 私有属性，只能当前类中使用
 * protected: 半私有属性，可以在派生类中使用
 */
export class Animal2 {
  public name: string

  private age: number

  constructor(name: string) {
    this.name = name
  }

  public move(distanceInMeters: number) {
    console.log('Animal2.move distanceInMeters')
  }

  private setAge(age: number) {
    this.age = age
  }

  public getAge(): number {
    return this.age
  }

  protected getName(): string {
    return this.name
  }
}

export class Employee extends Animal2 {
  public getAnimal2Name() {
    return super.getName()
  }
}

// 构造函数 protected，可以被继承，但是不能实例化
class Person {
  protected name: string
  protected constructor() {
  }
}

// new Person()
// Error Constructor of class 'Person' is protected and only accessible within the class declaration.

// readonly 描述符

class Octopus {
  readonly name: string
  readonly numberOflags: number = 0
  constructor(name: string) {
    this.name = name
  }
}

const dad = new Octopus('man with the 8 strong legs')
// dad.name = 'main' // Error

// 类 - 存取器

class Employee1 {
  fullName: string
}

let employee = new Employee1()
employee.fullName = 'Bob Smith'
if(employee.fullName) {
  console.log(employee.fullName)
}

// -----------------  设置 get set
const password = 'secret password'

export class Employee2 {
  private _fullName: string
  get fullName(): string {
    return this._fullName
  }
  set fullName(name: string) {
    if(password && password === 'secret password') {
      this._fullName = name
    } else {
      console.error('Error: Unauthorized update of employee!')
    }
  }
}


// 类 - 静态属性

export class Grid {
  static origin = {x: 0, y: 0}
  calculate(point: {x: number, y: number}) {
    let xDist = (point.x - Grid.origin.x)
    let yDist = (point.y - Grid.origin.y)
    return Math.sqrt(xDist * yDist + xDist * yDist) / this.scale
  }

  constructor(public scale: number) {}
}

// 类 - 抽象类

abstract class AbsAnimal {
  abstract makeSound(): string
  move(): void {
    console.log('roaming the earch...')
  }
}

// 同时也继承了 AbsAnimal 的 move 方法
export class Accounting extends AbsAnimal {
  constructor() {
    super();
  }
  makeSound(): string {
    return 'Accounting'
  }

  makeMove(): number {
    return 222
  }
}










import { User, Animal, Dog, Snake1, Horse, Animal2, Employee, Employee2, Grid, Accounting } from '../src/03_Classes'

describe('../src/03_Classes', function () {
  let user = new User('Yee', 'Huang');
  // console.log(user)
  it('class User', function () {
    expect(user.firstName).to.equal('Yee')
    expect(user.lastName).to.equal('Huang')
    expect(user.fullName).to.equal('Yee Huang')
    // hasOwnProperty 检查类自身的属性
    expect(user.hasOwnProperty('fullName')).to.equal(true)
  })

  let animal = new Animal()
  let dog = new Dog()
  // 检查是否拥有属性描述符 get set
  const descriptor = Object.getOwnPropertyDescriptor(Dog.prototype, 'html')
  // console.log(Object.getOwnPropertyNames(Animal.prototype))
  // console.log(Object.getOwnPropertyNames(Dog.prototype))
  it('class Dog', function () {
    expect(animal.constructor === Animal).to.equal(true)
    expect(dog.constructor === Dog).to.equal(true)

    // 检查类的继承
    expect(animal instanceof Animal).to.equal(true)
    expect(dog instanceof Animal).to.equal(true)
    expect(dog instanceof Dog).to.equal(true)

    // 从子类上获取父类
    expect(Object.getPrototypeOf(Dog)).to.equal(Animal)

    // 检查类的属性描述符
    expect('get' in descriptor).to.equal(true)
    expect('set' in descriptor).to.equal(true)
  })

  const snake1 = new Snake1('ss')
  const horse = new Horse('bb')
  it('class Snake1 Horse', function () {
    expect(snake1.name).to.equal('ss')
    expect(snake1.move()).to.equal(5)
    expect(horse.name).to.equal('bb')
    expect(horse.move()).to.equal(45)
  })

  const animal2 = new Animal2('ss')
  const employee = new Employee('ss')
  it('class Snake1 Horse', function () {
    expect(animal2.name).to.equal('ss')
    expect(animal2.getAge()).to.equal(undefined)
    expect(employee.getAnimal2Name()).to.equal('ss')
  })

  const employee2 = new Employee2()
  it('class Snake1 Horse', function () {
    employee2.fullName = 'element'
    expect(employee2.fullName).to.equal('element')
  })

  const grid = new Grid(22)
  it('class Snake1 Horse', function () {
    expect(typeof grid.calculate({x: 2, y: 3})).to.equal('number')
  })

  const accounting = new Accounting()
  it('class Snake1 Horse', function () {
    expect(accounting.makeSound()).to.equal('Accounting')
    expect(accounting.makeMove()).to.equal(222)
    expect(accounting.move()).to.equal(undefined)
  })
})




















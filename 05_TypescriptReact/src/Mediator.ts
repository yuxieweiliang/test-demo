// 中介者模式
console.log('///////////////////// { 中介者模式 } /////////////////////')

export interface ClientInterface {
  getTaxi (): void
  pay (): void
}

export class Mediator implements ClientInterface {
  private taxi: CarInterface | undefined

  constructor(private mediator: MediatorInterface) {
    this.mediator.registerClient(this)
  }

  getTaxi(): void {
    this.taxi = this.mediator.getCar()
    if(this.taxi) {
      console.log('车来了')
    } else {
      console.log('没叫车吧！')
    }
  }

  pay(): void {
    this.mediator.pay(this.taxi)
  }
}

export interface CarInterface {
  isWorking: boolean

  startWork(): void
  finishWork(): void
}
class Taxi implements CarInterface {
  isWorking: boolean = false
  constructor(private mediator: MediatorInterface) {
    this.mediator.registerCar(this)
  }

  startWork(): void {
    console.log('有人叫车了')
    this.isWorking = true
    this.mediator.updateCarStatus(this)
  }

  finishWork(): void {
    console.log('送完这趟了')
    this.isWorking = false
    this.mediator.updateCarStatus(this)
  }
}


export interface MediatorInterface {
  registerClient(client: ClientInterface): void
  registerCar(car: CarInterface): void

  getCar(): CarInterface | undefined

  pay(car: CarInterface | undefined): void
  updateCarStatus(car: CarInterface): void
}

class DiDi implements MediatorInterface {
  private clientList: Array<ClientInterface> = []
  private carList: Array<CarInterface> = []

  registerClient(client: ClientInterface): void {
    this.clientList.push(client)
  }

  registerCar(car: CarInterface): void {
    this.carList.push(car)
  }

  getCar(): CarInterface | undefined {
    let car = this.carList.find(o => !o.isWorking)
    if(car) {
      car.startWork()
      return car
    }
  }

  pay(car: CarInterface | undefined): void {
    car?.finishWork()
  }

  updateCarStatus(car: CarInterface): void {
    console.log(`车子状态: ${car.isWorking ? '工作' : '闲置'}`)
  }
}

let didi = new DiDi()
new Taxi(didi)
let user = new Mediator(didi)
user.getTaxi()
user.pay()

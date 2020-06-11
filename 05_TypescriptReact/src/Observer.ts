// 观察者模式
console.log('///////////////////// { 观察者模式 } /////////////////////')

interface Observer {
  name: string

  sendMsg(msg: string): void
  receiveMsg(sender: Observer, msg: string): void
}

interface Subject {
  register(observer: Observer): void
  unregister(observer: Observer): void
  sendMg(sender: Observer, msg: string): void
}

class User implements Observer {
  constructor(public name: string, private subject: Subject) {
    this.subject.register(this)
  }

  sendMsg(msg: string): void {
    console.log(`${this.name} 发送 ${msg}`)
    this.subject.sendMg(this, msg)
  }

  receiveMsg(sender: Observer, msg: string): void {
    console.log(`${this.name} 收到来自 ${sender.name} 的消息：${msg}`)
  }
}

class Group implements Subject{
  private userList: Array<Observer> = []

  register(observer: Observer): void {
    this.userList.push(observer)
  }

  unregister(observer: Observer): void {
    const index = this.userList.indexOf(observer)
    if(index > -1) {
      this.userList.splice(index, 1)
    }
  }

  sendMg(sender: Observer, msg: string): void {
    console.log(`群收到${sender.name}发消息：${msg}，通知所有人`)
    this.notify(sender, msg)
  }

  private notify(sender: Observer, msg: string) {
    this.userList.forEach(user => user.receiveMsg(sender, msg))
  }
}

const grop = new Group()
const jim = new User('jim', grop)
const brook = new User('brook', grop)
const lucy = new User('lucy', grop)

jim.sendMsg('hello')
lucy.sendMsg('well done')



export { brook }





















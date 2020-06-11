// 策略模式
console.log('///////////////////// { 策略模式 } /////////////////////')
class Orc {
  protected _upKeJi: boolean = false

  get upKeJi(): boolean {
    return this._upKeJi
  }

  set upKeJi(value: boolean) {
    this._upKeJi = value
  }
}

abstract class Strategy {
  abstract execute(): void
}

class RushStrategy extends Strategy {
  execute(): void {
    console.log('升科技')
    console.log('出狗男女')
    console.log('一波流')
  }
}

class DefendStrategy extends Strategy {
  execute(): void {
    console.log('补塔防飞龙')
    console.log('出火枪')
    console.log('升科技')
    console.log('出龙鹰')
  }
}

class Human {
  strategy: Strategy | undefined

  checkOrc(orc: Orc) {
    if(orc.upKeJi) {
      console.log('侦察到兽族是跳科技打法')
      this.strategy = new DefendStrategy()
    } else {
      console.log('侦察到兽族是常规打法')
      this.strategy = new RushStrategy()
    }
  }

  deal() {
    this.strategy && this.strategy.execute()
  }
}

const orc = new Orc()
const human = new Human()

orc.upKeJi = false
human.checkOrc(orc)
human.deal()

orc.upKeJi = true
human.checkOrc(orc)
human.deal()



export {}

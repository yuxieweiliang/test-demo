// 简单工厂模式
console.log('///////////////////// { 简单工厂模式 } /////////////////////')

enum GunType {
  AK,
  M4A1
}

interface Shootable {
  shoot(): void
}

abstract class Gun implements Shootable {
  abstract shoot(): void
}

class AK47 extends Gun {
  shoot(): void {
    console.log(`ak47 shoot.`)
  }
}

class M4A1 extends Gun {
  shoot(): void {
    console.log(`ak47 shoot.`)
  }
}

class GunFactory {
  static createGun(type: GunType): Gun {
    switch (type) {
      case GunType.AK:
        return new AK47()
      case GunType.M4A1:
        return new M4A1()
      default:
        throw Error('not support this gun yet')
    }
  }
}

GunFactory.createGun(GunType.AK).shoot()
GunFactory.createGun(GunType.M4A1).shoot()


// 工厂方法模式 Factory Method
console.log('///////////////////// { 工厂方法模式 } /////////////////////')
abstract class FactoryGun {
  abstract create(): Gun
}
class AK47Factory extends FactoryGun {
  create(): Gun {
    const gun = new AK47()
    console.log('product ak47 gun.')
    this.clean(gun)
    this.applyTungOil(gun)
    return gun
  }

  private clean(gun: Gun) {
    console.log('clean gun.')
  }

  private applyTungOil(gun: Gun) {
    console.log('apply tung oil')
  }
}

class M4AiFactory extends FactoryGun {
  create(): Gun {
    const gun = new M4A1()
    console.log('product m4a1 gun.')
    this.clean(gun)
    this.applyTungOil(gun)
    return gun
  }

  private clean(gun: Gun) {
    console.log('clean gun.')
  }

  private applyTungOil(gun: Gun) {
    console.log('apply tung paint')
  }

}

const ak47Gun = new AK47Factory().create()
ak47Gun.shoot()

const m4a1 = new M4AiFactory().create()
m4a1.shoot()


// 抽象工厂模式 Abstract Factory
console.log('///////////////////// { 抽象工厂模式 } /////////////////////')

abstract class GunAbstract implements Shootable {
  protected _bullet: Bullet | undefined

  addBullet(bullet: Bullet) {
    this._bullet = bullet
  }
  abstract shoot(): void
}

class AK47Abstarct extends GunAbstract {
  shoot(): void {
    console.log(`ak47 shoot width ${this._bullet}.`)
  }
}
class M4A1Abstarct extends GunAbstract {
  shoot(): void {
    console.log(`m4a1 shoot width ${this._bullet}`)
  }
}

abstract class Bullet {
  abstract name: string | undefined
}

class AkBuillet extends Bullet {
  name: string | undefined
}

class M4Bullet extends Bullet {
  name: string | undefined
}

abstract class ArmFactory {
  abstract createGun(): GunAbstract
  abstract createBullet(): Bullet
}

class AK47FactoryAbstract extends ArmFactory{
  createGun(): GunAbstract {
    const gun = new AK47Abstarct()
    console.log('product ak47 gun.')
    this.clean(gun)
    this.applyTungOil(gun)
    return gun
  }

  private clean(gun: GunAbstract) {
    console.log('clean gun.')
  }

  private applyTungOil(gun: GunAbstract) {
    console.log('apply tung oil')
  }

  createBullet(): Bullet {
    return new AkBuillet()
  }
}
class M4A1FactoryAbstract extends ArmFactory{
  createGun(): GunAbstract {
    const gun = new M4A1Abstarct()
    console.log('product m4a1 gun.')
    this.clean(gun)
    this.applyTungOil(gun)
    return gun
  }

  private clean(gun: GunAbstract) {
    console.log('clean gun.')
  }

  private applyTungOil(gun: GunAbstract) {
    console.log('apply tung oil')
  }

  createBullet(): Bullet {
    return new M4Bullet()
  }
}

function shoot(gun: GunAbstract, bullet: Bullet) {
  gun.addBullet(bullet)
  gun.shoot()
}

let akFactory = new AK47FactoryAbstract();
shoot(akFactory.createGun(), akFactory.createBullet());

let m4a1Factory = new M4A1FactoryAbstract();
shoot(m4a1Factory.createGun(), m4a1Factory.createBullet());

export {}

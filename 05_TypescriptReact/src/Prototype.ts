// 原型模式
console.log('///////////////////// { 原型模式 } /////////////////////')

class Origin {
  name: string | undefined
}

const origin = new Origin()
origin.name = 'block'

const cloneObj = Object.create(origin)
console.log(cloneObj.name)

interface Clonable<T> {
  clone(): T
}

class OriginParent implements Clonable<Origin> {
  name: string | undefined
  clone(): Origin {
    const target = new Origin()
    target.name = this.name
    return target
  }
}

const origin1 = new OriginParent()
origin1.name = 'books'

const originClone = origin1.clone()
console.log(originClone.name)

export {}

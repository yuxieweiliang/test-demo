// 单例模式
console.log('///////////////////// { 单例模式 } /////////////////////')

class Cache {
  public static readonly Instance: Cache = new Cache();

  private _items: { [key: string]: string } = {}

  private Cache () {}

  set(key: string, value: string) {
    this._items[key] = value
    console.log(`set cache with key: '${key}'`)
  }

  get(key: string) {
    let value = this._items[key]
    console.log(`get cache value:'${value}' with key: '${key}'`)
    return value
  }
}


Cache.Instance.set('name', 'brook')
Cache.Instance.get('name')

Cache.Instance.set('name2', 'brook2')
Cache.Instance.get('name2')

Cache.Instance.set('name3', 'brook3')
Cache.Instance.get('name3')
export {}

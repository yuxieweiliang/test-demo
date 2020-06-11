/*function create<T>(c: {new(): T; }): T {
  return new c();
}*/

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<T extends Animal>(c: new () => T): T {
  return new c();
}

console.log('createInstance(Bee).keeper');
console.log(createInstance(Bee).keeper.hasMask);
console.log('createInstance(Lion).keeper');
console.log(createInstance(Lion).keeper.nametag);

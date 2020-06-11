// 函数 - 函数类型
function add(x: number, y: number) {
  return x + y
}

const myAdd = function(x: number, y: number): number { return x + y}

// 首先 allAdd 是一个函数类型
// 然后 = 为他赋值一个函数
const allAdd: (x: number, y: number) => number = function(x: number, y: number): number { return x + y}
const allAdd2: (x: number, y: number) => number = function(x, y) { return x + y}


interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName;
}

let user: Person = {
  firstName: 'Yee',
  lastName: 'yoo'
};

console.log(greeter(user));


// 函数 - 可选参数和默认参数

function buildName(firstName: string, lastName: string) {
  return firstName + lastName
}


// 函数 - 重载

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: string | number | any[]): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    return Math.floor(Math.random() * x.length);
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = pickCard(myDeck);
let pickedCard2 = myDeck[pickedCard1];

let pickedCard3 = pickCard(15);

// https://www.cnblogs.com/brookshi/p/6533920.html
// 备忘录模式
console.log('///////////////////// { 备忘录模式 } /////////////////////')
// 备忘录应该经常可以看到，游戏的save/load，photoshop的历史记录，windows的还原点都是这个模式的应用。
// 使用时也要注意保存的状态过大时产生的开销，保存在硬盘上的还好，如果是运行时保存在内存上的，比如一些复杂对象的undo/redo操作，保存每一个状态都是很大的内存开销，这时就需要做些限制，比方设置一个历史记录栈的最大值来限定内存的使用。
//
// 备忘录的例子和下面的命令模式一起写，实现一个支持undo/redo的操作。

console.log('///////////////////// { 命令模式 } /////////////////////')
// 特点：把请求封装成命令对象，命令对象里包含有接收者，这样client只需要发送命令，接收者就可以做出相关响应或相反的响应。
// 用处：当需要发送者和接收者解耦时可以考虑命令模式，常用于事件响应，请求排除，undo/redo等。
// 注意：命令数量爆炸，需要集中维护。
// 下面用TypeScript简单实现一个命令模式和备忘录模式的undo/redo：
// 遥控器算是典型的命令模式，按个按钮就可以命令电视做相关响应，假设遥控器有三种功能，开、关和换台。
//
// 建个Command、undo/redo、备忘录以及控制接口：
interface Executable {
  execute(params: any): void
}

interface UndoRedouble {
  undo(currParams: any, lastParams: any): void

  redo(params: any): void
}

// 备忘录
class MemoItem {
  command: Command | undefined
  params: any
}

// 备忘录模式
abstract class Memento {
  currPos: number | undefined

  abstract set(item: MemoItem): void
  abstract get(): MemoItem

  abstract getNext(): MemoItem
  abstract findLastWithSameType(memoItem: MemoItem): MemoItem | undefined
}

interface Controllable {
  channelNum: number

  open(): void
  close(): void
  switchTo(channelNum: number): void
}

// 实现备忘录
class History implements Memento {
  currPos: number | undefined
  private memoList: Array<MemoItem> = []
  static defaultMemoItem: MemoItem = {
    command: undefined,
    params: {channelNum: 0}
  }

  get currIndex(): number {
    if(this.currPos) {
      return this.memoList.length - this.currPos - 1
    }
    return 0
  }

  set(item: MemoItem) {
    if(this.currPos !== 0) {
      this.memoList.splice(this.currIndex + 1)
      this.currPos = 0
    }
    this.memoList.push(item)
  }

  get(): MemoItem {
    if(this.currIndex < this.memoList.length) {
      return this.memoList[this.currIndex]
    }
    return History.defaultMemoItem
  }

  getNext(): MemoItem {
    if(this.currIndex + 1 < this.memoList.length) {
      return this.memoList[this.currIndex + 1]
    }
    return History.defaultMemoItem
  }

  findLastWithSameType(memoItem: MemoItem): MemoItem | undefined {
    for(let i = this.currIndex - 1; i >= 0; i--) {
      if(memoItem.constructor.name === this.memoList[i].constructor.name) {
        return this.memoList[i]
      }
      return History.defaultMemoItem
    }
  }
}
// undo/redo可以由个专门的管理器来管理，建个undo/redo管理器：
// 管理器要做的事有
//
// 使用备忘录按顺序记住所有command
// undo/redo操作，并记住undo/redo到了哪一步
// 当undo/redo到了某一步时，再次有新的command，则在移除这步之后的command后再加新的command
class UndoRedoManager {
  static readonly instance: UndoRedoManager = new UndoRedoManager()
  history: Memento = new History()

  push(command: Command, params: any) {
    this.history.set({command, params})
  }

  redo() {
    if(this.history.currPos && this.history.currPos > 0) {
      const memoItem = this.history.getNext()
      this.history.currPos--
      if(memoItem && memoItem.command) {
          return memoItem.command.redo(memoItem.params)
      }
    } else {
      this.history.currPos = 0
      return
    }
  }

  undo() {
    const memoItem = this.history.get()
    if(memoItem === History.defaultMemoItem) {

    }
  }
}

// 抽象个Command, Command需要做到执行命令、撤消上次所做的操作及重做, 这里就可以用上面的UndoRedoManager:
abstract class Command implements Executable, UndoRedouble {
  constructor(protected tv: Controllable) { }

  execute(params: any): void {
    UndoRedoManager.instance.push(this, params)
  }

  redo() {
    UndoRedoManager.instance.redo()
  }

  undo() {
    UndoRedoManager.instance.undo()
  }
}

// 接下来分别实现具体的 开、关、换台命令：
class OpenCommand extends Command {
  execute(params: any): void {
    super.execute(params);
    this.tv.open()
  }
  undo(currParams: any, lastParams: any): void {
    this.tv.close()
  }
}

class CloseCommand extends Command {
  execute(params: any): void {
    super.execute(params);
    this.tv.close()
  }

  undo(currParams: any, lastParams: any): void {
    this.tv.open()
  }
}

class SwitchCommand extends Command{
  execute(params: any): void {
    super.execute(params);
    this.tv.switchTo(params.channelNum)
  }

  undo(currParams: any, lastParams: any) {
    this.tv.switchTo(lastParams.channelNum)
  }
}

// 最后来实现 电视和遥控器，遥控器通常只有一个开关按钮，要么开要么关，另外遥控器可以撤消到上次选的频道，也可以取消撤消，重新回到当前的：
// 电视只需要做具体的事就可以了，遥控器也不需要知道命令是谁在执行，只管发命令就好，这就是命令模式的好处。
class TV implements Controllable {
  constructor(public channelNum: number) {}

  open(){
    console.log('open');
  }

  close(){
    console.log('close');
  }

  switchTo(channelNum: number){
    console.log(`switch to channel: ${channelNum}`);
  }
}

class Controller {

  isOn: boolean = false;

  constructor(private openCmd: Command, private closeCmd: Command, private switchCmd: Command){
  }

  onOff(){
    if(this.isOn){
      this.isOn = false;
      this.closeCmd.execute(null);
    } else {
      this.isOn = true;
      this.openCmd.execute(null);
    }
  }

  switchTo(channelNum: number){
    this.switchCmd.execute({channelNum: channelNum});
  }

  undo(){
    UndoRedoManager.instance.undo(); //只需要调用UndoRedoManager做undo/redo就可以了，不需要管具体的细节
  }

  redo(){
    UndoRedoManager.instance.redo();
  }
}


// 来看看成果：
// 先定个执行顺序，
// 打开电视 -> 3频道 -> 4频道 -> 7频道 -> 撤消 -> 撤消 -> 重做 -> 11频道 -> 12频道 -> 撤消 -> 撤消 -> 关电视
//
// 预期结果：
// open -> 3 -> 4 -> 7 -> 4 -> 3 -> 4 -> 11 -> 12 -> 11 -> 4 -> close
// 从11回到4是因为在push 11频道时的command是4，也就是7已经被删掉了。
//
// 看看具体执行结果：

let tv = new TV(12);
let controller = new Controller(new OpenCommand(tv), new CloseCommand(tv), new SwitchCommand(tv));

controller.onOff();
controller.switchTo(3);
controller.switchTo(4);
controller.switchTo(7);
controller.undo();
controller.undo();
controller.redo();
controller.switchTo(11);
controller.switchTo(12);
controller.undo();
controller.undo();
controller.onOff();

export {}

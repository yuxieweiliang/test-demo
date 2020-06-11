// 模板方法模式
class ClassA {}
class ClassB {}
console.log('///////////////////// { 模板方法模式 } /////////////////////')

abstract class RequestBase<T> {
  constructor(private url: string) {}

  requestData(): T {
    this.sendRequest()
    return this.handleResponse()
  }

  protected sendRequest() {
    console.log(`send request, url: ${this.url}`)
  }

  protected abstract handleResponse(): T
}

class ResponseForServerA extends RequestBase<ClassA> {
  protected handleResponse(): ClassA {
    console.log('handle response for Server A')
    return ClassA
  }
}

class ResponseForServerB extends RequestBase<ClassB> {
  protected handleResponse(): ClassB {
    console.log('handle response for Server B')
    return ClassB
  }
}

const requesterA: RequestBase<ClassA> = new ResponseForServerA('server A')
const requesterB: RequestBase<ClassB> = new ResponseForServerB('server B')

requesterA.requestData()
requesterB.requestData()
export {}

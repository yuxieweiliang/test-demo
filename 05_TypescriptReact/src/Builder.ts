// 建造者模式

console.log('///////////////////// { 建造者模式 } /////////////////////')
enum HttpMethod {
  GET,
  POST
}

class HttpRequest {} // 假设 要发送的request

class RequestBuilder {
  private _method: HttpMethod | undefined

  private _headers: {[key: string]: string} = {}

  private _querys: {[key: string]: string} = {}

  private _body: string | undefined

  setMethod(method: HttpMethod): RequestBuilder {
    this._method = method
    return this
  }

  setHeader(key: string, value: string): RequestBuilder {
    this._headers[key] = value
    return this
  }

  setQuery(key: string, value: string): RequestBuilder {
    this._querys[key] = value
    return this
  }

  setBody(body: string): RequestBuilder {
    this._body = body
    return this
  }

  build(): HttpRequest {
    // 根据上面的信息，生成HttpRequest
    return HttpRequest
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getRequest = new RequestBuilder()
  .setMethod(HttpMethod.GET)
  .setQuery('name', 'brook')
  .build()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let postRequest = new RequestBuilder()
  .setMethod(HttpMethod.POST)
  .setHeader('ContentType', 'application/json')
  .setBody('body')
  .build();

export {}

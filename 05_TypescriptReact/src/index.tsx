import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Config } from './types'
import config from './config'
import './Builder'
import './Composite'
import './FlyWeight'
import './Mediator'
import './Observer'
import './Prototype'
import './SimpleFactory'
import './Singleton'
import './Strategy'


class Page {
  private config: Config
  private isLogin: boolean
  private func: any[]
  constructor(config: Config) {
    this.config = config
    this.isLogin = false
    this.func = []
  }

  init(cb:() => void): void {
    this.func.push(cb)
  }

  login(username: string, password: string) {
    // TODO ajax(LOGIN)
    this.start()
  }

  /**
   * 检查是否已经登陆
   */
  start(): void {
    if(this.isLogin) {
      // TODO cb()
    } else {
      this.toLoginPage()
    }
  }

  toLoginPage() {

  }
}

const page = new Page(config)

page.init(() => { })

page.login('a', 'a')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById('root'));



export interface BroadcastEventHolder {
  success():void,
  error(): void
}

export interface BroadcastEvent {
  [propName:string]: Array<BroadcastEventHolder>
}

export interface BroadcastEventData {
  [propName: string]: Array<any>
}
/*

const broadcast = new BroadcastPlugin()

broadcast.register('update', 'test', () => {})

broadcast.send('update', 'test', {})
*/

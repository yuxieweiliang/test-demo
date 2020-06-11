import { random } from '../src/utils'

describe('test utils', function () {
  const arrays:Array<number> = [1, 2, 3]
  it('random any width array', function () {
    expect(random(arrays) in arrays.values()).to.equal(true)
  })
})

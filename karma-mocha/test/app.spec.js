import { print, add, adds } from '../src/add'

describe('app.js', function() {
  it('test print', function() {
    var prints = print('arr');
    expect(prints).to.equal("arr");
  })
  it('test print', function() {
    var prints = print('arr');
    expect(prints).not.to.equal("arrs");
  })

  it('test add', function() {
    var adds1 = adds(3, 6);
    expect(adds1).to.equal(9);
  })
})

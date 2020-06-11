import { print, add, adds } from '../src/add'


describe('add.js', () => {
  it('test print', function() {
    var prints = print('arr');
    expect(prints).to.equal("arr");
  })
  it('test add', function() {
    var adds = add(3, 6);
    expect(adds).to.equal(9);
  })
  it('test add', function() {
    var adds1 = adds(3, 6);
    expect(adds1).to.equal(9);
  })
})

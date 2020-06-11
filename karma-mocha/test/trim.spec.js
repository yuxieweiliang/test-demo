import { trim, trimRequest } from '../src/trim'


describe('trim.js', () => {
  it('trim print', function() {
    var prints = trim('     arr');
    expect(prints).to.equal("arr");
  })
  it('trim arr', function() {
    var prints = trim('     arr      ');
    expect(prints).to.equal("arr");
  })
  it('trim arr', function() {
    var prints = trim('arr      ');
    expect(prints).to.equal("arr");
  })
  it('trim arr', function() {
    var prints = trim('      a  r  r      ');
    expect(prints).to.equal("a  r  r");
  })
})

describe('trim.js', () => {
  it('test trimRequest string', function() {
    var prints = trimRequest('     arr');
    expect(prints).to.equal("arr");
  })
  it('test trimRequest array', function() {
    var prints = trimRequest(['     arr', 'arr      ', '     a r r      ']);
    expect(prints[0]).to.equal('arr');
    expect(prints[1]).to.equal('arr');
    expect(prints[2]).to.equal('a r r');
  })
  it('test trimRequest object', function() {
    var prints = trimRequest({a: '     arr', b: 'arr      ', c: '     a r r      '});
    expect(prints.a).to.equal('arr');
    expect(prints.b).to.equal('arr');
    expect(prints.c).to.equal('a r r');
  })
  it('test trimRequest every', function() {
    var prints = trimRequest({
      a: '     arr',
      b: 'arr      ',
      c: '     a r r      ',
      d: ['     arr', 'arr      ', '     a r r      ']
    });
    expect(prints.a).to.equal('arr');
    expect(prints.b).to.equal('arr');
    expect(prints.c).to.equal('a r r');
    expect(prints.d[2]).to.equal('a r r');
  })
})

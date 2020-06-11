import {
  verifyEmptyUnit,
  toFixed,
} from '../src/02_Interface'

describe('./src/基础类型.ts', () => {

  it('test boolean to false', function() {
    const exp1 = verifyEmptyUnit(1, '张')
    const exp2 = verifyEmptyUnit('1', '张')
    const exp3 = verifyEmptyUnit('0', '张')
    const exp4 = verifyEmptyUnit(0, '张')
    expect(exp1).to.equal('1张');
    expect(exp2).to.equal('1张');
    expect(exp3).to.equal('');
    expect(exp4).to.equal('');
  })

  it('test boolean to false', function() {
    const exp1 = toFixed(1.12)
    const exp2 = toFixed(1.122432432432432)
    const exp3 = toFixed(2)
    const exp4 = toFixed(32323232)
    expect(Number(exp1)).to.equal(1.12);
    expect(Number(exp2)).to.equal(1.1224);
    expect(Number(exp3)).to.equal(2);
    expect(Number(exp4)).to.equal(32323232);
  })
})

describe('测试：接口', function () {
  it('函数接口',function () {

  })
})

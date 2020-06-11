import {
  isDone,

  decLiteral,
  hexLiteral,
  binaryLiteral,
  octalLiteral,

  name,
  firstName,
  fillName,

  array1,
  array2,
  list1,
  list2,

  tupleX,

  Color1,
  red,
  green,
  blue,
  Color2,
} from '../src/01_BasicsType'
import type = Mocha.utils.type;


describe('./src/基础类型.ts', () => {

  it('test boolean to false', function() {
    expect(isDone).to.equal(false);
  })

  it('test variable to number', function() {
    expect(typeof decLiteral).to.equal('number');
    expect(typeof hexLiteral).to.equal('number');
    expect(typeof binaryLiteral).to.equal('number');
    expect(typeof octalLiteral).to.equal('number');
  })

  it('test variable to string', function() {
    expect(typeof name).to.equal('string');
    expect(typeof firstName).to.equal('string');
    expect(typeof fillName).to.equal('string');
    expect(fillName).to.equal('Gene bob');
  })

  it('test variable to string', function() {
    expect(typeof array1).to.equal('object');
    expect(array1[0]).to.equal(1);
    expect(typeof array2).to.equal('object');
    expect(typeof list1).to.equal('object');
    expect(typeof list2).to.equal('object');
  })
})

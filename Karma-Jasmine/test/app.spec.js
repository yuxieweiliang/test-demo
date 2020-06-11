import { add, addw, has, searchParams } from '../src/app'

describe('app.js => ', function() {

  it('test add', function() {
    var add1 = add(3, 6);
    expect(add1).toEqual(9);
  });

  it('test addw', function() {
    var add2 = addw(4, 6);
    expect(add2).toEqual(10);
  });

  it('test has', function() {
    var ha3 = has(4, 6);
    expect(ha3).toEqual(10);
  });

  it('测试加法', function() {
    var ha3 = has(4, 6);
    expect(ha3).toEqual(10);
  });

  it('url测试', function() {
    var ha3 = searchParams('https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict');
    expect(ha3.smartresult).toEqual('dict');
  });
});

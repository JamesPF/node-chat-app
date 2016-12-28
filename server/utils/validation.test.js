const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 10;
    var res = isRealString(str);
    expect(res).toEqual(false);
  });

  it('should reject string with only spaces', () => {
    var str = '   ';
    var res = isRealString(str);
    expect(res).toEqual(false);
  });

  it('should allow strings with non-space characters', () => {
    var str = '   a string   '
    var res = isRealString(str);
    expect(res).toEqual(true);
  });
});

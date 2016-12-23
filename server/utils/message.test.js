var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = {
      from: 'James',
      text: 'Some text'
    };
    var res = generateMessage(message.from, message.text);

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({
      from: message.from,
      text: message.text
    });
  });
});

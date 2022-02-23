import Validator from '../main'

test ('ckeck regEx work', () => {
  const str = new Validator('qwerty');

  const expected = true;
  const received = str.validateUsername();

  expect(received).toBe(expected)
})

test ('ckeck regEx func err', () => {
  const str = () => {
    let strr = new Validator('123qwertt');
    return strr.validateUsername();
  }

  expect(str).toThrow('Invalid username')
})
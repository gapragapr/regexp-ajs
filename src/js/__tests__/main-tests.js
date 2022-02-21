import Validator from '../main';

test.each(['1Bill', '-Bill', '_Bill', '!Bill'])(
  'should return an error for entering numbers, underscores, and dashes at the beginning of the string',
  (userName) => {
    const validator = new Validator(userName);

    const textErr = 'Имя не должно начинаться цифрами, символами подчёркивания или тире.';
    expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
  },
);

test.each(['Bill-', 'Bill1', 'Bill_'])(
  'should return an error when entering numbers, underscores and dashes at the end of a line',
  (userName) => {
    const validator = new Validator(userName);

    const textErr = 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире.';
    expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
  },
);

test('should return an error for entering more than 3 digits in a row', () => {
  const validator = new Validator('Bi1994ll');

  const textErr = 'Имя не должно содержать подряд более трёх цифр.';
  expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
});

test('should return an error when writing cyrillic', () => {
  const validator = new Validator('Валентин');

  const textErr = 'Имя не должно содержать Кириллицы.';
  expect(() => validator.validateUsername()).toThrowError(new Error(textErr));
});

test('should return the user name', () => {
  const validator = new Validator('Bill');

  expect(validator.validateUsername()).toBe('Bill');
});
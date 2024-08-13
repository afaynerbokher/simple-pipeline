const sum = require('./sum');

test(`150 + 1000 is equal 1150`, () => {
  expect(sum(150, 1000))
    .toBe(1150);
});

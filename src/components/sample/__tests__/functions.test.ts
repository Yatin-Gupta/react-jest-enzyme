import functions from '../functions';

test('Add 2+2 must equals to 4', () => {
  expect(functions.sum(2, 2)).toBe(4);
});

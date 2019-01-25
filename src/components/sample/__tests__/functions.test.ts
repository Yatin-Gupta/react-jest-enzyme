import functions from '../functions';

beforeEach(() => functions.initDatabase());
afterEach(() => functions.closeDatabase());

// toBe is equivalent of using ===
// It must not be used to check floating point numbers.
// If we use object in it then also it check by reference not by value.
// We could also use tobeTruthy/tobeFalsy to check false or truth values.
// toBe are a kind of matcher
test('Add 2+2 must equals to 4', () => {
  expect(functions.sum(2, 2)).toBeDefined();
  expect(functions.sum(2, 2)).not.toBeNull();
  expect(functions.sum(2, 2)).not.toBe(5);
  expect(functions.sum(2, 2)).toBe(4);
});

// toEqual is used to check object value
test('User must be Amit + Kapoor', () => {
  expect(functions.user('Amit', 'Kapoor')).toEqual({
    fname: 'Amit',
    lname: 'Kapoor'
  });
});

// Less than or greater than
test('Should be under 1600', () => {
  const load1 = 900;
  const load2 = 400;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex is used with toMatch
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays
test('Check in array', () => {
  const usernames = ['admin', 'bob', 'ca'];
  expect(usernames).toContain('admin');
});

// Axios Request
test('User name must be Leanne Graham', async () => {
  const user = await functions.fetchUser();
  // @ts-ignore
  expect(user.name).toBe('Leanne Graham');
});

const nameCheck = () => console.log('Checking names...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is A', () => {
    const user = 'A';
    expect(user).toBe('A');
  });

  test('User is B', () => {
    const user = 'B';
    expect(user).toBe('B');
  });
});

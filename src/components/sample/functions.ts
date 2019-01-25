import axios from 'axios';
const sum = (val1: number, val2: number): number => {
  return val1 + val2;
};

const user = (fname: string, lname: string) => {
  return {
    fname,
    lname
  };
};

const fetchUser = async () => {
  try {
    const user = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    if (user.data) {
      return user.data;
    }
    return {};
  } catch (e) {
    return {};
  }
};

const initDatabase = () => {
  console.log('Db initialized after each test.');
};

const closeDatabase = () => {
  console.log('Db closed');
};

const initAllDb = () => {
  console.log('Db initialized - All');
};

const closeAllDb = () => {
  console.log('Db closed - All');
};

export default {
  closeAllDb,
  closeDatabase,
  fetchUser,
  initAllDb,
  initDatabase,
  sum,
  user
};

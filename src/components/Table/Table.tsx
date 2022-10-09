import { useEffect, useState } from 'react';
import { User } from '@global/types/User';

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log('data?', data);
  } catch (error) {
    console.log('error -> ', error);
  }
};
const Table = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>This is a table</div>;
};

export default Table;

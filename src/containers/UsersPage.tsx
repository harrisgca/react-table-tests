import { Table, SortableTable } from '@components/Table';
import { TableColumn } from '@components/Table/Table.types';
import { User } from '@global/types/User';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

const ActionMenu = ({ onClick }: { onClick: () => void }) => {
  const [showMenu, setShowMenu] = useState(false);
  // <div onClick={onClick} style={{ cursor: 'pointer', transform: 'rotate(90deg)' }}>
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div onClick={toggleMenu} style={{ cursor: 'pointer', position: 'relative' }}>
      <span>...</span>
      {showMenu && <div style={{ position: 'absolute', backgroundColor: 'yellow', top: 0, right: '2rem' }}>menu</div>}
    </div>
  );
};

const UsersPage = ({ children }: React.PropsWithChildren) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.info('data?', data);
      if (!Array.isArray(data)) throw new Error('failed to fetch');
      setUsers(data);
      return data;
    } catch (error) {
      console.info('error -> ', error);
      return error;
    }
  };
  console.info('users', users);
  useQuery(['USERS_QUERY_GET_ALL'], fetchUsers, { refetchOnWindowFocus: false });

  const columns = useMemo(
    (): TableColumn[] => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'User Name', accessor: 'username' },
      { Header: '', accessor: 'action', disableSortBy: true },
    ],
    [],
  );
  const data = useMemo(
    () =>
      users.map(u => ({
        name: u.name,
        username: u.username,
        action: <ActionMenu onClick={() => console.log('open menu')} />,
      })),
    [users],
  );
  return (
    <div id="users_page">
      <Table columns={columns} data={data} />
      <div style={{ marginBottom: '2rem' }} />
      <SortableTable columns={columns} data={data} isZebra />
    </div>
  );
};

export default UsersPage;

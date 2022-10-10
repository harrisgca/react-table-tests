import cn from 'classnames';
import { useTable } from 'react-table';
import styles from './table.module.scss';
import { TableProps } from './Table.types';

const Table = ({ columns, data, isZebra }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
  const trStyles = cn(styles.tr, { [styles.zebra]: isZebra });
  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map(hg => (
          <tr {...hg.getHeaderGroupProps()}>
            {hg.headers.map(column => (
              <th {...column.getHeaderProps()} className={styles.th}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className={styles.tbody}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={trStyles}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} className={styles.td}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

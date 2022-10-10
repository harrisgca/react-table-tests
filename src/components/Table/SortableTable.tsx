import { useTable, useSortBy } from 'react-table';
import cn from 'classnames';
import { TableProps } from './Table.types';
import styles from './table.module.scss';

const SortableTable = ({ columns, data, isZebra }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);
  const trStyles = cn(styles.tr, { [styles.zebra]: isZebra });
  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className={styles.th}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className={styles.tbody}>
        {rows.map((row, i) => {
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

export default SortableTable;

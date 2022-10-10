export type TableProps = {
  columns: TableColumn[];
  data: any[];
  isZebra?: boolean;
};

export type TableColumn = {
  Header: string;
  accessor: string;
  disableSortBy?: boolean;
};

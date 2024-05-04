import { useCallback, useMemo, useState } from "react";

import { Column } from "../components";

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  searchableFields?: (keyof T)[];
}

export const useTableFilter = <T, >({
  data,
  columns,
  searchableFields = [],
}: Props<T>) => {
  const [renderColumns, setRenderColumns] = useState<Column<T>[]>([...columns]);
  const [search, setSearch] = useState('');
  const [column, setColumn] = useState<Column<T> | null>(null);

  const handleSetSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const handleSetColumn = useCallback((sortColumn: Column<T>) => {
    if (sortColumn && sortColumn.sorteable) {
      const newOrder = sortColumn.sortOrder === null
        ? 'asc' : sortColumn.sortOrder === 'asc'
        ? 'desc' : sortColumn.sortOrder === 'desc'
        ? null : 'asc';

      setColumn({
        ...sortColumn,
        sortOrder: newOrder
      });
    }
  }, []);

  const handleSearch = (data: T[]) => {
    if (search) {
      return data.filter(item => {
        for (const field of searchableFields) {
          if (String(item[field]).toLowerCase().includes(search.toLowerCase().trim())) {
            return true;
          }
        }
        return false;
      });
    } else {
      return data;
    }
  }

  const handleSortByColumn = (data: T[]) => {
    if (column && column.sorteable) {
      renderColumns.forEach((col) => {
        if (col.accessor === column.accessor) {
          col.sortOrder = column.sortOrder;
        } else {
          delete col.sortOrder;
        }
      });

      setRenderColumns([...renderColumns]);

      if (column.sortOrder === 'asc') {
        return data.sort((a, b) => {
          if (a[column.accessor] < b[column.accessor]) return -1;
          if (a[column.accessor] > b[column.accessor]) return 1;
          return 0;
        });
      } else if (column.sortOrder === 'desc') {
        return data.sort((a, b) => {
          if (a[column.accessor] > b[column.accessor]) return -1;
          if (a[column.accessor] < b[column.accessor]) return 1;
          return 0;
        });
      } else {
        return data;
      }
    } else {
      return data;
    }
  }

  const filteredData = useMemo(() => {
    const dataFilteredBySearch = handleSearch([...data]);
    const dataFilteredByColumn = handleSortByColumn(dataFilteredBySearch);

    return dataFilteredByColumn;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, column]);
  
  return {
    filteredData,
    renderColumns,
    search,
    handleSetSearch,
    handleSetColumn
  }
}

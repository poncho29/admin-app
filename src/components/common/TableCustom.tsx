import { MdDeleteForever, MdEditSquare, MdRemoveRedEye } from "react-icons/md";

import { usePagination } from "../../hooks/usePagination";

import { Buttom } from "./Buttom";
import { PaginationTable } from "./PaginationTable";
import { useState } from "react";

export type Column<T> = {
  header: string;
  accessor: keyof T;
  sorteable?: boolean;
  sortOrder?: 'asc' | 'desc' | null;
}

interface Props <T>{
  data: T[];
  columns: Column<T>[];
  controls?: {
    text: string;
    icon: 'edit' | 'delete' | 'view';
    onClick: (item: T) => void;
  }[];
  // searchableFields?: (keyof T)[];
}

export const TableCustom = <T,>({
  data,
  columns,
  controls = [],
  // searchableFields = [],
}: Props<T>) => {
  const [dataTable, setDataTable] = useState<T[]>(data);
  const [renderColumns, setRenderColumns] = useState(columns);

  const handleSortByColumn = (column: Column<T>) => {
    if (column.sorteable) {
      let copyData = [...dataTable];

      renderColumns.forEach((col) => {
        if (col.accessor === column.accessor) {
          col.sortOrder = col.sortOrder === 'asc' 
            ? 'desc' : col.sortOrder === 'desc'
            ? null : 'asc'
        } else {
          delete col.sortOrder;
        }
      });

      if (column.sortOrder === 'asc') {
        copyData.sort((a, b) => {
          if (a[column.accessor] < b[column.accessor]) return -1;
          if (a[column.accessor] > b[column.accessor]) return 1;
          return 0;
        });
      } else if (column.sortOrder === 'desc') {
        copyData.sort((a, b) => {
          if (a[column.accessor] > b[column.accessor]) return -1;
          if (a[column.accessor] < b[column.accessor]) return 1;
          return 0;
        });
      } else {
        copyData = [...data];
      }

      setRenderColumns(renderColumns);
      setDataTable(copyData);
    }
  }

  const {
    paginatedData,
    pagination,
    handleChangePage,
    handleChangePageSize
  } = usePagination({ data: dataTable, pageSize: 5 });

  const getStyle = (icon: 'edit' | 'delete' | 'view') => {
    switch (icon) {
      case 'edit':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'delete':
        return  'bg-red-500 hover:bg-red-600';
      case 'view':
        return '';
      default:
        return null;
    }
  }

  const renderIcon = (icon: 'edit' | 'delete' | 'view') => {
    switch (icon) {
      case 'edit':
        return <MdEditSquare size={20} />;
      case 'delete':
        return <MdDeleteForever size={20} />;
      case 'view':
        return <MdRemoveRedEye size={20} />
      default:
        return null;
    }
  }

  const renderRow = (value: unknown): React.ReactNode => {
    if (value === null || value === undefined) {
      return '';
    } else if (typeof value === 'boolean') {
      return value ? 'Activo' : 'Inactivo';
    } else if (typeof value === 'string' || typeof value === 'number') {
      return value;
    } else {
      return '';
    }
  };  

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      {/* <div className="w-full flex items-center justify-between gap-2 px-6 py-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="p-1  border border-slate-200 rounded-lg focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}

      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="">
          <tr
            className="text-xs text-white uppercase bg-sky-800"
          >
            {renderColumns.map((col) => (
              <th
                key={col.header}
                scope="col"
                className={`text-nowrap px-4 py-2 ${col.sorteable ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={() => col.sorteable && handleSortByColumn(col)}
              >
                { col.header }
                
                {col.sorteable && col.sortOrder && (
                  <span
                    className="ml-2"
                  >
                    {col.sortOrder === 'asc' ? '▲' : '▼'}
                  </span>
                )}
              </th>
            ))}
            {controls.length > 0 && (
              <th
                key="controls-head"
                scope="col"
                className="text-center text-nowrap px-4 py-2 cursor-default"
              >
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={index}
              className="text-gray-900 border-b bg-white"
            >
              {columns.map(({ accessor }) => (
                <td
                  key={String(accessor)}
                  className="text-nowrap px-4 py-2"
                >
                  {renderRow(item[accessor])}
                </td>
              ))}
              {controls.length > 0 && (
                <td
                  key="controls-body"
                  className="flex gap-2 px-4 py-2"
                >
                  {controls.map(({ text, icon, onClick }) => (
                    <Buttom
                      key={text}
                      customClass={`flex items-center gap-2 ${getStyle(icon)}`}
                      onClick={() => onClick(item)}
                    >
                      {icon && renderIcon(icon)}
                      {text}
                    </Buttom>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationTable
        page={pagination.page}
        totalPages={pagination.totalPage}
        pageSize={pagination.pageSize}
        onChangePage={handleChangePage}
        onChangePageSize={handleChangePageSize}
      />
    </div>
  )
}

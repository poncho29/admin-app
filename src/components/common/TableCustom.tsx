import { MdDeleteForever, MdEditSquare, MdRemoveRedEye } from "react-icons/md";

import { usePagination, useTableFilter } from "../../hooks";

import { Buttom } from "./Buttom";
import { PaginationTable } from "./PaginationTable";

import { Column } from "../../interfaces";

interface Props <T>{
  data: T[];
  columns: Column<T>[];
  controls?: {
    text: string;
    icon: 'edit' | 'delete' | 'view';
    onClick: (item: T) => void;
  }[];
  searchableFields?: (keyof T)[];
}

export const TableCustom = <T,>({
  data,
  columns,
  controls = [],
  searchableFields = [],
}: Props<T>) => {
  const {
    filteredData,
    renderColumns,
    search,
    handleSetSearch,
    handleSetColumn
  } = useTableFilter({
    data,
    columns,
    searchableFields
  });

  const {
    paginatedData,
    pagination,
    handleChangePage,
    handleChangePageSize
  } = usePagination({ data: filteredData, pageSize: 5 });

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
    <div className="overflow-x-auto shadow-md bg-white sm:rounded-lg">
      {searchableFields.length > 0 && (
        <div className="w-full flex items-center justify-end gap-2 px-6 py-4">
          <input
            type="search"
            placeholder="Buscar..."
            className="p-1  border border-slate-200 rounded-lg focus:outline-none"
            value={search}
            onChange={handleSetSearch}
          />
        </div>
      )}

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
                onClick={() => col.sorteable && handleSetColumn(col)}
              >
                { col.header }
                
                {col.sorteable && col.sortOrder && (
                  <span
                    className="ml-2"
                  >
                    {
                      col.sortOrder === 'asc' ? '▲' : 
                      col.sortOrder === 'desc' ? '▼' : null
                    }
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

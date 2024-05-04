import { MdDeleteForever, MdEditSquare, MdRemoveRedEye } from "react-icons/md";

import { usePagination } from "../../hooks/usePagination";

import { Buttom } from "./Buttom";
import { PaginationTable } from "./PaginationTable";

export type Column<T> = {
  header: string;
  accessor: keyof T;
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
  const {
    paginatedData,
    pagination,
    handleChangePage,
    handleChangePageSize
  } = usePagination({data, pageSize: 5 });

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
      return value;
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
            {columns.map(({ header }) => (
              <th
                key={header}
                scope="col"
                className="text-nowrap px-4 py-2 cursor-pointer"
              >
                { header }
              </th>
            ))}
            {controls.length > 0 && (
              <th
                key="controls-head"
                scope="col"
                className="text-center text-nowrap px-4 py-2"
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

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MdDeleteForever, MdEditSquare, MdRemoveRedEye } from "react-icons/md";

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
}

export const TableCustom = <T,>({ data, columns, controls = [], }: Props<T>) => {

  const [finalData, setFinalData] = useState<T[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPage: 1,
    pageSize: 5
  });

  useEffect(() => {
    const total = Math.floor(data.length / pagination.pageSize);
    const newData = handlePaginteData(data);

    setPagination(old => ({ ...old, totalPage: total }));
    setFinalData(newData);
  }, []);

  useEffect(() => {
    const newData = handlePaginteData(data);
    setFinalData(newData);
  }, [pagination.page]);
  
  useEffect(() => {
    const total = Math.floor(data.length / pagination.pageSize);
    setPagination(old => ({ ...old, page: 1, totalPage: total }));
  }, [pagination.pageSize]);

  const handleChangePage = (newPage: number) => {
    setPagination(old => ({ ...old, page: newPage }));
  }

  const handleChangePageSize = (newPageSize: number) => {
    setPagination(old => ({ ...old, pageSize: newPageSize }));
  }

  const handlePaginteData = (data: T[]) => {
    const start = pagination.page === 1 ? 0 : (pagination.page * pagination.pageSize) - pagination.pageSize;
    const end = pagination.page * pagination.pageSize;

    return data.slice(start, end);
  }

  const convertToReactNode = (value: unknown): React.ReactNode => {
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

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
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
          {finalData.map((item, index) => (
            <tr
              key={index}
              className="text-gray-900 border-b bg-white"
            >
              {columns.map(({ accessor }) => (
                <td
                  key={String(accessor)}
                  className="text-nowrap px-4 py-2"
                >
                  {convertToReactNode(item[accessor])}
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

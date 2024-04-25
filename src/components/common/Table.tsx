import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

import {
  MdEditSquare,
  MdRemoveRedEye,
  MdDeleteForever,
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';

import { Buttom } from '..';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showNavigation?: boolean;
  controls?: {
    text: string;
    icon: 'edit' | 'delete' | 'view';
    action: (item: T) => void;
  }[];
}

export const Table =  <T extends object>({
  data,
  columns,
  controls = [],
  showNavigation = true,
}: ReactTableProps<T>) => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

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
      <div className="w-full flex items-center justify-between gap-2 px-6 py-4">
        <input type="text" placeholder="Buscar..." />
      </div>
      <table className="w-full text-sm text-left rtl:text-right">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-xs text-white uppercase bg-sky-800"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className="text-nowrap px-4 py-2 cursor-pointer"
                  {...{
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())
                  }
                  {{
                    asc: '🔼',
                    desc: '🔽',
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
              {controls.length > 0 && (
                <th key="controls-head" scope="col" className="text-center text-nowrap px-4 py-2">
                  Acciones
                </th>
              )}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="text-gray-900 border-b bg-white">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-nowrap px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              {controls.length > 0 && (
                <td key="controls-body" className="flex gap-2 px-4 py-2">
                  {controls.map(({ text, icon, action }) => (
                    <Buttom
                      key={text}
                      customClass={`flex items-center gap-2 ${getStyle(icon)}`}
                      onClick={() => action(row.original)}
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
      {showNavigation ? (
        <div className="w-full flex items-center justify-between gap-2 px-6 py-4">
          <select
            className='w-28 rounded border p-1 focus:outline-none focus:ring-1 focus:ring-sky-800'
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>

          <div className='flex gap-1'>
            <div className="min-w-24 flex items-center justify-between gap-1 cursor-default">
              <span>Página</span>
              <strong>
                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </strong>
            </div>
            <button
              className="rounded border p-1 cursor-pointer"
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.setPageIndex(0)}
            >
              <MdKeyboardDoubleArrowLeft size={20} />
            </button>
            <button
              className="rounded border p-1 cursor-pointer"
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              <MdKeyboardArrowLeft size={20} />
            </button>
            <button
              className="rounded border p-1 cursor-pointer"
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              <MdOutlineKeyboardArrowRight size={20} />
            </button>
            <button
              className="rounded border p-1 cursor-pointer"
              disabled={!table.getCanNextPage()}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            >
              <MdOutlineKeyboardDoubleArrowRight size={20} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

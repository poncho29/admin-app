import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

import {
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight
} from 'react-icons/md';

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showNavigation?: boolean;
}

export const Table =  <T extends object>({
  data,
  columns,
  showNavigation = true
}: ReactTableProps<T>) => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-xs text-white uppercase bg-sky-800">
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" className="text-nowrap px-6 py-4">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="text-gray-900 border-b bg-white">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-nowrap px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showNavigation ? (
        <div className="w-full flex items-center gap-2 pl-6 py-4">
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
          <div className="min-w-24 flex items-center justify-between gap-1 cursor-default">
            <span>Página</span>
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>
          </div>
          <div className="min-w-[148px] flex items-center justify-between gap-1 cursor-default">
            | Ir a la página:
            <input
              type="number"
              min={table.getState().pagination.pageIndex}
              max={table.getPageCount()}
              className="w-10 rounded border p-1 focus:outline-none focus:ring-1 focus:ring-sky-800"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={({ target }) => {
                if (Number(target.value) < 0) return;
                const page = target.value ? Number(target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
            />
          </div>
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
        </div>
      ) : null}
    </div>
  );
};

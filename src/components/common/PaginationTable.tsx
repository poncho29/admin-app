import { 
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight 
} from "react-icons/md";

interface Props {
  page: number;
  totalPages: number;
  pageSize: number;
  onChangePage: (e: number) => void;
  onChangePageSize: (e: number) => void;
}

export const PaginationTable = ({
  page,
  totalPages,
  pageSize,
  onChangePage,
  onChangePageSize
}: Props) => {
  return (
    <div className="w-full flex items-center justify-between gap-2 px-6 py-4">
    <select
      className='w-28 rounded border p-1 focus:outline-none focus:ring-1 focus:ring-sky-800'
      value={pageSize}
      onChange={(e) => onChangePageSize(Number(e.target.value))}
    >
      {[5, 10, 20, 30, 40, 50].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          Mostrar {pageSize}
        </option>
      ))}
    </select>

    <div className='flex gap-1'>
      <div className="min-w-24 flex items-center justify-between gap-1 cursor-default">
        <span>Página</span>
        <strong>
          { page } of { totalPages }
        </strong>
      </div>
      <button
        disabled={page === 1}
        className={`rounded border p-1 cursor-pointer ${page === 1 && 'bg-slate-200'}`}
        onClick={() => onChangePage(1)}
      >
        <MdKeyboardDoubleArrowLeft
          size={20}
          color={`${page === 1 ? '#ccc' : '#000'}`}
        />
      </button>
      <button
        disabled={page === 1}
        className={`rounded border p-1 cursor-pointer ${page === 1 && 'bg-slate-200'}`}
        onClick={() => onChangePage(page - 1)}
      >
        <MdKeyboardArrowLeft
          size={20}
          color={`${page === 1 ? '#ccc' : '#000'}`}  
        />
      </button>
      <button
        disabled={page === totalPages}
        className={`rounded border p-1 cursor-pointer ${page === totalPages && 'bg-slate-200'}`}
        onClick={() => onChangePage(page + 1)}
      >
        <MdOutlineKeyboardArrowRight
          size={20}
          color={`${page === totalPages ? '#ccc' : '#000'}`}
        />
      </button>
      <button
        disabled={page === totalPages}
        className={`rounded border p-1 cursor-pointer ${page === totalPages && 'bg-slate-200'}`}
        onClick={() => onChangePage(totalPages)}
      >
        <MdOutlineKeyboardDoubleArrowRight
          size={20}
          color={`${page === totalPages ? '#ccc' : '#000'}`}
        />
      </button>
    </div>
  </div>
  )
}

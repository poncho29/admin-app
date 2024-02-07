import { RiMenuFill } from "react-icons/ri";

interface Props {
  showSidebar: boolean;
  onShowSidebar: (e: boolean) => void;
}

export const SidebarHeader = ({ showSidebar, onShowSidebar }: Props) => {
  return (
    <div
      className={`
        sticky top-0 right-0 w-full flex items-center py-3 bg-sky-800
        ${showSidebar ? 'justify-between' : 'justify-center'}
      `}
    >
      {showSidebar && (
        <span className="block w-4/5 text-2xl text-start text-slate-200 font-medium uppercase">
          Vase Admin
        </span>
      )}
      <RiMenuFill
        color="#FFF"
        size={24} className="cursor-pointer"
        onClick={() => onShowSidebar(!showSidebar)}
      />
    </div>
  )
}

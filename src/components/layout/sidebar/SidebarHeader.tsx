import { RiMenuFill } from "react-icons/ri";

import Logo from '../../../assets/images/logo.png';

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
        <img
          src={Logo}
          alt="logo teleprompter"
          className="w-4/5 object-cover"
        />
      )}
      <RiMenuFill
        color="#FFF"
        size={24} className="cursor-pointer"
        onClick={() => onShowSidebar(!showSidebar)}
      />
    </div>
  )
}

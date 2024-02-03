import { useNavigate } from "react-router-dom";

import { RiLogoutBoxFill } from "react-icons/ri";

interface Props {
  showSidebar: boolean;
}

export const SidebarLogout = ({ showSidebar }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('teleprompterToken');
    localStorage.removeItem('TelepromterUser');

    navigate('/auth/login');
  }

  return (
    <button
      className={`
        w-full h-10 min-h-10 flex items-center gap-2 px-4 rounded-lg hover:bg-sky-500/50
        ${!showSidebar && 'justify-center'}
      `}
      onClick={handleLogout}
    >
      <RiLogoutBoxFill color="#FFF" size={24} />
      {showSidebar && (
        <span className="block w-full text-start text-slate-200 font-medium">Salir</span>
      )}
    </button>
  )
}

import { useNavigate } from "react-router-dom";

import { useClickOutside } from "../../hooks";

import { FaCircleUser } from "react-icons/fa6";

export const AccountMenu = () => {
  const navigate = useNavigate();

  const { ref, isOpen, handleOpen } = useClickOutside<HTMLUListElement>();

  const handleLogout = () => {
    localStorage.removeItem('teleprompterToken');
    localStorage.removeItem('TelepromterUser');

    navigate('/auth/login');
  }

  return (
    <div className="relative w-8 h-8 rounded-full cursor-pointer">
      <div onClick={handleOpen}>
        <FaCircleUser
          size={32}
        />
      </div>

      {isOpen && (
        <ul
          ref={ref}
          className="absolute right-0 w-40 p-2 mt-2 rounded-lg z-50 bg-white
          shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <li className="rounded-lg hover:bg-gray-100">
            <span
              className="block w-full py-2 px-2"
              onClick={(e) => {
                navigate('/dashboard/profile');
                handleOpen(e)
              }}
            >
              Perfil
            </span>
          </li>
          <li className="rounded-lg hover:bg-gray-100">
            <span
              className="block w-full py-2 px-2 text-start"
              onClick={handleLogout}
            >
              Salir
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

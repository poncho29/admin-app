import { ReactNode } from "react";

import { NavItem } from "./NavItem";

import { FaBoxesStacked, FaStore, FaUsers } from "react-icons/fa6";

interface Props {
  showSidebar: boolean;
}

interface IRoute {
  to: string;
  end?: boolean;
  text: string;
  icon: ReactNode;
}

const routes: IRoute[] = [
  { to: '/dashboard', text: 'Tiendas', end: true, icon: <FaStore color="#FFF" size={24} /> },
  { to: '/dashboard/users', text: 'Usuarios', end: true, icon: <FaUsers color="#FFF" size={24} /> },  
  { to: '/dashboard/products', text: 'Productos', end: true, icon: <FaBoxesStacked color="#FFF" size={24} /> }
];

export const Navbar = ({ showSidebar }: Props) => {
  return (
    <nav className="w-full flex flex-col flex-grow mb-4">
      {routes.map((route) => (
        <NavItem key={route.to} {...route} showSidebar={showSidebar} />
      ))}
    </nav>
  )
}

import { ReactNode } from "react";

import { NavItem } from "../../common/NavItem";

import { GoHomeFill } from "react-icons/go";

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
  { to: '/dashboard', text: 'Home', end: true, icon: <GoHomeFill color="#FFF" size={24} /> }
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

import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const WrapperLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('teleprompterToken');

    if (!token && location.pathname === '/') return navigate('/auth/login', { replace: true });

    if (token && location.pathname === '/') {
      navigate('/dashboard', { replace: true })
    }

  }, [location.pathname, navigate]);

  return (
    <Outlet />
  );
};

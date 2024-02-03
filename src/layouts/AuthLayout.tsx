import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const AuthLayout = () => {
  const location = useLocation();

  const [minHeight, setMinHeight] = useState('458px');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/auth/register') {
      setMinHeight('640px');
    } else {
      setMinHeight('458px');
    }

  }, [location.pathname]);

  return (
    <div className="w-full flex h-screen">
      <div className={`hidden w-1/2  min-h-[${minHeight}] bg-banner-auth bg-no-repeat bg-cover md:block`}></div>

      <div className={`w-full min-h-[${minHeight}] flex flex-col items-center justify-center p-4 overflow-y-auto md:w-1/2`}>
        <h1 className="text-lg text-center mb-12 uppercase font-semibold md:text-2xl">
          <span className="text-3xl md:text-5xl">Welcome To</span><br />My Teleprompter
        </h1>

        <Outlet />
      </div>
    </div>
  );
};


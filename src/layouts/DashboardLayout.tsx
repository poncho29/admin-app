import { Outlet } from "react-router-dom";

import { AccountMenu, Sidebar } from "../components";

export const DashboardLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[auto,1fr]">
      <Sidebar />

      <main className="w-full overflow-y-auto">
        <section className="sticky top-0 w-auto h-16 flex items-center justify-end px-6 bg-slate-200">
          {/* <BreadCrumb /> */}

          <AccountMenu />
        </section>

        <section className="h-content m-6">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

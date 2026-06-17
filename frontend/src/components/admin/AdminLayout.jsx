import {
  useState,
} from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileAdminDrawer from "./MobileAdminDrawer";

const AdminLayout = ({
  children,
}) => {

  const [drawerOpen,
    setDrawerOpen] =
    useState(false);

  return (
    <div
      className="
      min-h-screen
      flex
      bg-[#0B1120]
      "
    >

      <Sidebar />

      <MobileAdminDrawer
        open={drawerOpen}
        setOpen={
          setDrawerOpen
        }
      />

      <div className="flex-1">

        <Topbar
          setDrawerOpen={
            setDrawerOpen
          }
        />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;
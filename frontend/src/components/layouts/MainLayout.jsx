import { useState } from "react";

import Navbar from "../layout/Navbar";
import MobileDrawer from "../layout/MobileDrawer";
import Footer from "../layout/Footer";

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0B1120] min-h-screen">

      <Navbar setOpen={setOpen} />

      <MobileDrawer
        open={open}
        setOpen={setOpen}
      />

      <main className="pt-20">
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;
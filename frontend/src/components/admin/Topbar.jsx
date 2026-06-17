import {
  useState,
} from "react";

import {
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  useAuth,
} from "../../context/AuthContext";

import {
  useNavigate,
} from "react-router-dom";

const Topbar = ({
  setDrawerOpen,
}) => {

  const navigate =
    useNavigate();

  const { admin, logout } =
    useAuth();

  const [open, setOpen] =
    useState(false);

  const handleLogout =
    () => {

      logout();

      navigate(
        "/admin/login"
      );
    };

  return (
    <div
      className="
      h-20
      border-b
      border-gray-800
      flex
      items-center
      justify-between
      px-6
      "
    >

      <div
        className="
        flex
        items-center
        gap-4
        "
      >

        <button
          onClick={() =>
            setDrawerOpen(
              true
            )
          }
          className="
          lg:hidden
          text-white
          "
        >
          <FaBars />
        </button>

        <div>

          <h1
            className="
            text-white
            text-2xl
            font-bold
            "
          >
            FabLab Admin
          </h1>

          <p className="text-gray-400">
            Command Center
          </p>

        </div>

      </div>

      <div className="relative">

        <button
          onClick={() =>
            setOpen(!open)
          }
          className="
          text-white
          bg-[#111827]
          px-4
          py-2
          rounded-xl
          "
        >
          {admin?.name}
        </button>

        {open && (
          <div
            className="
            absolute
            right-0
            mt-3
            bg-[#111827]
            border
            border-gray-700
            rounded-xl
            overflow-hidden
            "
          >

            <button
              onClick={
                handleLogout
              }
              className="
              flex
              items-center
              gap-2
              px-4
              py-3
              text-red-400
              "
            >
              <FaSignOutAlt />

              Logout

            </button>

          </div>
        )}

      </div>

    </div>
  );
};

export default Topbar;
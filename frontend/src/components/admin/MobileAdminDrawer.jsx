import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaTimes,
} from "react-icons/fa";

const links = [
  {
    name: "Dashboard",
    path: "/admin",
  },
  {
    name: "Labs",
    path: "/admin/labs",
  },
  {
    name: "Projects",
    path: "/admin/projects",
  },
  {
    name: "Team",
    path: "/admin/team",
  },
  {
    name: "Videos",
    path: "/admin/videos",
  },
  {
    name: "Messages",
    path: "/admin/messages",
  },
  {
    name: "Settings",
    path: "/admin/settings",
  },
];

const MobileAdminDrawer = ({
  open,
  setOpen,
}) => {

  const location =
    useLocation();

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      bg-black/60
      lg:hidden
      "
    >
      <div
        className="
        w-72
        h-full
        bg-[#111827]
        p-6
        "
      >

        <div
          className="
          flex
          justify-between
          items-center
          mb-8
          "
        >
          <h2
            className="
            text-white
            text-xl
            font-bold
            "
          >
            FabLab Admin
          </h2>

          <button
            onClick={() =>
              setOpen(false)
            }
            className="text-white"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-2">

          {links.map(
            (link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() =>
                  setOpen(false)
                }
                className={`
                block
                px-4
                py-3
                rounded-xl
                ${
                  location.pathname ===
                  link.path
                    ? "bg-green-700 text-white"
                    : "text-gray-300"
                }
                `}
              >
                {link.name}
              </Link>
            )
          )}

        </div>

      </div>
    </div>
  );
};

export default MobileAdminDrawer;
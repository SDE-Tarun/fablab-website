import {
  Link,
  useLocation,
} from "react-router-dom";

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

const Sidebar = () => {

  const location =
    useLocation();

  return (
    <aside
      className="
      hidden
      lg:flex
      flex-col
      w-72
      bg-[#111827]
      border-r
      border-gray-800
      "
    >

      <div
        className="
        p-6
        border-b
        border-gray-800
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          FabLab
        </h2>

        <p
          className="
          text-green-400
          text-sm
          "
        >
          Army Command Panel
        </p>

      </div>

      <div
        className="
        flex-1
        p-4
        space-y-2
        "
      >

        {links.map(
          (link) => (

            <Link
              key={link.path}
              to={link.path}
              className={`
              block
              px-4
              py-3
              rounded-xl
              transition
              ${
                location.pathname ===
                link.path
                  ? "bg-green-700 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }
              `}
            >
              {link.name}
            </Link>

          )
        )}

      </div>

      <div
        className="
        p-5
        border-t
        border-gray-800
        "
      >

        <div
          className="
          bg-[#0B1120]
          rounded-xl
          p-4
          "
        >
          <p className="text-white">
            System Status
          </p>

          <p
            className="
            text-green-400
            text-sm
            "
          >
            Operational
          </p>
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "../../constants/navigation";

const MobileDrawer = ({
  open,
  setOpen
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute right-0 top-0 h-full w-72 bg-[#111827]">

        <button
          className="p-6 text-white"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </button>

        <div className="flex flex-col p-6 gap-6">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-white"
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
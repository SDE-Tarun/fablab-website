import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { NAV_LINKS } from "../../constants/navigation";

const Navbar = ({ setOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          <Link
            to="/"
            className="text-white text-2xl font-bold"
          >
            FabLab
          </Link>

          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <FaBars size={24} />
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
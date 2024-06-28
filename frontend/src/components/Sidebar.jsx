import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
      overflow-y-auto border-r bg-glass"
    >
      <nav className="h-full flex flex-col gap-6">
        <Link to="/" className="flex flex-col items-center">
          <img className="h-8 mb-2" src="/github.svg" alt="Github Logo" />
          <div className="w-full border-t border-gray-700 my-2"></div>
        </Link>

        <Link
          to="/"
          className="p-1.5 flex flex-col items-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
        >
          <IoHomeSharp size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <div className="w-full border-t border-gray-700 my-2"></div>

        {authUser && (
          <div className="flex flex-col items-center">
            <Link
              to="/likes"
              className="p-1.5 flex flex-col items-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
            >
              <FaHeart size={22} />
              <span className="text-xs mt-1">Likes</span>
            </Link>

            <Link
              to="/explore"
              className="p-1.5 flex flex-col items-center transition-colors duration-200 rounded-lg hover:bg-gray-800 mt-3"
            >
              <MdOutlineExplore size={25} />
              <span className="text-xs mt-1">Explore</span>
            </Link>
          </div>
        )}

        {!authUser && (
          <>
            <Link
              to="/login"
              className="p-1.5 flex flex-col items-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
            >
              <PiSignInBold size={25} />
              <span className="text-xs mt-1">Login</span>
            </Link>
            <div className="w-full border-t border-gray-700 my-2"></div>
            <Link
              to="/signup"
              className="p-1.5 flex flex-col items-center transition-colors duration-200 rounded-lg hover:bg-gray-800 mt-3"
            >
              <MdEditDocument size={25} />
              <span className="text-xs mt-1">Sign Up</span>
            </Link>
            <div className="w-full border-t border-gray-700 my-2"></div>
          </>
        )}

        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <div className="w-full border-t border-gray-700 my-2"></div>
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;

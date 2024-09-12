import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { useContext } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { loggedIn, logout } = useContext(AuthContext);
  console.log(loggedIn);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="fixed top-4 left-0 w-[94%] h-[12vh] flex items-center justify-between px-4 z-50 bg-[#fbfdfc] rounded-[15px] mx-[3%]">
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src="/alum-logo.png"
            alt="Alumnia Logo"
            className="h-[2rem] mr-2"
          />
        </Link>
        <div className="hidden lg:flex flex-1 justify-center ">
          <nav
            className="flex space-x-28 items-center "
            style={{ color: "#008E50" }}
          >
            <Link
              to="/"
              className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibkjhghghgold tracking-wide"
            >
              Home
            </Link>
            <Link
              to="/resources"
              className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
            >
              Resources
            </Link>{" "}
            <Link
              to="/events"
              className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
            >
              Events
            </Link>
            <Link
              to="/all-alumni"
              className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
            >
              Alumni
            </Link>
            <Link
              to="/all-student"
              className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
            >
              Students
            </Link>
          </nav>
        </div>
        <div className="hidden lg:flex items-center">
          {loggedIn ? (
            <Link
              to="/signup"
              className="bg-[#008E50] hover:bg-[#256e3e] text-white py-2 px-4 rounded-[10px] cursor-pointer font-semibold tracking-wide"
              onClick={logout}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-[#008E50] hover:bg-[#256e3e] text-white py-2 px-4 rounded-[10px] cursor-pointer font-semibold tracking-wide"
            >
              Login
            </Link>
          )}
        </div>
        <div className="lg:hidden flex items-center" onClick={toggleNav}>
          <svg
            className="h-6 w-6 text-[#2b2b2b] cursor-pointer transition-colors duration-300 hover:text-[#1f6237]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: navOpen ? "#1f6237" : "#008E50" }} // Dynamically change color on open/close
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {navOpen && (
        <div className="fixed top-[12vh] right-0 z-50 bg-[#d4e4df] w-full h-screen lg:hidden ">
          <ul
            className="flex flex-col items-center justify-center space-y-8 mt-32"
            style={{ color: "#008E50" }}
          >
            <li>
              <Link
                to="/"
                onClick={toggleNav}
                className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                onClick={toggleNav}
                className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                onClick={toggleNav}
                className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
              >
                Events
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/alumni-details"
                className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
              >
                Alumni
              </Link>
            </li>
            <li>
              <Link
                to="/all-student"
                className="hover:text-[#1f6237] text-[#2b2b2b] cursor-pointer font-semibold tracking-wide"
              >
                Students
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <Link
                  to="/signup"
                  className="bg-[#008E50] hover:bg-[#256e3e] text-white py-2 px-4 rounded-[10px] cursor-pointer font-semibold tracking-wide"
                  onClick={logout}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="bg-[#008E50] hover:bg-[#256e3e] text-white py-2 px-4 rounded-[10px] cursor-pointer font-semibold tracking-wide"
                >
                  Signup/Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;

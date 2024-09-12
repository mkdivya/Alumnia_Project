import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-gray-100 mt-8">
      <div className="w-full max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-Conthrax font-semibold text-black"
          >
            <h1 className="text-[#308e50] font-conthrax font-semibold text-[1.25rem] lg:text-[2rem]">
              ALUMNIA
            </h1>
          </Link>
          <div className="flex space-x-8">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#308e50] hover:text-[#1f6237] font-semibold tracking-wide"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-[#308e50] hover:text-[#1f6237] font-semibold tracking-wide"
                >
                  Faq&apos;s
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-[#308e50] hover:text-[#1f6237] font-semibold tracking-wide"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-[#308e50] hover:text-[#1f6237] font-semibold tracking-wide"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#308e50] hover:text-[#1f6237] font-semibold tracking-wide"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#308e50] hover:text-[#1f6237] font-semibold tracking-wide"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center border-t border-gray-300 pt-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 text-center lg:text-left">
              <p className="text-sm font-normal">
                &copy; 2024 Alumni - All Rights Reserved.
              </p>
              <div>
                <Link to="/privacy" className="text-sm hover:underline mr-8">
                  Privacy policy
                </Link>
                <Link to="/terms" className="text-sm hover:underline">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

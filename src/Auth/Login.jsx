import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Header from "../components/Header";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { usermail, password, setUsermail, setPassword, login } =
    useContext(AuthContext);
  // const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Regular expression for validating an email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(usermail)) {
      setEmailError("Please enter a valid email.");
      return;
    }
    setEmailError(""); // Clear previous error if any

    try {
      await login();
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center bg-[#edf3f1]">
        <div className="bg-white  rounded-[15px] flex flex-col items-center p-6 w-full max-w-md mx-4">
          <h1 className="text-[#308e50] font-conthrax font-semibold text-[1.25rem] lg:text-[2rem] mb-5">
            ALUMNIA
          </h1>

          <div className="flex justify-between w-[60%] mb-6">
            <div className="p-2 w-1/2 text-center cursor-pointer">
              <Link to="/signup" className="font-medium text-[#686868]">
                Sign Up
              </Link>
            </div>
            <div className="bg-[#308e50] hover:bg-[#1f6237] rounded-[6px] text-white font-medium p-2 w-1/2 text-center cursor-pointer">
              <Link to="/login">Login</Link>
            </div>
          </div>

          <form
            className="w-full flex flex-col items-center"
            onSubmit={handleLogin}
          >
            <input
              className={`bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%] ${
                emailError ? "border-red-500" : ""
              }`}
              id="Mail address"
              type="email"
              placeholder="Mail address"
              value={usermail}
              onChange={(e) => {
                setUsermail(e.target.value);
                setEmailError("");
              }}
              required
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-[-15px] mb-[10px] ml-[-40%]">
                {emailError}
              </p>
            )}

            <input
              className="bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="bg-[#308e50] hover:bg-[#1f6237] text-white p-3 rounded-lg mt-2 transition duration-200 w-[60%] lg:w-[50%] text-center"
              type="submit"
            >
              Login
            </button>
            <div className="mt-4">
              <Link
                to="/forget-password"
                className="text-[#686868] hover:text-[#686868] font-semibold "
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} showProgressBar />
    </>
  );
}

export default Login;

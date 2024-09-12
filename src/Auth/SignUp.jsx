import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const {
    username,
    usermail,
    password,
    otp,
    setUsername,
    setUsermail,
    setPassword,
    setOtp,
    otpSent,
    signup,
    sendRegisterOTP,
  } = useContext(AuthContext);
  // const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      await sendRegisterOTP();
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup();
    } catch (error) {
      toast.error("Signup failed. Please try again.");
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

          {!otpSent ? (
            <>
              <div className="flex justify-between w-[60%] mb-6">
                <div className="bg-[#308e50] hover:bg-[#1f6237] rounded-[6px] text-white font-medium p-2 w-1/2 mr-2 text-center cursor-pointer">
                  <Link to="/signup">Sign Up</Link>
                </div>
                <div className="p-2 w-1/2 text-center cursor-pointer">
                  <Link to="/login" className="font-medium">
                    Login
                  </Link>
                </div>
              </div>
              <form
                className="w-full flex flex-col items-center"
                onSubmit={handleSendOTP}
              >
                <input
                  className="bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                  id="Name"
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  className="bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                  id="Mail address"
                  type="email"
                  placeholder="Mail address"
                  value={usermail}
                  onChange={(e) => setUsermail(e.target.value)}
                  required
                />

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
                  className="bg-[#308e50] hover:bg-[#1f6237] text-white p-3 rounded-lg mt-2  transition duration-200 w-[60%] lg:w-[50%] text-center"
                  type="submit"
                >
                  Send OTP
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="w-full bg-gray-100 p-3 rounded-lg text-center mb-6">
                <p>A six-digit OTP has been sent to your mail</p>
              </div>
              <form
                className="w-full flex flex-col items-center"
                onSubmit={handleSignup}
              >
                <input
                  className="bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[80%]"
                  id="otp"
                  type="text"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  className="bg-[#027AFF] text-white p-3 rounded-lg w-[40%] mt-2 hover:bg-blue-700 transition duration-200 text-center"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} showProgressBar />
    </>
  );
}

export default Signup;

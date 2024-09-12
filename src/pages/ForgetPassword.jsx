import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgetPassword() {
  const { sendForgetPasswordOTP, changePassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [stage, setStage] = useState("sendOTP");
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      setLoading(true); // Set loading state
      const response = await sendForgetPasswordOTP(email);
      if (response.success) {
        toast.success("OTP sent to your email.");
        setStage("verifyOTP");
      } else {
        toast.error(response.message);
        if (response.message === "Email not registered") {
          setEmail("");
        }
      }
    } catch (error) {
      toast.error("Error sending OTP. Please try again.");
      console.error("Error sending OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      setLoading(true);
      const response = await changePassword(email, otp, newPassword);
      if (response.success) {
        toast.success("Password changed successfully!", {
          autoClose: 2000,
          onClose: () => navigate("/login"),
        });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Please enter vaild details.");
      console.error("Error changing password:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center bg-[#d4e4df]">
        <div className="bg-white  rounded-[15px] flex flex-col items-center p-6 w-full max-w-md mx-4">
          {stage === "sendOTP" && (
            <>
              <h1 className="text-[#308e50] font-poppins font-semibold text-[1.25rem] lg:text-[2rem] mb-5">
                Forget Password
              </h1>
              <input
                className="bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className={`bg-[#308e50] hover:bg-[#1f6237] text-white p-3 rounded-lg mt-2 transition duration-200 w-[60%] lg:w-[50%] text-center ${
                  loading ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={handleSendOTP}
                disabled={loading} // Disable button during loading
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </>
          )}

          {stage === "verifyOTP" && (
            <>
              <h1 className="text-[#308e50] font-poppins font-semibold text-[1.25rem] lg:text-[2rem] mb-5">
                Reset Password
              </h1>
              <input
                className="bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <input
                className="bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                className="bg-transparent border-2 border-[#c4c5c5] p-3 rounded-lg mb-4 w-[95%] lg:w-[90%]"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                className={`bg-[#308e50] hover:bg-[#1f6237] text-white p-3 rounded-lg mt-2 transition duration-200 w-[60%] lg:w-[50%] text-center ${
                  loading ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={handleChangePassword}
                disabled={loading} // Disable button during loading
              >
                {loading ? "Changing Password..." : "Change Password"}
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer /> {/* Ensure ToastContainer is rendered */}
    </>
  );
}

export default ForgetPassword;

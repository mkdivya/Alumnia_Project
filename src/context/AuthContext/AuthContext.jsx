import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUsermail(storedEmail);
      setLoggedIn(true);
    }
  }, []);

  const login = async () => {
    const data = { email: usermail, password };
    try {
      const response = await axios.post(
        "http://localhost:5454/user/login",
        data
      );

      console.log("Backend response:", response.data);

      if (response.data.success) {
        const { email } = response.data.result;
        setUsermail(email);
        setLoggedIn(true);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userType", response.data.result.usertype);
        toast.success("Login successful!", {
          autoClose: 2000,
          onClose: () => navigate("/"),
        });
      } else {
        toast.error("Login failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const signup = async () => {
    const data = { name: username, email: usermail, password, otp };
    try {
      const response = await axios.post(
        "http://localhost:5454/user/register",
        data
      );

      console.log("Backend response:", response.data);

      if (response.data.success) {
        const { email } = response.data.result;
        setUsermail(email);
        setLoggedIn(true);
        localStorage.setItem("userEmail", email);
        navigate("/who");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  const sendRegisterOTP = async () => {
    const data = { email: usermail };
    try {
      const response = await axios.post(
        "http://localhost:5454/user/send-register-otp",
        data
      );

      console.log("Backend response:", response.data);

      if (response.data.success) {
        setOtpSent(true);
        toast.success("OTP sent to your email.");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during OTP sending:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    setUsermail("");
    setPassword("");
    setOtp("");
    setOtpSent(false);
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userType");
  };

  const sendForgetPasswordOTP = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:5454/user/send-forget-password-otp",
        { email }
      );

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return error.response.data; // Return the error response data
      }
      console.error("Error during OTP sending:", error);
      throw error;
    }
  };

  const changePassword = async (email, otp, newPassword) => {
    try {
      const response = await axios.put(
        "http://localhost:5454/user/change-password",
        { email, otp, password: newPassword }
      );
      return response.data;
    } catch (error) {
      console.error("Error during password change:", error);
      throw error;
    }
  };

  const authContextValue = {
    loggedIn,
    username,
    usermail,
    password,
    otp,
    otpSent,
    setUsername,
    setUsermail,
    setPassword,
    setOtp,
    login,
    signup,
    sendRegisterOTP,
    logout,
    sendForgetPasswordOTP,
    changePassword,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;

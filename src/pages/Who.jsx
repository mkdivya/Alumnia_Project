import { useContext, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

function Who() {
  const { usermail } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const userType = localStorage.getItem("userType");

    if (userType === "Alumni" || userType === "Student") {
      navigate("/");
    }
  }, [navigate]);

  const handleUserType = async (type) => {
    if (!type) {
      console.error("User type not selected.");
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:5454/user/update-usertype",
        {
          email: usermail,
          userType: type,
        }
      );

      if (response.data.success) {
        console.log("User type updated successfully.");

        localStorage.setItem("userType", type);

        switch (type) {
          case "Alumni":
            navigate("/alumni");
            break;
          case "Student":
            navigate("/student");
            break;
          case "Others":
            navigate("/");
            break;
        }
      } else {
        console.error("Failed to update user type:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating user type:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <div className="flex justify-center items-center h-full">
        <div className=" bg-[#d4e4df] rounded-xl p-6 max-w-lg w-full">
          <h1 className="text-3xl font-extrabold tracking-widest uppercase mb-4 text-center">
            Alumnia
          </h1>
          <p className="font-bold text-lg text-center mb-4">You are</p>
          <div className="grid grid-cols-1 gap-4">
            <button
              className="select-type bg-black rounded-lg p-4 cursor-pointer text-white font-semibold text-center"
              onClick={() => handleUserType("Alumni")}
            >
              Alumni
            </button>
            <button
              className="select-type bg-black rounded-lg p-4 cursor-pointer text-white font-semibold text-center"
              onClick={() => handleUserType("Student")}
            >
              Student
            </button>
            <button
              className="select-type bg-[#308e50] rounded-lg p-4 cursor-pointer text-white font-semibold text-center"
              onClick={() => handleUserType("Others")}
            >
              Others
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Who;

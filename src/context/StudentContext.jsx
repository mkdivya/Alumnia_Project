// src/context/StudentContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentDetails, setStudentDetails] = useState({
    photo: "",
    dob: "",
    gender: "",
    contact: {
      phoneNumber: "",
      github: "",
      linkedin: "",
    },
    companyName: "",
    role: "",
    locationOfCompany: {
      address: "",
      state: "",
      country: "",
      pinCode: "",
    },
  });

  const [user, setUser] = useState({
    email: "",
    name: "",
  });

  const [allStudentDetails, setAllStudentDetails] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // Track selected student
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    // Fetch existing student details if userEmail exists
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5454/api/get-student-details?email=${userEmail}`
        );
        if (response.data.success) {
          setStudentDetails(response.data.data.studentDetails);
          setUser(response.data.data.user);
        }
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    if (userEmail) {
      fetchStudentDetails();
    }
  }, [userEmail]);

  const fetchAllStudentDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5454/api/all-student");
      if (response.data.success) {
        setAllStudentDetails(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching all student details:", error);
    }
  };

  // Function to fetch details of a specific student by email
  const fetchStudentDetailsByEmail = async (email) => {
    console.log(email);
    try {
      const response = await axios.get(
        `http://localhost:5454/api/get-student-details?email=${email}`
      );
      if (response.data.success) {
        setStudentDetails(response.data.data.studentDetails);
        setUser(response.data.data.user);
        setSelectedStudent(email); // Set the selected student's email
        navigate("/student-details");
      }
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        studentDetails,
        setStudentDetails,
        user,
        allStudentDetails,
        fetchAllStudentDetails,
        fetchStudentDetailsByEmail,
        selectedStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StudentContext;

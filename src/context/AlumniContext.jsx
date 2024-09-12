// src/context/AlumniContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AlumniContext = createContext();

export const AlumniProvider = ({ children }) => {
  const [alumniDetails, setAlumniDetails] = useState({
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

  const [allAlumniDetails, setAllAlumniDetails] = useState([]);
  const [selectedAlumni, setSelectedAlumni] = useState(null); // Track selected alumni
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    // Fetch existing alumni details if userEmail exists
    const fetchAlumniDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5454/api/get-alumni-details?email=${userEmail}`
        );
        if (response.data.success) {
          setAlumniDetails(response.data.data.alumniDetails);
          setUser(response.data.data.user);
        }
      } catch (error) {
        console.error("Error fetching alumni details:", error);
      }
    };

    if (userEmail) {
      fetchAlumniDetails();
    }
  }, [userEmail]);

  const fetchAllAlumniDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5454/api/all-alumni");
      if (response.data.success) {
        setAllAlumniDetails(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching all alumni details:", error);
    }
  };

  // Function to fetch details of a specific alumni by email
  const fetchAlumniDetailsByEmail = async (email) => {
    console.log(email);
    try {
      const response = await axios.get(
        `http://localhost:5454/api/get-alumni-details?email=${email}`
      );
      if (response.data.success) {
        setAlumniDetails(response.data.data.alumniDetails);
        setUser(response.data.data.user);
        setSelectedAlumni(email); // Set the selected alumni's email
        navigate("/alumni-details");
      }
    } catch (error) {
      console.error("Error fetching alumni details:", error);
    }
  };

  return (
    <AlumniContext.Provider
      value={{
        alumniDetails,
        setAlumniDetails,
        user,
        allAlumniDetails,
        fetchAllAlumniDetails,
        fetchAlumniDetailsByEmail,
        selectedAlumni,
      }}
    >
      {children}
    </AlumniContext.Provider>
  );
};

AlumniProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlumniContext;

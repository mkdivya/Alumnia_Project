// src/pages/Student.jsx
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../../components/Header.jsx";
import StudentContext from "../../context/StudentContext";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const { studentDetails, setStudentDetails } = useContext(StudentContext);
  const navigate = useNavigate();
  const [tempPhoto, setTempPhoto] = useState(
    studentDetails.photo || "/default-profile.png"
  );

  useEffect(() => {
    setTempPhoto(studentDetails.photo || "/default-profile.png");
  }, [studentDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setStudentDetails((prevDetails) => ({
        ...prevDetails,
        [section]: {
          ...prevDetails[section],
          [field]: value,
        },
      }));
    } else {
      setStudentDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setTempPhoto("/default-profile.png"); // Set to the default photo path
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      photo: tempPhoto,
    }));
    try {
      const userEmail = localStorage.getItem("userEmail");

      const response = await axios.put(
        "http://localhost:5454/api/update-student-details",
        {
          email: userEmail,
          studentDetails: {
            ...studentDetails,
            photo: tempPhoto,
          },
        }
      );

      if (response.data.success) {
        toast.success("Student details updated successfully");
        navigate("/student-details");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating student details:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-[#edf3f1] shadow-md rounded-md mt-[10vh]">
        <h1 className="text-2xl font-bold mb-6 text-[#008E50] ">
          Enter Your Details
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-6 relative">
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            <label htmlFor="photo-upload" className="relative cursor-pointer">
              <img
                src={tempPhoto || "/default-profile.png"}
                alt="Student"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#008E50]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">
                  Edit Photo
                </span>
              </div>
            </label>
            <button
              type="button"
              onClick={handleRemovePhoto}
              className="mt-2 text-sm text-[#008E50] hover:underline focus:outline-none"
            >
              Remove Photo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                Date of Birth
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="DD/MM/YYYY"
                name="dob"
                value={studentDetails.dob || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                Gender
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Gender"
                name="gender"
                value={studentDetails.gender || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                Phone Number
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
                name="contact.phoneNumber"
                value={studentDetails.contact?.phoneNumber || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                GitHub
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="GitHub"
                name="contact.github"
                value={studentDetails.contact?.github || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                LinkedIn
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="LinkedIn"
                name="contact.linkedin"
                value={studentDetails.contact?.linkedin || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                Company Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Company Name"
                name="companyName"
                value={studentDetails.companyName || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                Role
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Role"
                name="role"
                value={studentDetails.role || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Address"
                name="locationOfCompany.address"
                value={studentDetails.locationOfCompany?.address || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                State
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="State"
                name="locationOfCompany.state"
                value={studentDetails.locationOfCompany?.state || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                Country
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Country"
                name="locationOfCompany.country"
                value={studentDetails.locationOfCompany?.country || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md mb-4">
              <label className="block text-sm font-medium text-[#008E50] mb-2">
                Pin Code
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Pin Code"
                name="locationOfCompany.pinCode"
                value={studentDetails.locationOfCompany?.pinCode || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-[#008E50] text-white py-2 px-6 rounded-md shadow-md hover:bg-[#106e49] focus:outline-none focus:ring-2 focus:ring-[#008E50]"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Student;

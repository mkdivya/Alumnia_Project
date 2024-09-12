// src/pages/Alumni.jsx
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../components/Header";
import AlumniContext from "../context/AlumniContext.jsx";
import { useNavigate } from "react-router-dom";

const Alumni = () => {
  const { alumniDetails, setAlumniDetails } = useContext(AlumniContext);
  const navigate = useNavigate();
  const [tempPhoto, setTempPhoto] = useState(
    alumniDetails.photo || "/default-profile.png"
  );

  useEffect(() => {
    setTempPhoto(alumniDetails.photo || "/default-profile.png");
  }, [alumniDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setAlumniDetails((prevDetails) => ({
        ...prevDetails,
        [section]: {
          ...prevDetails[section],
          [field]: value,
        },
      }));
    } else {
      setAlumniDetails((prevDetails) => ({
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
    setAlumniDetails((prevDetails) => ({
      ...prevDetails,
      photo: tempPhoto,
    }));
    try {
      const userEmail = localStorage.getItem("userEmail");

      const response = await axios.put(
        "http://localhost:5454/api/update-alumni-details",
        {
          email: userEmail,
          alumniDetails: {
            ...alumniDetails,
            photo: tempPhoto,
          },
        }
      );

      if (response.data.success) {
        toast.success("Alumni details updated successfully");
        navigate("/alumni-details");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating alumni details:", error);
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
                alt="Alumni"
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
                value={alumniDetails.dob || ""}
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
                value={alumniDetails.gender || ""}
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
                value={alumniDetails.contact?.phoneNumber || ""}
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
                value={alumniDetails.contact?.github || ""}
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
                value={alumniDetails.contact?.linkedin || ""}
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
                value={alumniDetails.companyName || ""}
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
                value={alumniDetails.role || ""}
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
                value={alumniDetails.locationOfCompany?.address || ""}
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
                value={alumniDetails.locationOfCompany?.state || ""}
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
                value={alumniDetails.locationOfCompany?.country || ""}
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
                value={alumniDetails.locationOfCompany?.pinCode || ""}
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

export default Alumni;

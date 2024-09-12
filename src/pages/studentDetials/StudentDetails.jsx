// src/pages/Studentdetails.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import StudentContext from "../../context/StudentContext";
import Header from "../../components/Header";

function Studentdetails() {
  const { studentDetails, user } = useContext(StudentContext);
  const isOwnProfile = user.email === localStorage.getItem("userEmail");

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 bg-[#edf3f1] shadow-md rounded-md lg:mt-[13vh] mt-[10vh]">
        {isOwnProfile && (
          <Link
            to="/student"
            className="text-[#008E50] hover:underline mt-4 block text-right"
          >
            Edit Profile
          </Link>
        )}
        <h2 className="text-2xl font-bold mb-6 text-[#008E50]">
          Student Details
        </h2>
        <div className="flex flex-col items-center mb-6">
          <img
            src={studentDetails.photo}
            alt="Student"
            className="w-36 h-36 rounded-full object-cover border-4 border-[#008E50]"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold text-[#008E50]">{user.name}</h3>
            <p className="text-[#202020]">{user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              DOB:
            </label>
            <p className="mt-1 text-[#202020]">{studentDetails.dob}</p>
            {/* /////////////////////////////////////////// */}
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              Gender:
            </label>
            <p className="mt-1 text-[#202020]">{studentDetails.gender}</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              Phone Number:
            </label>
            <p className="mt-1 text-[#202020]">
              {studentDetails.contact.phoneNumber}
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              Github:
            </label>
            <p className="mt-1 text-[#202020]">
              {studentDetails.contact.github}
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              LinkedIn:
            </label>
            <p className="mt-1 text-[#202020]">
              {studentDetails.contact.linkedin}
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              Company Name:
            </label>
            <p className="mt-1 text-[#202020]">{studentDetails.companyName}</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              Role:
            </label>
            <p className="mt-1 text-[#202020]">{studentDetails.role}</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              Address:
            </label>
            <p className="mt-1 text-[#202020]">
              {studentDetails.locationOfCompany.address}
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              State:
            </label>
            <p className="mt-1 text-[#202020]">
              {studentDetails.locationOfCompany.state}
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              Country:
            </label>
            <p className="mt-1 text-[#202020]">
              {studentDetails.locationOfCompany.country}
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <label className="block text-sm font-medium text-[#008E50]">
              Pin Code:
            </label>
            <p className="mt-1 text-[#202020]">
              {studentDetails.locationOfCompany.pinCode}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Studentdetails;

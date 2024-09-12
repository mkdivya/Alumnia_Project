// src/components/AllAlumni.jsx
import { useContext, useEffect } from "react";
import AlumniContext from "../context/AlumniContext";
import Header from "../components/Header";

const AllAlumni = () => {
  const {
    allAlumniDetails,
    fetchAllAlumniDetails,
    fetchAlumniDetailsByEmail,
    selectedAlumni,
  } = useContext(AlumniContext);

  useEffect(() => {
    // Fetch all alumni details initially
    fetchAllAlumniDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (email) => {
    fetchAlumniDetailsByEmail(email);
  };

  return (
    <>
    <Header/>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 cursor-pointer mt-[15vh] mx-[10vh]">
        {allAlumniDetails.map(
          (alumni, index) =>
            alumni.alumniDetails && (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl ${
                  alumni.user.email === selectedAlumni
                    ? "border-l-4 border-green-600"
                    : "border-l-4 border-transparent"
                }`}
                onClick={() => handleClick(alumni.user.email)}
              >
                <div className="relative h-[35vh] overflow-hidden">
                  <img
                    src={alumni.alumniDetails.photo || "/placeholder.png"}
                    alt={alumni.user.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Name:
                    </span>
                    <span className="text-sm text-gray-900">
                      {alumni.user.name}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Email:
                    </span>
                    <span className="text-sm text-gray-900">
                      {alumni.user.email}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Company:
                    </span>
                    <span className="text-sm text-gray-900">
                      {alumni.alumniDetails.companyName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Role:
                    </span>
                    <span className="text-sm text-gray-900">
                      {alumni.alumniDetails.role}
                    </span>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default AllAlumni;

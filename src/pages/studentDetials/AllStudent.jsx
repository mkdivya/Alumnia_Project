// src/components/AllStudent.jsx
import { useContext, useEffect } from "react";
import StudentContext from "../../context/StudentContext";
import Header from "../../components/Header";

const AllStudent = () => {
  const {
    allStudentDetails,
    fetchAllStudentDetails,
    fetchStudentDetailsByEmail,
    selectedStudent,
  } = useContext(StudentContext);

  useEffect(() => {
    // Fetch all student details initially
    fetchAllStudentDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (email) => {
    fetchStudentDetailsByEmail(email);
  };

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 cursor-pointer mt-[15vh] mx-[10vh]">
        {allStudentDetails.map(
          (student, index) =>
            student.studentDetails && (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl ${
                  student.user.email === selectedStudent
                    ? "border-l-4 border-green-600"
                    : "border-l-4 border-transparent"
                }`}
                onClick={() => handleClick(student.user.email)}
              >
                <div className="relative h-[35vh] overflow-hidden">
                  <img
                    src={student.studentDetails.photo || "/placeholder.png"}
                    alt={student.user.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Name:
                    </span>
                    <span className="text-sm text-gray-900">
                      {student.user.name}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Email:
                    </span>
                    <span className="text-sm text-gray-900">
                      {student.user.email}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Company:
                    </span>
                    <span className="text-sm text-gray-900">
                      {student.studentDetails.companyName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Role:
                    </span>
                    <span className="text-sm text-gray-900">
                      {student.studentDetails.role}
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

export default AllStudent;

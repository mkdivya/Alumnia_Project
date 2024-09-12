import { useState } from "react";
import useResource from "../context/UseResource"; // Ensure this path is correct

const MyResources = () => {
  const { myResources, fetchResourceById } = useResource();
  const [loadingResource, setLoadingResource] = useState(null);

  const handleViewDetails = async (id) => {
    setLoadingResource(id);
    await fetchResourceById(id);
    setLoadingResource(null);
  };

  return (
    <div className="container mx-auto p-6">
      <ul className="space-y-4">
        {myResources.map((resource) => (
          <li
            key={resource._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col md:flex-row justify-between"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-700 mb-2">{resource.description}</p>
              <div className="flex items-center mb-2">
                <img
                  src={resource.uploadedBy.alumniDetailsId.photo} // Assuming this path is correct
                  alt="avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-medium">{resource.uploadedBy.name}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(resource.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 flex items-center mt-2 md:mt-0 md:ml-4">
              <button
                className="bg-[#008E50] text-white py-2 px-4 rounded-lg"
                onClick={() => handleViewDetails(resource._id)}
                disabled={loadingResource === resource._id}
              >
                {loadingResource === resource._id
                  ? "Loading..."
                  : "View Details"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyResources;

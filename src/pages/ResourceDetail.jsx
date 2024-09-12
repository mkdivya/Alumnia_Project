import { useContext, useEffect } from "react";
import Header from "../components/Header";
import ResourceContext from "../context/ResourceContext";
import { useParams } from "react-router-dom";

function ResourceDetail() {
  const { selectedResource, fetchResourceById } = useContext(ResourceContext);
  const { id } = useParams();

  useEffect(() => {
    if (!selectedResource || selectedResource._id !== id) {
      fetchResourceById(id);
    }
  }, [id, selectedResource, fetchResourceById]);

  if (!selectedResource) {
    return (
      <>
        <Header />
        <div className="container mx-auto p-6 mt-[15vh]">
          <p className="text-center text-gray-600 text-lg">Loading...</p>
        </div>
      </>
    );
  }

  const tags = selectedResource?.tags || [];

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 mt-[30vh] bg-white shadow-md rounded-lg max-w-4xl">
        <div className="flex items-center mb-6 justify-center">
          {selectedResource?.photo && (
            <img
              src={selectedResource.photo}
              alt={`${selectedResource.title} Thumbnail`}
              className="w-16 h-16 rounded-full mr-4"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold mb-1 text-center">
              {selectedResource?.title}
            </h1>
            {selectedResource?.url && (
              <p className="text-gray-700 text-sm text-center">
                URL:{" "}
                <a
                  href={selectedResource.url}
                  className="text-blue-500 underline"
                  aria-label={`Link to ${selectedResource.title}`}
                >
                  {selectedResource.url}
                </a>
              </p>
            )}
          </div>
        </div>
        {selectedResource?.description && (
          <p className="text-gray-700 mb-4 text-center">
            {selectedResource.description}
          </p>
        )}
        {selectedResource?.file && (
          <div className="text-center mb-4">
            <a
              href={selectedResource.file}
              download
              className="text-blue-500 underline"
            >
              Download File
            </a>
          </div>
        )}
        <div className="flex flex-col items-center mb-4">
          {selectedResource?.uploadedBy?.name && (
            <p className="font-medium mb-2">
              Uploaded by: {selectedResource.uploadedBy.name}
            </p>
          )}
          {selectedResource?.createdAt && (
            <p className="font-medium">
              Created At:{" "}
              {new Date(selectedResource.createdAt).toLocaleString()}
            </p>
          )}
        </div>
        <div className="flex flex-wrap justify-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResourceDetail;

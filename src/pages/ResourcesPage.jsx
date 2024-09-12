import { useState } from 'react';
import MyResources from "../components/MyResources.jsx";
import ResourceList from "../components/ResourceList.jsx";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const ResourcesPage = () => {
  const navigate = useNavigate();
  const userType = localStorage.getItem("userType");
  const [activeTab, setActiveTab] = useState("all");

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <>
      <Header />

      <div className="container mx-auto p-4 mt-[15vh]">
        <h1 className="text-2xl font-bold mb-4">Resources</h1>

        {/* <div className="flex mb-6">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 p-2 rounded-l w-full"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r">
            Search
          </button>
        </div> */}

        {userType === "Alumni" && (
          <button
            className="bg-[#008e50] text-white py-2 px-4 rounded-[5px] hover:bg-[#006337] transition duration-300 mb-6"
            onClick={handleClick}
          >
            Upload Resource
          </button>
        )}

        <div className="flex space-x-4 mb-4 border-b-2 border-gray-200">
          <button
            className={`${
              activeTab === "all" ? "font-bold border-b-2 border-black" : ""
            } pb-2`}
            onClick={() => setActiveTab("all")}
          >
            All Resources
          </button>
          {userType === "Alumni" && (
            <button
              className={`${
                activeTab === "my" ? "font-bold border-b-2 border-black" : ""
              } pb-2`}
              onClick={() => setActiveTab("my")}
            >
              Resources Uploaded by me
            </button>
          )}
        </div>

        <div className="mt-4">
          {activeTab === "all" && <ResourceList />}
          {activeTab === "my" && <MyResources />}
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;

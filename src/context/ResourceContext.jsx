import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ResourceContext = createContext();
const userEmail = localStorage.getItem("userEmail");

export const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useState([]);
  const [myResources, setMyResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null); // Track selected resource
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data } = await axios.get("http://localhost:5454/r/resources");
        setResources(data);
      } catch (err) {
        console.error("Error fetching resources:", err);
      }
    };

    const fetchMyResources = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5454/r/my-resources?email=${userEmail}`
        );
        setMyResources(data);
      } catch (err) {
        console.error("Error fetching my resources:", err);
      }
    };

    fetchResources();
    fetchMyResources();
  }, []);

  const fetchResourceById = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5454/r/resource/${id}`
      );
      setSelectedResource(data);
      navigate(`/resources/${id}`);
    } catch (err) {
      console.error("Error fetching resource by ID:", err);
    }
  };

  return (
    <ResourceContext.Provider
      value={{
        resources,
        setResources,
        myResources,
        setMyResources,
        fetchResourceById,
        selectedResource,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
};

ResourceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResourceContext;

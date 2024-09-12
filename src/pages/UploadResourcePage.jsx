import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ResourceForm from "../components/ResourceForm";

const UploadResourcePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("userEmail");
    const requestData = {
      title,
      description,
      url,
      file,
      keywords,
      email: userEmail,
    };

    try {
      console.log(requestData);
      await axios.post("http://localhost:5454/r/resource", requestData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Resource added successfully!");
      navigate("/resources");
    } catch (error) {
      console.error("Error adding resource:", error);
      toast.error("Failed to add resource. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ResourceForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        url={url}
        setUrl={setUrl}
        file={file}
        setFile={setFile}
        keywords={keywords}
        setKeywords={setKeywords}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default UploadResourcePage;

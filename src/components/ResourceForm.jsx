import PropTypes from "prop-types";
// import { useState } from "react";

const ResourceForm = ({
  title,
  setTitle,
  description,
  setDescription,
  url,
  setUrl,
  file,
  setFile,
  keywords,
  setKeywords,
  handleSubmit,
}) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleKeywordClick = (keyword) => {
    if (keywords.includes(keyword)) {
      // Remove keyword if already selected
      setKeywords(keywords.filter((kw) => kw !== keyword));
    } else {
      // Add keyword if not already selected
      setKeywords([...keywords, keyword]);
    }
  };

  const handleKeywordRemove = (keyword) => {
    setKeywords(keywords.filter((kw) => kw !== keyword));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Upload resource</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Resource Title*
        </label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none focus:ring-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Description*
        </label>
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none focus:ring-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">URL</label>
        <input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none focus:ring-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Upload (jpeg,png,pdf,doc,csv. Max 10mb)
        </label>
        <div className="relative w-full h-12 border border-[#202020] rounded-md">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full h-full opacity-0 absolute z-10 cursor-pointer"
          />
          <div className="w-full h-full flex items-center justify-center text-[#202020] cursor-pointer">
            Browse Item
          </div>
        </div>
        {file && (
          <div className="mt-2 flex items-center">
            <span className="text-gray-700">{file.name}</span>
            <button
              type="button"
              onClick={() => setFile(null)}
              className="ml-2 text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 4a1 1 0 011-1h6a1 1 0 011 1v1h4a1 1 0 110 2h-1v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7H1a1 1 0 110-2h4V4zm2 3a1 1 0 112 0v7a1 1 0 11-2 0V7zm4 0a1 1 0 112 0v7a1 1 0 11-2 0V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          Select all related Keywords
        </label>
        <div className="flex flex-wrap gap-6 mb-4">
          {[
            "Internship",
            "Project",
            "Job",
            "Study Material",
            "Event",
            "Others",
          ].map((keyword) => (
            <button
              type="button"
              key={keyword}
              className={`px-3 py-2 border ${
                keywords.includes(keyword)
                  ? "bg-[#008E50] text-white"
                  : "border-[#008E50] text-[#202020]"
              } rounded-md hover:bg-[#008E50] hover:text-white focus:outline-none`}
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
      {keywords.length > 0 && (
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Selected Keywords:</label>
          <div className="flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 bg-[#008E50] text-white rounded-md flex items-center"
              >
                {kw}{" "}
                <button
                  type="button"
                  onClick={() => handleKeywordRemove(kw)}
                  className="ml-1 text-xs font-bold"
                >
                  x
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-[#008E50] text-white py-2 rounded-md hover:bg-[#006337] focus:outline-none focus:ring-1"
      >
        Upload Resource
      </button>
    </form>
  );
};

ResourceForm.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  file: PropTypes.object,
  setFile: PropTypes.func.isRequired,
  keywords: PropTypes.array.isRequired,
  setKeywords: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ResourceForm;

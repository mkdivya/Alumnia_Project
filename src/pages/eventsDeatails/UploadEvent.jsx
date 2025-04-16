import { useRef } from "react";
import Header from "../../components/Header";
import PropTypes from "prop-types";

const UploadEvent = ({
  name,
  setName,
  desc,
  setDesc,
  photo,
  setPhoto,
  eventDate,
  setEventDate,
  eventTime,
  setEventTime,
  handleSubmit,
}) => {
  const fileInputRef = useRef(null); // ✅ Ref created

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setPhoto(null); // Clear state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // ✅ Clear file input
    }
  };

  return (
    <>
      <Header />
      <div className="bg-[#edf3f1] min-h-screen flex justify-center items-center mt-[10vh]">
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Upload Event</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name of the Event*
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">
                Description of the Event*
              </label>
              <textarea
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                Date of the Event*
              </label>
              <input
                id="date"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
                Time of the Event*
              </label>
              <input
                id="time"
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
                Upload poster (jpeg, png, max 10MB)
              </label>
              <div className="relative w-full h-12 border border-[#202020] rounded-md">
                <input
                  type="file"
                  id="photo"
                  accept="image/jpeg, image/png"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="w-full h-full opacity-0 absolute z-10 cursor-pointer"
                />
                <div className="w-full h-full flex items-center justify-center text-[#202020] cursor-pointer">
                  Browse Item
                </div>
              </div>

              {/* Show selected image file with remove option */}
              {photo && (
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-gray-700 text-sm">{photo.name}</span>
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#008E50] text-white py-2 rounded-md hover:bg-[#006337] focus:outline-none"
            >
              Upload Event
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

UploadEvent.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  setDesc: PropTypes.func.isRequired,
  photo: PropTypes.object,
  setPhoto: PropTypes.func.isRequired,
  eventDate: PropTypes.string.isRequired,
  setEventDate: PropTypes.func.isRequired,
  eventTime: PropTypes.string.isRequired,
  setEventTime: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UploadEvent;

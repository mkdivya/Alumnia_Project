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
  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <>
      <Header />
      <div className="bg-[#edf3f1] min-h-screen flex justify-center items-center mt-[10vh] ">
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Upload Event</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name of the Event*
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <label
                htmlFor="desc"
                className="block text-gray-700 font-bold mb-2"
              >
                Description of the Event*
              </label>
              <textarea
                id="desc"
                placeholder="Description of event"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-gray-700 font-bold mb-2"
              >
                Date of the Event*
              </label>
              <input
                id="date"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-gray-700 font-bold mb-2"
              >
                Time of the Event*
              </label>
              <input
                id="time"
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#202020] rounded-md focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-gray-700 font-bold mb-2"
              >
                Upload photos/poster of the event (jpeg, png. Max 10mb)
              </label>
              <div className="relative w-full h-12 border border-[#202020] rounded-md">
                <input
                  type="file"
                  id="photo"
                  onChange={handleFileChange}
                  className="w-full h-full opacity-0 absolute z-10 cursor-pointer"
                />
                <div className="w-full h-full flex items-center justify-center text-[#202020] cursor-pointer">
                  Browse Item
                </div>
              </div>
              {photo && (
                <div className="mt-2 flex items-center">
                  <span className="text-gray-700">{photo.name}</span>
                  <button
                    type="button"
                    onClick={() => setPhoto(null)}
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

            <button
              type="submit"
              className="w-full bg-[#008E50] text-white py-2 rounded-md hover:bg-[#006337] focus:outline-none focus:ring-1"
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

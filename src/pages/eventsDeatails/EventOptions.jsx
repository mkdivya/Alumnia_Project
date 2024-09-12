import Header from "/src/components/Header";
import { Link } from "react-router-dom";

function EventOptions() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#edf3f1] flex flex-col items-center justify-center py-12">
        <h1 className="text-3xl font-bold mb-8">Event Options</h1>
        <div className="grid gap-6">
          <Link
            to="/alumniEvents"
            className="flex items-center justify-center w-[40vh] h-[10vh] bg-white border-2 border-[#008E50] rounded-2xl shadow-md hover:bg-[#008E50] hover:text-white transition duration-300"
          >
            <span className="text-xl font-semibold">Alumni Events</span>
          </Link>
          <Link
            to="/collegeEvents"
            className="flex items-center justify-center w-[40vh] h-[10vh] bg-white border-2 border-[#008E50] rounded-2xl shadow-md hover:bg-[#008E50] hover:text-white transition duration-300"
          >
            <span className="text-xl font-semibold">College Events</span>
          </Link>
          <Link
            to="/previousEvents"
            className="flex items-center justify-center w-[40vh] h-[10vh] bg-white border-2 border-[#008E50] rounded-2xl shadow-md hover:bg-[#008E50] hover:text-white transition duration-300"
          >
            <span className="text-xl font-semibold">Previous Events</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EventOptions;

import { Link } from "react-router-dom";
// import Header from "../components/Header";

function Err() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#d4e4df]">
        <h1 className="text-[5rem] tracking-[0.5rem] font-[900] text-[#308e50] font-conthrax">
          404
        </h1>
        <p className="text-[3rem] font-semibold text-[#202020] uppercase font-poppins">Page not found</p>
        <Link to="/" className="cursor-pointer mt-8">
          <div
            className="hover:bg-[#1f6237] border-2 bg-[#308e50] text-white font-poppins rounded-[10px] p-4 animate-bounce "
          >
            <p>Back to home</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Err;

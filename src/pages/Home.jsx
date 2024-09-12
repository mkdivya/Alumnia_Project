import Faq from "./Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />

      <div className="relative flex justify-center items-center min-h-screen bg-[#edf3f1]">
        <div className="absolute top-[17vh] lg:top-[13vh] h-[90vh] w-[98vw] flex flex-col justify-evenly lg:flex-row lg:items-center">
          <div className="lg:w-[40vw] mx-4 text-center lg:text-left">
            <p className="text-[#3d3d3d] font-poppins font-re text-[2rem] tracking-[8%] leading-[100%]">
              Welcome to
            </p>
            <h1 className="text-[#308f51] font-conthrax font-semibold text-[3rem] lg:text-[5rem] tracking-[8%]">
              ALUMNIA
            </h1>
            <p className="w-[90vw] lg:w-[33vw] mx-auto lg:mx-0 font-poppins font-weight: 600; tracking-[8%] leading-[150%] text-[22px] text-[#4d4d4d]">
              Join our vibrant community of students, alumni, and institution
              members to share resources, stay updated on events, and build
              lasting connections.
            </p>
            <div className="mt-6">
              <Link
                to="/signup"
                className="bg-[#308e50] text-white px-4 py-2 rounded-lg mr-6"
              >
                Register Now
              </Link>
              <Link
                to="/"
                className="bg-[#d4e4df] text-[#1e1e1e] px-4 py-2 rounded-lg"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-3 gap-2 w-[90vw] lg:w-[40vw] h-[50vh] lg:h-[70vh] self-center my-8">
            <img
              src="/1st.png"
              alt="Graduation hats"
              className="object-cover w-full h-full rounded-lg"
            />
            <img
              src="/2nd.png"
              alt="Student with books"
              className="object-cover w-full h-full rounded-lg row-span-2"
            />
            <img
              src="/3rd.png"
              alt="Graduates applauding"
              className="object-cover w-full h-full rounded-lg row-span-2"
            />
            <img
              src="/4th.png"
              alt="Institution building"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <Faq />
      <Footer />
    </>
  );
}

export default Home;

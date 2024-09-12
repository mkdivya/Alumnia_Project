import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";
import { Link } from "react-router-dom";

function AlumniEvents() {
  return (
    <>
      <Header />
      <div className="bg-[#edf3f1] min-h-screen py-12 px-6 mt-[10vh]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#008E50] mb-4">
            Alumni Events
          </h1>
          <Link
            to="/uploadEvent"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#008E50] text-white rounded-md shadow-md hover:bg-[#006337] transition duration-300"
          >
            <span className="text-lg font-semibold">Upload an Event</span>
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-6 md:grid-cols-1">
          <Carousel
            images={[
              "https://meriise-events.vercel.app/assets/events24/os1.jpg",
            ]}
            title="Orientation Session "
            description="The Orientation for Mentee Institutions under the Mentor-Mentee Scheme 2023 was conducted by the Ministry of Education's Institution Innovation Council (MCE IIC) on February 20th, 2024. The orientation aimed to familiarize the mentee institutions with the MCE IIC and to provide a roadmap for fostering innovation and collaboration within the education ecosystem."
            date="2nd August, 2024 10:00"
          />
        </div>
      </div>
    </>
  );
}

export default AlumniEvents;

import Header from "/src/components/Header";
import Carousel from "/src/components/Carousel";
function PreviousEvents() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-[#008E50] mb-4 text-center mt-[15vh]">
        Previous Events
      </h1>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4 mb-40 ">
        <Carousel
          images={[
            "https://meriise-events.vercel.app/assets/events24/eviv.jpg",
          ]}
          title="Industry Visit to Elecnovo"
          description="The primary objective of the visit was to expose students to the cutting-edge technologies that power electric vehicles. Students gained a comprehensive view of EV technology and its practical applications."
          date="5th June, 2024"
        />

        <Carousel
          images={["https://meriise-events.vercel.app/assets/events24/dw3.jpg"]}
          title="The Design Workshop "
          description="Participants gained proficiency in Adobe Photoshop and Illustrator, allowing them to create graphic designs, and design user interfaces for websites and applications. Additionally, they learnt advanced techniques in graphic design and video editing using Adobe After Effects, enhancing their ability to create visually appealing content across different platforms."
          date="31st May – 2nd June, 2024"
        />

        
      </div>
    </>
  );
}

export default PreviousEvents;

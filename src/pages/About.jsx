import Header from "../components/Header";

const AboutPage = () => {
  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto p-6 bg-[#edf3f1] shadow-md rounded-md lg:mt-[20vh] mt-[10vh]">
        <h2 className="text-3xl font-bold text-[#008E50] mb-6">
          About Alumnia
        </h2>
        <p className="text-[#202020] leading-relaxed text-justify">
          Alumnia is a vibrant and inclusive alumni association group dedicated
          to fostering lifelong connections among graduates from our esteemed
          institution. Our mission is to create a strong network of alumni who
          can support each other professionally and personally, share knowledge,
          and contribute to the growth and success of our community.
        </p>

        <p className="text-[#202020] leading-relaxed mt-4 text-justify">
          At Alumnia, we believe in the power of relationships and the value of
          giving back. Whether you are looking to reconnect with old friends,
          expand your professional network, or make a difference in the lives of
          current students, Alumnia offers a platform for meaningful engagement
          and collaboration.
        </p>

        <p className="text-[#202020] leading-relaxed mt-4">
          Join us in our journey to build a thriving alumni community. Together,
          we can achieve great things!
        </p>
      </div>
    </>
  );
};

export default AboutPage;

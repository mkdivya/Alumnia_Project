import Header from "../components/Header";

const ContactPage = () => {
  return (
    <div className="bg-[#edf3f1]">
      <Header />

      <div className="max-w-4xl mx-auto p-6 shadow-md rounded-md lg:mt-[13vh] mt-[10vh]">
        <h2 className="text-3xl font-bold text-[#008E50] mb-6">Contact Us</h2>

        <div className="mb-6 p-4 rounded-md">
          <h3 className="text-2xl font-bold text-[#008E50] mb-2">
            General Inquiries
          </h3>
          <ul className="list-disc list-inside text-[#202020]">
            <li>
              Email:{" "}
              <a href="mailto:alumni_email@30.com" className="text-[#008E50]">
                alumni_inquiries@30.com
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 bg-[#edf3f1] p-4 rounded-md">
          <h3 className="text-2xl font-bold text-[#008E50] mb-2">
            Alumni Relations
          </h3>
          <ul className="list-disc list-inside text-[#202020]">
            <li>
              Email:{" "}
              <a href="mailto:alumni_email@30.com" className="text-[#008E50]">
                alumni_relations@30.com
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 bg-[#edf3f1] p-4 rounded-md">
          <h3 className="text-2xl font-bold text-[#008E50] mb-2">
            Student Support
          </h3>
          <ul className="list-disc list-inside text-[#202020]">
            <li>
              Email:{" "}
              <a href="mailto:alumni_email@30.com" className="text-[#008E50]">
                alumni_support@30.com
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 bg-[#edf3f1] p-4 rounded-md">
          <h3 className="text-2xl font-bold text-[#008E50] mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-[#008E50] hover:underline">
              Facebook
            </a>
            <a href="#" className="text-[#008E50] hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-[#008E50] hover:underline">
              Twitter
            </a>
            <a href="#" className="text-[#008E50] hover:underline">
              Instagram
            </a>
          </div>
        </div>

        <div className="bg-[#edf3f1] p-4 rounded-md">
          <h3 className="text-2xl font-bold text-[#008E50] mb-2">
            Office Hours
          </h3>
          <p className="text-[#202020]">
            Monday to Friday: 9:00 AM - 5:00 PM
            <br />
            Saturday and Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

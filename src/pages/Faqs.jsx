import Accordion from "../components/Accordian";

const Faq = () => {
  return (
    <>
      <h1 className="font-bold text-3xl mt-[30vw] mb-[5vw] lg:my-[2vw] mx-[4vw]">
        FAQ&apos;S
      </h1>
      <div className="w-[98vw] flex flex-col  items-center">
        <div className="p-4 bg-[#d4e4df] rounded-lg w-[90vw] h-auto">
          <Accordion
            title="How to prepare for our placements?"
            answer="Start your preparation well in advance by focusing on both technical and soft skills. Regularly participate in coding competitions, group discussions, and attended workshops on aptitude and logical reasoning. Networking with seniors and alumni will also help you understand the current market demands."
          />
          <Accordion
            title="Can you share some tips on cracking interviews, especially technical ones?"
            answer="For technical interviews, it's essential to have a strong grasp of your core subjects. Practice coding problems regularly on platforms like LeetCode and HackerRank. Additionally, understand the basics of algorithms and data structures, as they are often a focus area. Mock interviews can also help build confidence."
          />
          <Accordion
            title="What were some challenges you faced during the placement process, and how did you overcome them?"
            answer="One of the challenges was handling rejection from initial interviews. It was tough, but I focused on learning from each experience and improving my preparation. Staying persistent and seeking feedback from interviewers helped me refine my approach."
          />
          <Accordion
            title="Can you suggest any resources or materials that were particularly helpful during your preparation?"
            answer="Yes, there are several resources that were quite helpful. For coding, websites like GeeksforGeeks and CodeSignal were invaluable. For aptitude and reasoning, books like Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal are great.Additionally, LinkedIn Learning and Coursera offer excellent courses on various topics."
          />
          <Accordion
            title="What advice would you give to someone who is unsure about their career path post-graduation?"
            answer="It's normal to feel unsure about your career path. Take time to explore different fields through internships, part-time jobs, or projects. Networking with professionals and seeking mentorship can provide clarity. It's also beneficial to identify your strengths and interests and align them with potential career options."
          />
          <Accordion
            title="What are the key skills that employers look for in fresh graduates?"
            answer="Employers often look for a combination of technical and soft skills. Technical skills include proficiency in relevant tools and technologies, while soft skills involve communication, teamwork, problem-solving, and adaptability. Demonstrating a willingness to learn and a proactive attitude are also highly valued."
          />
          <Accordion
            title="What are some common mistakes to avoid during the placement process?"
            answer="Some common mistakes include not customizing your resume for each job application, underestimating the importance of soft skills, and failing to research the company before interviews. Also, neglecting to follow up after interviews can be a missed opportunity to express continued interest and professionalism."
          />
          <Accordion
            title="What should one focus on during the final semester to enhance employability?"
            answer="During the final semester, focus on polishing your resume, practicing interview skills, and completing any pending projects. Additionally, work on enhancing your soft skills, such as communication, teamwork, and problem-solving abilities, as these are crucial for any role."
          />
          <Accordion
            title="What kind of projects did you work on that helped you during placements?"
            answer="I focused on projects that were relevant to the industry I was targeting. For instance, if you are into software development, working on full-stack development projects or contributing to open-source projects can be beneficial. These projects allowed me to demonstrate my practical skills and understanding of industry tools and technologies during interviews."
          />
          <Accordion
            title="How important are certifications, and which ones would you recommend?"
            answer="Certifications can be very important as they validate your skills and knowledge in a specific area. They can make you stand out in a competitive job market. I recommend certifications that are relevant to your industry, such as AWS, Google Cloud, or Cisco for IT, PMP for project management, and CFA for finance."
          />
          <Accordion
            title="Can you share any tips for effective resume building?"
            answer="Tailor your resume for each job application, highlighting relevant skills and experiences. Use clear and concise language, and quantify your achievements where possible. Ensure your resume is well-organized, free of errors, and visually appealing. Including a summary or objective statement can also provide a quick overview of your qualifications."
          />
          <Accordion
            title="What should one do to prepare for the first job after graduation?"
            answer="To prepare for your first job, research the company and understand your role thoroughly. Brush up on relevant skills and technologies, and be ready to learn on the job. Soft skills like communication, time management, and adaptability are also crucial. Additionally, set realistic expectations and be open to feedback and continuous improvement."
          />
        </div>
      </div>
    </>
  );
};

export default Faq;

import Resume, { ResumeProps } from '../Components/Resume2';

const App: React.FC = () => {
  const resumeData: ResumeProps = {
    personalInfo: {
      name: "Dinesh Babu",
      initial:"D",
      title: "Business Development Manager",
      summary: "Professional Business Developer with more than four years of experience in the business development processes. Involved in product testing, management, and development of new business opportunities.",
      contact: [
        { type: "email" as const, value: "jane.roe@gmail.com" },
        { type: "phone" as const, value: "202-555-0166" },
        { type: "location" as const, value: "New York, USA" },
        { type: "linkedin" as const, value: "linkedin.com/in/jane.roe" },
        { type: "skype" as const, value: "jane.roe" }
      ]
    },
    skills: [
      "SEO", "Public Speaking", "Negotiation", "Teamwork", "Decision Making",
      "Research & Strategy", "Emotional Intelligence", "Outbound Marketing",
      "Email Marketing", "Google Analytics", "Sales & Marketing", "Social Media Advertising"
    ],
    workExperience: [
      {
        title: "Business Development Manager",
        company: "AirState Solutions",
        period: "09/2014 – 06/2017",
        responsibilities: [
          "Successfully managed $2 - 3 million budget projects and successfully achieved the project scheduled goals.",
          "Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.",
          "Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels which increased the satisfaction rate from 81% to 95%.",
          "Ensured that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program."
        ]
      },
    ],
    education: [
      {
        degree: "MSc in Economics and Business Administration",
        institution: "The University of Chicago",
        period: "09/2008 – 06/2010"
      }
    ],
    organizations: [
      "American Management Association (2015 – Present)",
      "Association of Private Enterprise Education (2014 – Present)",
      "eBusiness Association (eBA) (2013 – Present)"
    ],
    languages: [
      { name: "English", proficiency: "Native or Bilingual Proficiency" },
      { name: "Spanish", proficiency: "Full Professional Proficiency" },
      { name: "French", proficiency: "Limited Working Proficiency" }
    ]
  };

  return <Resume {...resumeData} />;
};

export default App;
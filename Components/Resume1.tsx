import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faVideo, faLink } from '@fortawesome/free-solid-svg-icons';

type ContactItem = {
  type: 'email' | 'phone' | 'location' | 'linkedin' | 'skype';
  value: string;
};

type PersonalInfo = {
  name: string;
  title: string;
  summary: string;
  contact: ContactItem[];
};

type WorkExperience = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

type Education = {
  degree: string;
  institution: string;
  period: string;
};

type Language = {
  name: string;
  proficiency: string;
};

export type ResumeProps = {
  personalInfo: PersonalInfo;
  skills: string[];
  workExperience: WorkExperience[];
  education: Education[];
  organizations: string[];
  languages: Language[];
};

const Resume1: React.FC<ResumeProps> = ({
  personalInfo,
  skills,
  workExperience,
  education,
  organizations,
  languages
}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900">{personalInfo.name}</h1>
        <h2 className="text-2xl text-gray-600">{personalInfo.title}</h2>
        <p className="text-gray-700 mt-2">{personalInfo.summary}</p>
      </header>
      <div className="flex justify-center space-x-6 mb-8">
        {personalInfo.contact.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
            {getIcon(item.type)}
            <span className="text-gray-700">{item.value}</span>
          </div>
        ))}
      </div>
      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Skills</h3>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="text-gray-600 bg-gray-100 p-2 rounded-lg shadow-sm">{skill}</span>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Work Experience</h3>
        {workExperience.map((job, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-600 italic">{job.period}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              {job.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-600 italic">{edu.period}</p>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Organizations</h3>
        <div className="space-y-2">
          {organizations.map((org, index) => (
            <p key={index} className="text-gray-700">{org}</p>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Languages</h3>
        <div className="grid grid-cols-3 gap-4">
          {languages.map((lang, index) => (
            <div key={index}>
              <p className="text-gray-700 font-medium">{lang.name}</p>
              <p className="text-gray-500">{lang.proficiency}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

function getIcon(type: ContactItem['type']) {
  switch (type) {
    case 'email':
      return <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-600" />;
    case 'phone':
      return <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-gray-600" />;
    case 'location':
      return <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 text-gray-600" />;
    case 'linkedin':
      return <FontAwesomeIcon icon={faLink} className="h-5 w-5 text-gray-600" />;
    case 'skype':
      return <FontAwesomeIcon icon={faVideo} className="h-5 w-5 text-gray-600" />;
    default:
      return null;
  }
}

export default Resume1;

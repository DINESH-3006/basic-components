import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faVideo,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar, { ProficiencyLevel } from "./ProgressBar";

type ContactItem = {
  type: "email" | "phone" | "location" | "linkedin" | "skype";
  value: string;
};

type PersonalInfo = {
  name: string;
  initial: String;
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
  proficiency: ProficiencyLevel;
};

export type ResumeProps = {
  personalInfo: PersonalInfo;
  skills: string[];
  workExperience: WorkExperience[];
  education: Education[];
  organizations: string[];
  languages: Language[];
};

const Resume4: React.FC<ResumeProps> = ({
  personalInfo,
  skills,
  workExperience,
  education,
  organizations,
  languages,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3 bg-gray-800 pl-8">
          <header>
            <h1 className="font-sans text-white font-normal text-5xl tracking-[0.02em] mb-3">
              {personalInfo.name.toUpperCase()}{" "}
              {personalInfo.initial.toUpperCase()}
            </h1>
            <h1 className="text-base text-gray-400 font-normal mb-6 tracking-widest">
              {personalInfo.title.toUpperCase()}
            </h1>
            <hr className="border-x-white w-10/12 border-[0.075em] mb-6"></hr>
          </header>

          {/* Profile */}
          <section className="mb-8">
            <h3 className="text-xl font-normal text-gray-400 mb-4 tracking-[0.15em]">
              ABOUT ME
            </h3>
            <p className="justify-text w-full text-white leading-relaxed mb-8">
              {personalInfo.summary}
            </p>
            <hr className="border-x-white w-10/12 border-[0.075em] mb-6"></hr>
          </section>

          {/* Skills  */}
          <section className="mb-8">
            <h3 className="text-xl font-normal text-gray-400 mb-4 tracking-[0.15em]">
              SKILLS
            </h3>
            <div className="mb-10">
              <ul className="list-disc list-inside text-white">
                {skills.map((skill, index) => (
                  <li key={index} className="mb-1">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-x-white w-10/12 border-[0.075em] mb-6"></hr>
          </section>

          {/* contact */}
          <section>
            <h3 className="text-xl font-normal text-gray-400 mb-4 tracking-[0.15em]">
              CONTACT
            </h3>
            <div className="flex flex-col items-start">
              {personalInfo.contact.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 mb-1">
                  {getIcon(item.type)}
                  <span className="text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8 mt-9">
          {/* workExperience */}
          <section className="mb-8">
            <div className="bg-yellow-500 w-5/6 pl-2">
              <h3 className="text-xl font-bold text-gray-700 tracking-[0.15em] mb-4">
                WORK EXPERIENCE
              </h3>
            </div>
            {workExperience.map((job, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h4>
                <p className="text-gray-500 font-medium">{job.company}</p>
                <p className="text-gray-600 italic">{job.period}</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                  {job.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* //Languages */}
          <section>
            <div className="bg-yellow-500 w-5/6 pl-2">
              <h3 className="text-xl font-bold text-gray-700 tracking-[0.15em] mb-4">
                LANGUAGES
              </h3>
            </div>
            <div className="grid grid-rows-3 gap-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex flex-row justify-between">
                  <p className="text-gray-500 font-medium">{lang.name}</p>
                  <ProgressBar proficiency={lang.proficiency} />
                </div>
              ))}
            </div>
          </section>

          {/* Education  */}
          <section>
            <div className="bg-yellow-500 w-5/6 pl-2">
              <h3 className="text-xl font-bold text-gray-700 tracking-[0.15em] mb-4">
                EDUCATION
              </h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="mb-2">
                <h4 className="text-gray-800 text-2xl font-semibold">
                  {edu.institution}
                </h4>
                <p className="font-semibold text-gray-600 text-sm">
                  {edu.degree}
                </p>
                <p className="text-gray-500 italic">{edu.period}</p>
              </div>
            ))}
          </section>
          {/* //Organizations */}
          <section className="mb-8">
            <div className="bg-yellow-500 w-5/6 pl-2">
              <h3 className="text-xl font-bold text-gray-700 tracking-[0.15em] mb-4">
                ORGANIZATION
              </h3>
            </div>
            <div className="space-y-2">
              {organizations.map((org, index) => (
                <p key={index} className="text-gray-900 font-semibold">
                  {org}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

function getIcon(type: ContactItem["type"]) {
  switch (type) {
    case "email":
      return (
        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-gray-400" />
      );
    case "phone":
      return (
        <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-gray-400" />
      );
    case "location":
      return (
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="h-5 w-5 text-gray-400"
        />
      );
    case "linkedin":
      return (
        <FontAwesomeIcon icon={faLink} className="h-5 w-5 text-gray-400" />
      );
    case "skype":
      return (
        <FontAwesomeIcon icon={faVideo} className="h-5 w-5 text-gray-400" />
      );
    default:
      return null;
  }
}

export default Resume4;

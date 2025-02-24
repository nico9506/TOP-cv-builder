import { ChangeEvent, useState } from "react";
import "../styles/ResumeForm.css";
import ResumePreview from "./ResumePreview";

const ResumeForm = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState([
    {
      school: "",
      titleOfStudy: "",
      dateOfStudy: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      responsibilities: "",
      dateFrom: "",
      dateUntil: "",
    },
  ]);

  const [showPreview, setShowPreview] = useState(false);

  const handleChangeGeneralInfo = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  };

  const handleChangeEducation = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setEducation(updatedEducation);
  };

  const handleChangeExperience = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    setExperience(updatedExperience);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { school: "", titleOfStudy: "", dateOfStudy: "" },
    ]);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        responsibilities: "",
        dateFrom: "",
        dateUntil: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("General Info:", generalInfo);
    // console.log("Education:", education);
    // console.log("Experience:", experience);
    setShowPreview(true);
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <h2>General Information</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={generalInfo.name}
            onChange={handleChangeGeneralInfo}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChangeGeneralInfo}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            placeholder="0000-123-456"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
            value={generalInfo.phone}
            onChange={handleChangeGeneralInfo}
          />
        </label>

        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <label>
              School Name:
              <input
                type="text"
                name="school"
                value={edu.school}
                onChange={(e) => handleChangeEducation(index, e)}
              />
            </label>
            <label>
              Title of Study:
              <input
                type="text"
                name="titleOfStudy"
                value={edu.titleOfStudy}
                onChange={(e) => handleChangeEducation(index, e)}
              />
            </label>
            <label>
              Completion date:
              <input
                type="date"
                name="dateOfStudy"
                value={edu.dateOfStudy}
                onChange={(e) => handleChangeEducation(index, e)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addEducation}>
          Add Education
        </button>

        <h2>Practical Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <label>
              Company Name:
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleChangeExperience(index, e)}
              />
            </label>
            <label>
              Position Title:
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleChangeExperience(index, e)}
              />
            </label>
            <label>
              Main Responsibilities:
              <textarea
                name="responsibilities"
                value={exp.responsibilities}
                onChange={(e) => handleChangeExperience(index, e)}
              />
            </label>
            <label>
              Date From:
              <input
                type="date"
                name="dateFrom"
                value={exp.dateFrom}
                onChange={(e) => handleChangeExperience(index, e)}
              />
            </label>
            <label>
              Date Until:
              <input
                type="date"
                name="dateUntil"
                value={exp.dateUntil}
                onChange={(e) => handleChangeExperience(index, e)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addExperience}>
          Add Experience
        </button>

        <button type="submit">Submit</button>
      </form>
      {showPreview && (
        <ResumePreview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      )}
    </div>
  );
};

export default ResumeForm;

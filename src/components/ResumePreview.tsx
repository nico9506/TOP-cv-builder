import "../styles/ResumePreview.css";

const ResumePreview = ({ generalInfo, education, experience }) => {
  return (
    <div className="resume-preview" id="resume-preview">
      <h2 className="cv-header">Curriculum Vitae</h2>
      <h3>General Information</h3>
      <p>
        <strong>Name:</strong> {generalInfo.name}
      </p>
      <p>
        <strong>Email:</strong> {generalInfo.email}
      </p>
      <p>
        <strong>Phone:</strong> {generalInfo.phone}
      </p>

      <h3>Education</h3>
      {education.length === 0 ? (
        <p>No education data submitted</p>
      ) : (
        education.map((edu, index) => (
          <div key={index}>
            <p>
              <strong>School:</strong> {edu.school}
            </p>
            <p>
              <strong>Title of Study:</strong> {edu.titleOfStudy}
            </p>
            <p>
              <strong>Completion Date:</strong> {edu.dateOfStudy}
            </p>
          </div>
        ))
      )}

      <h3>Practical Experience</h3>
      {experience.length === 0 ? (
        <p>No experience data submitted</p>
      ) : (
        experience.map((exp, index) => (
          <div key={index}>
            <p>
              <strong>Company:</strong> {exp.company}
            </p>
            <p>
              <strong>Position:</strong> {exp.position}
            </p>
            <p>
              <strong>Responsibilities:</strong> {exp.responsibilities}
            </p>
            <p>
              <strong>Date From:</strong> {exp.dateFrom}
            </p>
            <p>
              <strong>Date Until:</strong> {exp.dateUntil}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ResumePreview;

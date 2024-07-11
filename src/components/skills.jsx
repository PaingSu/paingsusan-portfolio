import React from "react";

const skills = [
  { name: "C#.NET", level: "90%" },
  { name: "C#.NET Web API", level: "90%" },
  { name: "WPF Application Development", level: "90%" },
  { name: "ReactJS", level: "85%" },
  { name: "JavaScript", level: "90%" },
  //   { name: "CSS", level: "90%" },
  //   { name: "Bootstrap", level: "85%" },
  //   { name: "JQuery", level: "70%" },
  { name: "API (SOAP/RESTful/AJAX)", level: "80%" },
  // { name: "TypeScript", level: "75%" },

  { name: "MySQL", level: "90%" },
  { name: "SQL Server", level: "90%" },
  { name: "Mongo DB", level: "70%" },
  //   { name: "MS Access", level: "65%" },
  //   { name: "MySQL Workbench", level: "75%" },
  { name: "Git", level: "90%" },
  //   { name: "Agile Methodology", level: "80%" },
  //   { name: "Problem-Solving", level: "85%" },
  //   { name: "Leadership and Management", level: "75%" },
  //   { name: "Collaboration", level: "80%" },
  //   { name: "Effective Communication", level: "85%" },
  //   { name: "Technical Expertise", level: "90%" },
  //   { name: "Jira and Confluence", level: "70%" },
  //   { name: "User Interface Design", level: "80%" },
  //   { name: "Self-Diagnostics Implementation", level: "75%" },
  //   { name: "Custom Dialog Creation", level: "70%" },
  //   { name: "Livechart Integration", level: "75%" },
  //   { name: "Data Export and Reporting", level: "85%" },
  //   { name: "Project Management", level: "80%" },
  //   { name: "Problem Solving and Troubleshooting", level: "85%" },
  //   { name: "JSON", level: "90%" },
  //   { name: "CSV", level: "80%" },
  //   { name: "XML", level: "75%" },
  //   { name: "BitBucket", level: "70%" },
  //   { name: "SonarQube", level: "75%" },
  //   { name: "Jenkins", level: "80%" },
  //   { name: "Kubernetes", level: "70%" },
  { name: "CI/CD Deployment", level: "85%" },
  { name: "TypeScript", level: "75%" },
];

export const Skills = () => {
  return (
    <section className="colorlib-skills" data-section="skills">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Specialty</span>
            <h2 className="colorlib-heading animate-box">My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <p>
              I possess a diverse skill set that spans multiple disciplines in
              software development and project management. With expertise in{" "}
              <strong>programming languages</strong> such as C#.NET, C#.NET Web
              API, WPF Application Development, ReactJS, JavaScript, CSS,
              Bootstrap, JQuery, and TypeScript, I am well-equipped to build
              robust and dynamic applications. My{" "}
              <strong>database management skills</strong> include proficiency in
              MongoDB, MySQL, SQL Server, MS Access, and MySQL Workbench,
              ensuring efficient and effective data handling.
            </p>
            <p>
              In terms of <strong>version control</strong>, I am adept at using
              Git for seamless collaboration and code management. My experience
              with <strong>methodologies and abilities</strong> such as Agile
              Methodology, problem-solving, leadership and management,
              collaboration, effective communication, and technical expertise
              allows me to deliver high-quality projects consistently.
            </p>
            <p>
              I am proficient with <strong>productivity tools</strong> like Jira
              and Confluence, which streamline project workflows and
              documentation. My <strong>UI/UX and integration skills</strong>{" "}
              cover user interface design, self-diagnostics implementation,
              custom dialog creation, Livechart integration, data export and
              reporting, project management, and troubleshooting.
            </p>
            <p>
              Additionally, I am skilled in handling various{" "}
              <strong>data formats</strong> including JSON, CSV, and XML. My
              knowledge of <strong>DevOps tools</strong> such as BitBucket,
              SonarQube, Jenkins, Kubernetes, and CI/CD ensures smooth and
              automated deployments, enhancing the efficiency and reliability of
              the development process.
            </p>
          </div>
          {skills.map((skill, index) => (
            <div
              className={`col-md-6 animate-box`}
              data-animate-effect={
                index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
              }
              key={index}
            >
              <div className="progress-wrap">
                <h3>{skill.name}</h3>
                <div className="progress">
                  <div
                    className={`progress-bar color-${(index % 6) + 1}`}
                    role="progressbar"
                    aria-valuenow={parseInt(skill.level)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skill.level }}
                  >
                    <span>{skill.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

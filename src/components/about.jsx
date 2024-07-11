import React from "react";

export const About = () => {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p>
                    <strong>Hi I am Paing Su San</strong> I am an Experienced
                    Software Engineer with over five years of expertise in
                    Software Analysis Engineering. My journey in the tech
                    industry has been marked by a passion for developing
                    scalable and efficient software solutions. I thrive in
                    collaborative environments, working seamlessly with
                    cross-functional teams to deliver high-quality results for
                    complex software systems.
                  </p>
                  <p>
                    With a goal-oriented mindset, I excel in system design,
                    problem-solving, and programming. I am always eager to take
                    on new challenges in the IT sector, where I can contribute
                    to dynamic organizations that value both personal and
                    professional growth. My mission is to make a positive impact
                    through innovative and efficient software solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="services color-1">
                  <span className="icon2">
                    <i className="icon-bulb"></i>
                  </span>
                  <h3>Software</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="services color-2">
                  <span className="icon2">
                    <i className="icon-globe-outline"></i>
                  </span>
                  <h3>Web Design</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div className="services color-3">
                  <span className="icon2">
                    <i className="icon-data"></i>
                  </span>
                  <h3>DevOps</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="services color-4">
                  <span className="icon2">
                    <i className="icon-phone3"></i>
                  </span>
                  <h3>Application</h3>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="hire">
                  <h2>
                    I am happy to know you <br />
                    that 300+ projects done successfully!
                  </h2>
                  <a href="#" className="btn-hire">
                    Hire me
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";

export const Education = () => {
  return (
    <section className="colorlib-education" data-section="education">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box">Education</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="fancy-collapse-panel">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        National University of Singapore
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-10">
                          <p>
                            Graduate Diploma in Systems Analysis, Institute of
                            Systems Science
                          </p>
                        </div>
                        <div className="col-md-2">
                          <p>2017-2018</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        University of Technology (Yadanarpon Cyber City)
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFive"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    {/* <div className="panel-body"> */}
                    <div className="col-md-10">
                      <p>
                        Bachelor of Engineering (Information Science and
                        Technology)
                      </p>
                    </div>
                    <div className="col-md-2">
                      <p>2011-2017</p>
                    </div>
                  </div>
                </div>
                {/* Add more panels as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

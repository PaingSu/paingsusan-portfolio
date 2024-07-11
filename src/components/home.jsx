import React from "react";

export const Home = () => {
  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          {/* <li style={{ backgroundImage: "url(images/ITGirl.jpg)" }}> */}
          <li>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1>
                        Hi! <br />I am Paing Su San
                      </h1>

                      <p>
                        <a className="btn btn-primary btn-learn">
                          Download CV <i className="icon-download4"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/* <li style={{ backgroundImage: "url(images/ITGirl.jpg)" }}> */}
          <li>
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>
                        I am <br />a Software Engineer
                      </h1>
                      <p>
                        <a className="btn btn-primary btn-learn">
                          View Portfolio <i className="icon-briefcase3"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

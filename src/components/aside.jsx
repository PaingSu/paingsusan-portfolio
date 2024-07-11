import React from "react";

export const Aside = () => {
  return (
    <aside
      id="colorlib-aside"
      role="complementary"
      className="border js-fullheight"
    >
      <div className="text-center">
        <div
          className="author-img"
          style={{ backgroundImage: "url(images/PaingSu_Photo.jpeg)" }}
        ></div>
        <h1 id="colorlib-logo">
          <a href="index.html">Paing Su San</a>
        </h1>
        <span className="position">
          <a href="#">Software Engineer</a>
        </span>
      </div>
      <nav id="colorlib-main-menu" role="navigation" className="navbar">
        <div id="navbar" className="collapse">
          <ul>
            <li className="active">
              <a href="#" data-nav-section="home">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="about">
                About
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="education">
                Education
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="experience">
                Experience
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="colorlib-footer">
        <p>
          <small>
            &copy; <script>document.write(new Date().getFullYear());</script>{" "}
            All rights reserved. Made with{" "}
            {/* <i className="icon-heart" aria-hidden="true"></i> */}
            💖 by Paing Su
          </small>
        </p>
        <ul>
          <li>
            <a href="#">
              <i className="icon-facebook2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-twitter2"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon-linkedin2"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

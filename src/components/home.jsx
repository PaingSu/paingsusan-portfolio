import React from "react";

export const Home = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/PaingSuSan_Resume.pdf`; // Path to the PDF resume file
    link.download = "PaingSuSan_Resume.pdf"; // Desired file name
    link.click();
  };

  const handleDownloadWord = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/PaingSuSan_Resume.docx`; // Path to the Word resume file
    link.download = "PaingSuSan_Resume.docx"; // Desired file name
    link.click();
  };

  return (
    <section id="colorlib-hero" className="home-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="intro">
              <h1>Hi! I am Paing Su San</h1>
              <h2>I am a Software Engineer</h2>
              <p>
                <button
                  onClick={handleDownloadPDF}
                  className="btn btn-primary btn-learn"
                >
                  Download Resume (PDF) <i className="icon-download4"></i>
                </button>
                &nbsp; {/* Add space between buttons */}
                <button
                  onClick={handleDownloadWord}
                  className="btn btn-primary btn-learn"
                >
                  Download Resume (Word) <i className="icon-download4"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

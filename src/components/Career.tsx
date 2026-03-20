import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
          <br /> & Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master's in Computer Application</h4>
                <h5>MET Institute Of Engineering, Nashik</h5>
              </div>
              <h3>PURSUING</h3>
            </div>
            <p>
              Focusing on advanced computing concepts, software architecture,
              and full-stack development while maintaining academic excellence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science (Computer Science)</h4>
                <h5>Panchavati College, Nashik</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Graduated with an 8.42 CGPA. Gained strong fundamentals in
              programming languages, data structures, and database management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC (Science)</h4>
                <h5>RNC Arts, JDB Commerce & NSC Science, Nashik</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed higher secondary education with 85.17%, specializing in
              Computer Science and Mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

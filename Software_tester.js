import React from 'react';

const styles = `
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

a {
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s ease-in-out;
}

a:hover {
  color: #0056b3;
}

/* Hero Area */
.hero-area {
  position: relative;
  padding: 100px 0;
  text-align: center;
  color: white;
  background-color: #343a40;
}

.bg-image {
  background-image: url('./img/bgc2.jpg');
  height: 500px;
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.hero-area-tree {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  gap: 10px;
  font-size: 1rem;
}

.hero-area-tree li {
  color: rgba(255, 255, 255, 0.8);
}

.hero-area-tree li a {
  color: rgba(255, 255, 255, 0.8);
}

.hero-area-tree li a:hover {
  color: #fff;
}

.hero-area h1 {
  font-size: 3.5em;
  font-weight: bold;
  margin-top: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

/* Blog Section */
.blog-section {
  padding: 60px 0;
}

.blog-post {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.section-title {
  font-size: 2.5em;
  color: #343a40;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 3px solid #007bff;
  display: inline-block;
}

.styled-list {
  list-style: disc;
  padding-left: 20px;
  color: #555;
}

.styled-list li {
  margin-bottom: 10px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.styled-list li b {
  color: #333;
}

.container {
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
}
`;

const Software_tester = () => {
  return (
    <div>
      <style>{styles}</style>
      {/* Hero-area */}
      <div className="hero-area">
        {/* Background Image */}
        <div className="bg-image overlay"></div>
        {/* /Background Image */}
        <div className="container">
          <ul className="hero-area-tree">
            <li>
              <a href="main.php">Home</a>
            </li>
            <li>
              <a href="blog.php">Knowledge Network</a>
            </li>
            <li>Software Tester</li>
          </ul>
          <h1>Software Tester</h1>
        </div>
      </div>
      {/* /Hero-area */}

      {/* Blog Section */}
      <div id="blog" className="blog-section">
        <div className="container">
          {/* Blog Post */}
          <div className="blog-post">
            <h2 className="section-title">Job Description</h2>
            <p>
              Software Testers are responsible for the quality of software
              development and deployment. They are involved in performing
              automated and manual tests to ensure the software created by
              developers is fit for purpose.
            </p>
            <p>
              A software tester is responsible for designing test scenarios for
              software usability, running these tests, and preparing reports on
              the effectiveness and defects to the production team.
            </p>

            <h2 className="section-title">Skills Required</h2>
            <ul className="styled-list">
              <li>Up-to-date knowledge of software test design.</li>
              <li>
                Working knowledge of test techniques and compatibility with
                various software programs.
              </li>
              <li>Good organizational skills and a detail-oriented mindset.</li>
            </ul>

            <h2 className="section-title">Salary</h2>
            <p>
              The average software testing salary in India ranges from Rs
              247,315 to Rs 449,111.
            </p>

            <h2 className="section-title">Companies Hiring</h2>
            <ul className="styled-list">
              <li>LTI - Larsen & Toubro Infotech</li>
              <li>Wipro</li>
              <li>Intel Technology India Pvt Ltd</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software_tester;

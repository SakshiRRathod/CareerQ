import React from "react";

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

.hero-breadcrumb {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  gap: 10px;
  font-size: 1rem;
}

.hero-breadcrumb li {
  color: rgba(255, 255, 255, 0.8);
}

.hero-breadcrumb li a {
  color: rgba(255, 255, 255, 0.8);
}

.hero-breadcrumb li a:hover {
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

const Software_developer = () => {
  return (
    <div>
      <style>{styles}</style>
      {/* Hero-area */}
      <div className="hero-area">
        {/* Background Image */}
        <div className="bg-image overlay"></div>
        {/* /Background Image */}
        <div className="container">
          <ul className="hero-breadcrumb">
            <li>
              <a href="main.php">Home</a>
            </li>
            <li>
              <a href="blog.php">Knowledge Network</a>
            </li>
            <li>Software Developer</li>
          </ul>
          <h1>Software Developer</h1>
        </div>
      </div>
      {/* /Hero-area */}

      {/* Blog Section */}
      <div id="blog" className="section blog-section">
        <div className="container">
          {/* Blog Post */}
          <div className="blog-post">
            {/* Job Description */}
            <h2 className="section-title">Job Description</h2>
            <p>
              Software Developers design, develop, and test software and
              applications for computers. The main duties and responsibilities
              include directing programming activities, monitoring system
              performance, and designing and implementing new features.
            </p>
            <p>
              A Software Developer works with programming languages such as
              Java, C#, .Net, and Oracle to design and implement software
              systems. They collaborate with business analysts and development
              managers to meet project requirements.
            </p>

            {/* Skills Required */}
            <h2 className="section-title">Skills Required</h2>
            <p>To excel as a Software Developer, you need the following skills:</p>
            <ul className="styled-list">
              <li>Ability to develop unit tests for code components or complete applications.</li>
              <li>Understanding of full-stack development and software engineering concepts.</li>
              <li>Experience in a variety of software development projects.</li>
              <li>Proficiency in programming languages like Java, C++, and PHP.</li>
              <li>Knowledge of the software development lifecycle.</li>
              <li>Collaboration and communication skills.</li>
            </ul>

            {/* Salary */}
            <h2 className="section-title">Salary</h2>
            <p>
              The average salary for a Software Developer in India is Rs. 6,00,000. Salaries can
              range between Rs. 6,00,000 and Rs. 11,00,000 depending on the
              company.
            </p>

            <h2 className="section-title">Companies Offering Roles</h2>
                <ul className="styled-list">
                  <li>Accenture</li>
                  <li>Amdocs</li>
                  <li>Infosys</li>
                  <li>Tata Consultancy Services</li>
                  <li>IBM</li>
                  <li>Wipro</li>
                  <li>Cognizant</li>
                </ul>
              </div>
              </div>
          </div>
        </div>
  );
};

export default Software_developer;

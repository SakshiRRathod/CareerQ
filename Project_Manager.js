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

const Project_Manager = () => {
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
              <a href="/main">Home</a>
            </li>
            <li>
              <a href="/blog">Knowledge Network</a>
            </li>
            <li>Project Manager</li>
          </ul>
          <h1>Project Manager</h1>
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
              A Project Manager is responsible for planning, overseeing, and leading projects from ideation through to completion. This senior role often requires managing multiple moving parts simultaneously.
            </p>
            <p>
              IT project managers oversee planning, execution, and tracking to ensure projects meet goals and budgets. They foster collaboration and problem-solving, often managing cross-functional teams.
            </p>

            <h2 className="section-title">Skills Required</h2>
            <p>Key skills for Project Managers include:</p>
            <ul className="styled-list">
              <li>Written and verbal communication skills</li>
              <li>Capacity to manage high-stress situations</li>
              <li>Ability to multitask effectively</li>
              <li>Leadership and decision-making skills</li>
              <li>Big-picture thinking and vision</li>
              <li>Attention to detail</li>
            </ul>

            <h2 className="section-title">Educational Requirements</h2>
            <p>
              Common degrees for Project Managers include:
            </p>
            <ul className="styled-list">
              <li>Engineering</li>
              <li>IT or Computer Science</li>
              <li>Business or Business Administration</li>
              <li>Management</li>
            </ul>

            <h2 className="section-title">Duties and Responsibilities</h2>
            <ul className="styled-list">
              <li>Leading project planning sessions</li>
              <li>Coordinating staff and internal resources</li>
              <li>Managing relationships with clients and stakeholders</li>
              <li>Overseeing project documentation</li>
              <li>Conducting project reviews and creating reports</li>
              <li>Optimizing processes for efficiency</li>
              <li>Managing diverse teams</li>
            </ul>

            <h2 className="section-title">Salary</h2>
            <p>
              Entry-level: ₹396,635<br />
              Early career: ₹663,530<br />
              Mid-career: ₹1,216,673<br />
              Experienced: ₹1,721,476<br />
              Late career: ₹2,306,765
            </p>

            <h2 className="section-title">Companies Offering Roles</h2>
            <ul className="styled-list">
              <li>Cisco Systems</li>
              <li>Deloitte</li>
              <li>IBM</li>
              <li>AT&T</li>
              <li>Google</li>
              <li>Microsoft</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_Manager;

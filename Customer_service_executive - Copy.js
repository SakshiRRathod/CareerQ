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

const Customer_service_executive = () => {
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
            <li>Customer Service Executive</li>
          </ul>
          <h1>Customer Service Executive</h1>
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
              Customer Service Executives manage teams of representatives offering customer service and after-sales support.
              They create policies and procedures, oversee team activities, and ensure standardized service delivery.
            </p>
            <p>
              Excellent interpersonal, communication, and management skills are essential for success in this role.
            </p>

            <h2 className="section-title">Skills Required</h2>
            <ul className="styled-list">
              <li>Excellent interpersonal and written communication skills.</li>
              <li>Knowledge of CRM systems.</li>
              <li>Strong computer skills.</li>
              <li>Ability to run diagnostic tests and resolve issues.</li>
              <li>Track and report common issues effectively.</li>
            </ul>

            <h2 className="section-title">Educational Requirements</h2>
            <p>
              A Bachelor's degree in Business Administration or a related field is required. Advanced degrees like an MBA can help
              candidates secure higher-level positions.
            </p>

            <h2 className="section-title">Duties and Responsibilities</h2>
            <ul className="styled-list">
              <li>Managing teams offering customer support.</li>
              <li>Resolving customer complaints effectively.</li>
              <li>Creating and implementing service policies.</li>
              <li>Planning training and standardizing service delivery.</li>
              <li>Conducting quality assurance surveys and providing feedback.</li>
              <li>Maintaining a positive work environment.</li>
            </ul>

            <h2 className="section-title">Salary</h2>
            <p>
              The average salary for a Customer Service Executive is around Rs. 209,450. Entry-level positions start at Rs. 180,000, while experienced professionals can earn up to Rs. 270,000.
            </p>

            <h2 className="section-title">Companies Hiring</h2>
            <ul className="styled-list">
              <li>Amazon</li>
              <li>Dell Technologies</li>
              <li>HSBC</li>
              <li>Reliance Jio</li>
              <li>Tata Communications</li>
              <li>Axis Bank</li>
              <li>Tech Mahindra</li>
              <li>LG Electronics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer_service_executive;

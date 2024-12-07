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

const Business_Analyst = () => {
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
            <li><a href="/home">Home</a></li>
            <li><a href="/blog">Knowledge Network</a></li>
            <li>Business Analyst</li>
          </ul>
          <h1>Business Analyst</h1>
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
              Business analysts help guide businesses in improving processes, products, services, and software through data analysis. These agile workers straddle the line between IT and the business to help bridge the gap and improve efficiency.
            </p>
            <p>
              BAs are responsible for creating new models that support business decisions by working closely with financial reporting and IT teams to establish initiatives and strategies to improve importing and to optimize costs.
            </p>
            <p>
              The role of a business analyst is constantly evolving and changing — especially as companies rely more on data to advise business operations.
            </p>

            <h2 className="section-title">Skills Required</h2>
            <ul className="styled-list">
              <li>Able to exercise independent judgment and take action on it</li>
              <li>Excellent analytical, mathematical, and creative problem-solving skills</li>
              <li>Excellent listening, interpersonal, written, and oral communication skills</li>
              <li>Logical and efficient, with keen attention to detail</li>
              <li>Highly self-motivated and directed</li>
              <li>Ability to effectively prioritize and execute tasks while under pressure</li>
              <li>Strong customer service orientation</li>
              <li>Experience working in a team-oriented, collaborative environment</li>
            </ul>

            <h2 className="section-title">Educational Requirements</h2>
            <ul className="styled-list">
              <li>College diploma or university degree in business administration, finance, information systems, or related field</li>
              <li>Proven experience with business and technical requirements analysis, elicitation, modeling, and methodology development</li>
              <li>Excellent listening, interpersonal, written, and oral communication skills</li>
              <li>Project management skills, including planning, organizing, and managing resources</li>
              <li>Working knowledge of Windows office systems</li>
              <li>Understanding of the organization’s goals and objectives</li>
            </ul>

            <h2 className="section-title">Duties and Responsibilities</h2>
            <ul className="styled-list">
              <li>Elicits, analyzes, specifies, and validates the business needs of stakeholders</li>
              <li>Works with stakeholders to prioritize requirements</li>
              <li>Analyzes effectiveness of existing processes and develops strategies for improvement</li>
              <li>Creates process models, diagrams, and specifications</li>
              <li>Tracks the status of requirements throughout the project lifecycle</li>
            </ul>

            <h2 className="section-title">Salary</h2>
            <p>
              The average salary for a business analyst is $67,762 per year. The highest paid BAs are in San Francisco, New York, and Boston.
            </p>

            <h2 className="section-title">Companies offering Business Analyst roles</h2>
            <ul className="styled-list">
              <li>Deloitte</li>
              <li>Tata Consultancy Services</li>
              <li>American Express</li>
              <li>Flipkart</li>
              <li>Dell Technologies</li>
              <li>Barclays</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business_Analyst;

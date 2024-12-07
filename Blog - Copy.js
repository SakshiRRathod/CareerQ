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

/* Blog Section */
.section {
  padding: 60px 0;
}

.container {
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

#main {
  flex: 0 0 75%;
  max-width: 75%;
}

.blog-post {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: justify;
}

h2 {
  font-size: 2em;
  color: #343a40;
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 3px solid #007bff;
  display: inline-block;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

ol {
  padding-left: 20px;
  font-size: 16px;
}

ol li {
  margin-bottom: 10px;
}

ol li b {
  color: #333;
}
`;

const BlogPost = () => (
  <div>
    <style>{styles}</style>
    <div id="blog" className="section">
      <div className="container">
        <div className="row">
          <div id="main" className="col-md-9">
            <div className="blog-post">
              <h2>Job Description</h2>
              <p>
                The API Integration Specialist is a technical problem solver who will help clients and partners integrate with their system. The ideal candidate should be comfortable with writing scripts, have a strong understanding of REST web-services, and be willing to specialize in the more technical aspects of our system and the Application Programming Interface (API). Beyond the technical skillset, someone who can communicate clearly both orally and in writing. The incumbent will be required to bridge the gap between business resources and the technology team and effectively communicate with internal and external clients.
              </p>

              <h2>Skills Required</h2>
              <ol>
                <li><b>1.</b> Proven track record in understanding an enterprise’s APIs and processes.</li>
                <li><b>2.</b> Experience in using APIs and web services to integrate systems.</li>
                <li><b>3.</b> Excellent verbal and written communication skills, strong troubleshooting, problem solving, and analytical ability required.</li>
                <li><b>4.</b> Ability to understand and articulate technical concepts and derive solutions.</li>
                <li><b>5.</b> Ability to deal with complex and challenging client issues.</li>
                <li><b>6.</b> Capability to perform in a high-pressure working environment.</li>
              </ol>

              <h2>Educational Requirements</h2>
              <p>
                Degree in Computer Science or Information Technology or Business Information Systems or 2 years working in a technical role with API.
              </p>

              <h2>Duties and Responsibilities</h2>
              <ol>
                <li><b>1.</b> Field support calls and emails from developers and business users about account API integration and functionality.</li>
                <li><b>2.</b> Assist customers, partners, vendors, and others with all aspects of our API and its documentation.</li>
                <li><b>3.</b> Assist non-technical users in potential outcomes that can be achieved using the API.</li>
                <li><b>4.</b> Consult business professionals on ways to maximize our API by providing data to 3rd party integrations.</li>
                <li><b>5.</b> Engage with product and development teams in software development discussions to create/improve our systems.</li>
                <li><b>6.</b> Use the API to create test scenarios and scripts with expected outcomes for new integrations or expanded API use.</li>
                <li><b>7.</b> Be able to identify problems, prioritize, and arrive at possible solutions.</li>
                <li><b>8.</b> Be the Subject Matter Expert for all things API, including integrations, documentation, and use cases, etc.</li>
              </ol>

              <h2>Salary</h2>
              <p>
                The average salary for API Integration Specialist is Rs. 731,000 per annum.
              </p>

              <h2>Companies Offering API Integration Specialist Roles</h2>
              <ol>
                <li><b>1. Uber</b></li>
                <li><b>2. Barclays</b></li>
                <li><b>3. IBM</b></li>
                <li><b>4. Philips</b></li>
                <li><b>5. Larsen and Toubro Infotech Limited</b></li>
                <li><b>6. Oracle</b></li>
                <li><b>7. Bank of America</b></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogPost;

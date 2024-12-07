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
          <div className="blog-post">
            <h2>Job Description</h2>
            <p>
              An artificial intelligence (AI)/Machine Learning (ML) specialist applies their skills in engineering and computer science to create machines and software programs that can think for themselves. Most often, they use AI principles to address persistent business pain points, augment the capability of technical and human resources, and execute a change management/transformation process. The key contribution of an AI specialist is using emerging technologies, such as machine learning (ML) and neuro-linguistic programming (NLP), to solve business problems in new and creative ways that provide greater insight, accuracy, and consistency.
            </p>
            <p>
              Machine Learning Engineer responsibilities include creating machine learning models and retraining systems. Your ultimate goal will be to shape and build efficient self-learning applications. You will be evaluating existing machine learning (ML) processes, performing statistical analysis to resolve data set problems, and enhancing the accuracy of our AI software's predictive automation capabilities.
            </p>

            <h2>Skills Required</h2>
            <p>
              An AI/ML specialist is a software expert with a strong mathematics background and a knowledge of coding, whose core responsibilities include designing and developing machine learning and deep learning systems, running machine learning tests and experiments, and implementing appropriate ML algorithms.
            </p>
            <p>
              Based on our research, we identified the following core skills one must possess to get a job as an AI/ML Specialist:
            </p>
            <ol>
              <li><b>1.</b> Programming skills needed</li>
              <li><b>2.</b> Computer science fundamentals and programming</li>
              <li><b>3.</b> Distributed computing</li>
              <li><b>4.</b> Machine learning algorithms and libraries</li>
              <li><b>5.</b> Software engineering and system design</li>
              <li><b>6.</b> Strong knowledge of data</li>
            </ol>

            <h2>Educational Requirements</h2>
            <p>
              To secure a job as an AI/ML Specialist, a Bachelor’s or Master’s degree in computer science, mathematics, or a related field is a necessity. One must master data structures (stacks, queues, multi-dimensional arrays, trees, graphs), algorithms (searching, sorting, optimization, dynamic programming), computability and complexity (P vs. NP, NP-complete problems, big-O notation, approximate algorithms), and computer architecture (memory, cache, bandwidth, deadlocks, distributed processing). Familiarity with coding languages, such as Python, C++, JavaScript, Java, C#, Julia, Shell, R, and TypeScript, is essential.
            </p>

            <h2>Duties and Responsibilities</h2>
            <p>
              An AI/ML Specialist produces a tailor-made solution for each problem. The only way to achieve optimal results is to carefully process the data and select the best algorithm for the given context.
            </p>
            <ol>
              <li><b>1.</b> Understanding business objectives and developing models that help to achieve them, along with metrics to track their progress</li>
              <li><b>2.</b> Understand company and client challenges and how integrating AI capabilities can help create solutions</li>
              <li><b>3.</b> Develop machine learning applications according to requirements</li>
              <li><b>4.</b> Select appropriate datasets and data representation methods</li>
              <li><b>5.</b> Analyze and explain AI and machine learning (ML) solutions while setting and maintaining high ethical standards</li>
              <li><b>6.</b> Designing machine learning systems and self-running artificial intelligence (AI) software to automate predictive models</li>
            </ol>

            <h2>Salary</h2>
            <p>
              According to online sources, the entry-level Artificial Intelligence/Machine Learning salary in India for almost 40% of professionals is around Rs. 6,00,000, while mid-level and senior-level professionals can earn more than Rs. 50,00,000 annually.
            </p>

            <h2>Companies Offering AI/ML Specialist Roles</h2>
            <ol>
              <li><b>1.</b> Microsoft</li>
              <li><b>2.</b> Google</li>
              <li><b>3.</b> Nokia</li>
              <li><b>4.</b> JP Morgan</li>
              <li><b>5.</b> Cisco</li>
              <li><b>6.</b> Amazon</li>
              <li><b>7.</b> Apple</li>
              <li><b>8.</b> IBM</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogPost;

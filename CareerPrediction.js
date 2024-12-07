import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';

const CareerPrediction = () => {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const skills = [
    "Database Fundamentals",
    "Computer Architecture",
    "Distributed Computing",
    "Cyber Security",
    "Computer Networking",
    "Software Development",
    "Programming Skills",
    "Project Management",
    "Computer Forensics Fundamentals",
    "Technical Communication Skills",
    "AI ML",
    "Software Engineering",
    "Business Analysis",
    "Data Science",
    "Troubleshooting Skills",
    "Graphics Designing",
    "Roles"
  ];

  const ratingOptions = [
    "Not Interested",
    "Poor",
    "Beginner",
    "Average",
    "Intermediate",
    "Excellence",
    "Professional"
  ];

  const handleChange = useCallback((skill, value) => {
    setFormData(prevData => ({
      ...prevData,
      [skill]: value
    }));
  }, []);

  const validateForm = () => {
    for (let skill of skills) {
      if (!formData[skill]) {
        return false;
      }
    }
    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Reset any previous error and prediction
    setFormError(null);
    setPrediction(null);

    // Validate form
    if (!validateForm()) {
      setFormError('Please fill out all the fields before submitting.');
      return;
    }

    setIsLoading(true);

    const skillRatings = skills.map(skill => formData[skill]);

    try {
      const response = await fetch('http://localhost:8082/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(skillRatings),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setPrediction(result);
    } catch (error) {
      console.error('Error:', error);
      setPrediction({ error: 'An error occurred while processing your request.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600">
        <header className="header">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Career.Q</h1>
            <nav className="space-x-4">
              <a href="/home" className="nav-link">HOME</a>
              <a href="#" className="nav-link">SERVICES</a>
              <a href="/home#about" className="nav-link">ABOUT US</a>
              <a href="/contact" className="nav-link">CONTACT US</a>
              <a href="/logout" className="nav-link">LOG OUT</a>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <h2 className="page-title">Get Started to Discover Yourself!</h2>
          
          <div className="form-container">
            <h3 className="form-title">RATE YOURSELF.....!!</h3>

            {formError && <p className="text-red-600">{formError}</p>}
            
            <form onSubmit={submitForm} className="space-y-4" autoComplete="off" spellCheck="false">
              {skills.map((skill, index) => (
                <div key={index} className="form-field">
                  <label htmlFor={`skill-${index}`} className="form-label">
                    {skill}
                  </label>
                  <select
                    id={`skill-${index}`}
                    className="form-select"
                    onChange={(e) => handleChange(skill, e.target.value)}
                    value={formData[skill] || ''}
                    autoComplete="off"
                  >
                    <option value="">Choose option</option>
                    {ratingOptions.map((option, optionIndex) => (
                      <option key={optionIndex} value={option.toLowerCase().replace(' ', '-')}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>

            {prediction && (
              <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-2">Prediction Result:</h4>
                {prediction.error ? (
                  <p className="text-red-600">{prediction.error}</p>
                ) : (
                  <>
                    <p className="text-green-600 font-semibold">Predicted Job: {prediction.predicted_job}</p>
                    <p>Probability: {(prediction.prediction_probability * 100).toFixed(2)}%</p>
                    <div className="mt-4">
                      <h5 className="font-semibold">Alternative Jobs:</h5>
                      <ul className="list-disc list-inside">
                        {Object.entries(prediction.alternative_jobs).map(([job, prob], idx) => (
                          <li key={idx}>{job}: {(prob * 100).toFixed(2)}%</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </main>

      <style jsx>{`
          .header {
            background-color: #8e44ad;
            padding: 1rem;
          }
          .nav-link {
            color: white;
            text-decoration: none;
            margin-right: 1rem;
            font-weight: 600;
          }
          .nav-link:hover {
            text-decoration: underline;
          }
          .main-content {
            padding: 2rem;
          }
          .page-title {
            color: Black;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 2rem;
          }
          .form-container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            max-width: 800px;
            margin: 0 auto;
          }
          .form-title {
            color: #8e44ad;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .form-field {
            margin-bottom: 1rem;
          }
          .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #333;
          }
          .form-select {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1rem;
          }
          .submit-button {
            background-color: #8e44ad;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .submit-button:hover {
            background-color: #7e3d9c;
          }
          @media (max-width: 768px) {
            .form-container {
              padding: 1.5rem;
            }
            .page-title {
              font-size: 2rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default CareerPrediction;

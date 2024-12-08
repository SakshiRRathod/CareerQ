import React, { useState } from 'react';

const MentalHealthForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    cgpa: '',
    gender: '',
    maritalStatus: '',
    depression: '',
    anxiety: '',
    panicAttack: '',
    specialistTreatment: ''
  });

  const [prediction, setPrediction] = useState('');
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8085/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setPrediction(data.pred);
      setResources(data.resources || []);
    } catch (error) {
      setError('There was an error making the prediction request. Please try again.');
      console.error('Prediction request error:', error);
    } finally {
      setLoading(false);
    }
  };

  const headerStyles = {
    container: {
      backgroundColor: '#007bff',
      padding: '10px 20px',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      gap: '15px',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'color 0.3s',
    },
    navLinkHover: {
      color: '#ffcc00',
    },
  };

  const formStyles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f4f4f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    select: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: isHovered ? '#0056b3' : '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px',
      opacity: loading ? 0.7 : 1,
      pointerEvents: loading ? 'none' : 'auto',
    },
    resultContainer: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#e9f7ef',
      borderRadius: '8px',
      textAlign: 'center',
    },
    resourceList: {
      listStyleType: 'none',
      padding: 0,
    },
    resourceItem: {
      marginBottom: '10px',
    },
    link: {
      textDecoration: 'none',
      color: '#007bff',
    },
    error: {
      color: 'red',
      marginTop: '10px',
    },
  };

  return (
    <>
      <header style={headerStyles.container}>
        <div style={headerStyles.title}>Career.Q</div>
        <nav style={headerStyles.nav}>
          <a href="/home" style={headerStyles.navLink}>HOME</a>
          <a href="#" style={headerStyles.navLink}>SERVICES</a>
          <a href="/home#about" style={headerStyles.navLink}>ABOUT US</a>
          <a href="/contact" style={headerStyles.navLink}>CONTACT US</a>
          <a href="/logout" style={headerStyles.navLink}>LOG OUT</a>
        </nav>
      </header>

      <div style={formStyles.container}>
        <h2>Mental Health Prediction Form</h2>
        <form onSubmit={handleSubmit}>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} style={formStyles.input} required />
          </div>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>CGPA:</label>
            <input type="number" step="0.01" name="cgpa" value={formData.cgpa} onChange={handleChange} style={formStyles.input} required />
          </div>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} style={formStyles.select} required>
              <option value="">Select</option>
              <option value="1">Female</option>
              <option value="0">Male</option>
            </select>
          </div>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Marital Status (Married):</label>
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} style={formStyles.select} required>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Do you have Depression?:</label>
            <select name="depression" value={formData.depression} onChange={handleChange} style={formStyles.select} required>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Do you have Anxiety?:</label>
            <select name="anxiety" value={formData.anxiety} onChange={handleChange} style={formStyles.select} required>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Do you have Panic Attacks?:</label>
            <select name="panicAttack" value={formData.panicAttack} onChange={handleChange} style={formStyles.select} required>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Did you seek any specialist treatment?:</label>
            <select name="specialistTreatment" value={formData.specialistTreatment} onChange={handleChange} style={formStyles.select} required>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <button
            type="submit"
            style={formStyles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {error && <p style={formStyles.error}>{error}</p>}

        {prediction && (
          <div style={formStyles.resultContainer}>
            <h3>Prediction Result</h3>
            <p>{prediction}</p>

            {resources.length > 0 && (
              <div>
                <h4>Recommended Resources:</h4>
                <ul style={formStyles.resourceList}>
                  {resources.map((resource, index) => (
                    <li key={index} style={formStyles.resourceItem}>
                      <b>{resource.name}</b> - Phone: {resource.phone} - Website: <a href={resource.website} target="_blank" rel="noopener noreferrer" style={formStyles.link}>{resource.website}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MentalHealthForm;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    alert('User Logged out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="home-container">
      <div className="left-sidebar">
        <div className="logo">Career.Q</div>
        <nav className="vertical-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li className="dropdown">
              <button className="dropbtn">Services</button>
              <div className="dropdown-content">
                {loggedIn ? (
                  <>
                    <a href="/careerprediction" target="_blank" rel="noopener noreferrer">Career Prediction</a>
                    <a href="/mentalhealth" target="_blank" rel="noopener noreferrer">Mental Health</a>
                    <Link to="/courses">Courses</Link>
                    <Link to="/blog">Knowledge Network</Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">Career Prediction</Link>
                    <Link to="/login">Mental Health</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/blog">Knowledge Network</Link>
                  </>
                )}
              </div>
            </li>
            <li><Link to="/home#about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            {loggedIn ? (
              <li><Link to="/logout" onClick={handleLogout}>Log out</Link></li>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>{loggedInUser ? `Hi, ${loggedInUser}!` : 'Discover Your Career Path'}</h1>
            <p>
              {loggedInUser
                ? 'Unlock your potential with personalized career insights'
                : 'Take the first step towards your dream career'}
            </p>
            <Link 
              className="cta-button" 
              to={loggedInUser ? "/careerprediction" : "/login"}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="features-section">
          <div className="feature">
            <div className="feature-icon">🔍</div>
            <h3>Career Prediction</h3>
            <p>Advanced AI-powered career matching algorithm</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📚</div>
            <h3>Learning Network</h3>
            <p>Curated resources and personalized learning paths</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💻</div>
            <h3>Skill Development</h3>
            <p>Tailored courses to boost your professional growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('token');
    setLoggedIn(!!userLoggedIn);
  }, []);

  return (
    <header id="header" className="transparent-nav" style={{ position: 'fixed', backgroundColor: 'rgb(120, 70, 167)', top: 0 }}>
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand">
            <Link className="logo" to="/home">Career.ly</Link>
          </div>
          <button className="navbar-toggle">
            <span></span>
          </button>
        </div>

        <nav id="nav">
          <ul className="main-menu nav navbar-nav navbar-right">
            <li><Link to="/home">Home</Link></li>
            <li className="dropdown">
              <a className="dropbtn" href="javascript:void(0)">Services <span>&#11167;</span></a>
              <div className="dropdown-content">
                {loggedIn ? (
                  <>
                    <a href="/careerprediction">Career Prediction</a>
                    <Link to="/courses">Courses</Link>
                    <Link to="/blog">Knowledge Network</Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">Career Prediction</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/blog">Knowledge Network</Link>
                  </>
                )}
              </div>
            </li>
            <li><Link to="/home#about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            {loggedIn ? (
              <li><Link to="/logout">Log out</Link></li>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

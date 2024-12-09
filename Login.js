import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prevLoginInfo) => ({
            ...prevLoginInfo,
            [name]: value,
        }));
    };

    // Handle success message
    const handleSuccess = (message) => {
        toast.success(message);
    };

    // Handle error message
    const handleError = (error) => {
        toast.error(error);
    };

    // Handle form submission
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        
        try {
            const url = "http://localhost:3000/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });

            const result = await response.json();

            const { success, message, jwtToken, name, error } = result;

            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                const details = error?.details[0]?.message || "An error occurred";
                handleError(details);
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError("Internal server error. Please try again later.");
        }
    };

    return (
        <div className='container'>
            <style>
                {`
                *,
                ::before,
                ::after {
                  box-sizing: border-box;
                  padding: 0;
                  margin: 0;
                }

                html,
                body {
                  height: 100%;
                  width: 100%;
                }

                body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #f0f0f0; /* Optional: adds a light background color */
                }

                .container {
                  background-color: #fff;
                  padding: 32px 48px;
                  border-radius: 10px;
                  width: 100%;
                  max-width: 400px;
                  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
                  text-align: center;
                }

                .container > h1 {
                  margin-bottom: 20px;
                  font-size: 24px;
                  color: #333;
                }

                .container > form {
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                }

                .container div {
                  display: flex;
                  flex-direction: column;
                }

                .container input {
                  width: 100%;
                  font-size: 20px;
                  padding: 10px;
                  border: none;
                  outline: none;
                  border-bottom: 1px solid #ccc;
                }

                .container input::placeholder {
                  font-size: 12px;
                  font-style: italic;
                  color: #aaa; /* Optional: lighter color for placeholder text */
                }

                button {
                  background-color: purple;
                  border: none;
                  font-size: 20px;
                  color: white;
                  border-radius: 5px;
                  padding: 10px;
                  cursor: pointer;
                  margin: 10px 0;
                }

                button:hover {
                  background-color: darkviolet; /* Optional: darker shade on hover */
                }

                span {
                  display: block;
                  margin-top: 15px;
                  font-size: 14px;
                }

                a {
                  color: #007bff;
                  text-decoration: none;
                  font-weight: bold;
                }

                a:hover {
                  text-decoration: underline;
                }

                .Toastify__toast--success {
                  background-color: #28a745;
                }

                .Toastify__toast--error {
                  background-color: #dc3545;
                }
                `}
            </style>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={loginInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={loginInfo.password}
                    />
                </div>
                <button type='submit'>Login</button>
                <span>Doesn't have an account?
                    <Link to="/signup"> Signup</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;

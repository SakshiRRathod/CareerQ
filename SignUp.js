import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const [signupInfo, setSignUpInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
    
        if (!name || !email || !password) {
            return toast.error('Name, email, and password are required');
        }

        setLoading(true); 

        try {
            const url = "http://localhost:3000/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });

            if (!response.ok) {
                const errorText = await response.text(); 
                throw new Error(`Error: ${response.status} - ${errorText}`);
            }

            const data = await response.json(); 
            console.log('Signup successful:', data);
            toast.success('Signup successful! Redirecting to login...');
            
            setTimeout(() => {
                navigate('/login');
            }, 1000);

        } catch (error) {
            console.error('Error during signup:', error.message);
            toast.error('There was an issue with the signup process. Please try again later.');
        } finally {
            setLoading(false);
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
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        id='name'
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                        disabled={loading} 
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                        disabled={loading} 
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={signupInfo.password}
                        disabled={loading}
                    />
                </div>
                <button type="submit" disabled={loading || !signupInfo.name || !signupInfo.email || !signupInfo.password}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
                <span>
                    Already have an account?
                    <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

export default SignUp;

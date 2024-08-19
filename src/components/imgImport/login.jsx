import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './imgImport.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, TextField } from '@mui/material';

const Login = () => {
  // State for user data
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send user data to backend
      const response = await axios.post('http://localhost:4000/login', userData, {
        withCredentials: true, // Include this to ensure cookies are sent
      });

      // Handle success
      console.log('Logged in successfully:', response.data);
      alert('Logged in successfully!');
      // Redirect to the home page or any other page
      window.location.href = '/home';
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };

  // Handle input changes
  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

//  Google login handler
  const handleGoogleLogin = () => {
    // Implement your Google login logic here
    window.location.href = 'http://localhost:4000/auth/google';
  
    //   console.log('Google login clicked');
    
  };

  return (
    <div className="img offer">
      <div className="secContainer">
      <h1>Login</h1>
        
      </div>
      <div className="loginLocalContainer">
        <div className="loginLocal">
        <form onSubmit={handleSubmit}>

      
      <Box padding="20px" width="300px">
     
      <TextField 
        type="email"
        name="username"
        size="small"
        fullWidth
        value={userData.username}
        onChange={handleUserChange}
        label="Username"
        required
        variant="outlined"
        helperText='it is the email address you signup hear'
        />

      <TextField         
        type="password"
        name="password"
        size="small"
        fullWidth
        value={userData.password}
        onChange={handleUserChange}
        label="password"
        required
        variant="outlined"
        />

    </Box>
  <br />
            <button className="login" type="submit">Login</button>
          </form>
        </div>
      </div>
      <br className="customBreak"/>
      <div className="loginGoogle">
      <button className="googleButton" onClick={handleGoogleLogin}>
      <GoogleIcon style={{ color: 'red', marginRight: '8px' }} />
            Login with Google
         </button>
        </div> <br />
    </div>
  );
};

export default Login;
//<button className="googleButton" onClick={handleGoogleLogin}>
         
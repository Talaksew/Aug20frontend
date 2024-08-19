import React, { useState } from 'react';
import axios from 'axios';
import { Box, Stack, TextField } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    //email: '',
    role: '',
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    phone: '',
    avatar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/signup', formData);
      console.log(response.data);
      // Handle successful signup (e.g., redirect to home page)
    } catch (error) {
      console.error('There was an error signing up:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <Stack padding="20px" margin= "1px" width="300px"  spacing={2}>
      <TextField       
       type="email"
       name="username"
       size="small"
       fullWidth
       value={formData.username}
       onChange={handleChange}
       label="Username"
       required
       variant="outlined"
       helperText='inter your email address to signup hear'
       />

     <TextField      
       type="password"
       name="password"
       size="small"
       fullWidth
       value={formData.password}
       onChange={handleChange}
       label="password"
       required
       variant="outlined"
       />
     <TextField      
       type="text"
       name="firstName"
       size="small"
       fullWidth
       value={formData.firstName}
       onChange={handleChange}
       label="First Name"
       required
       variant="outlined"
       />
     <TextField   
       type="text"
       name="lastName"
       size="small"
       fullWidth
       value={formData.lastName}
       onChange={handleChange}
       label="Last Name"
       required
       variant="outlined"
       />
    <TextField   
       type="number"
       name="age"
       size="small"
       fullWidth
       value={formData.age}
       onChange={handleChange}
       label="Age"
       required
       variant="outlined"
       />
    <TextField     
       type="text"
       name="address"
       size="small"
       fullWidth
       value={formData.address}
       onChange={handleChange}
       label="Address"
       required
       variant="outlined"
       />
    <TextField   
       type="number"
       name="phone"
       size="small"
       fullWidth
       value={formData.lastName}
       onChange={handleChange}
       label="Phone"
       required
       variant="outlined"
       />

    <TextField      
       type="text"
       name="avatar"
       size="small"
       fullWidth
       value={formData.avatar}
       onChange={handleChange}
       label="Avatar"
       variant="outlined"
       />

</Stack>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
//<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
     
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Avatar, Paper, Grid } from '@mui/material';
import './Profile.css';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    phoneNumber: '',
    profileImage: '',
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    setProfileData({
      name: 'John Doe',
      email: 'john.doe@example.com',
      address1: '123 Main St',
      address2: 'Apt 4B',
      phoneNumber: '123-456-7890',
      profileImage: '/path/to/profile-image.jpg',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      profileImage: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleCreateAccount = () => {
    setIsCreatingAccount(false);
    setIsLoggedIn(true);
    setProfileData(formData);
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4, backgroundColor: '#f5f5f5' }}>
        {!isLoggedIn ? (
          isCreatingAccount ? (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>Create Account</Typography>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                sx={{ marginBottom: 2, width: '100%' }}
                onChange={handleInputChange}
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                sx={{ marginBottom: 2, width: '100%' }}
                onChange={handleInputChange}
              />
              <TextField
                label="Password"
                name="password"
                variant="outlined"
                type="password"
                sx={{ marginBottom: 2, width: '100%' }}
                onChange={handleInputChange}
              />
              <TextField
                label="Address 1"
                name="address1"
                variant="outlined"
                sx={{ marginBottom: 2, width: '100%' }}
                onChange={handleInputChange}
              />
              <TextField
                label="Address 2"
                name="address2"
                variant="outlined"
                sx={{ marginBottom: 2, width: '100%' }}
                onChange={handleInputChange}
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                variant="outlined"
                sx={{ marginBottom: 2, width: '100%' }}
                onChange={handleInputChange}
              />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="profile-image-upload"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="profile-image-upload">
                <Button variant="contained" color="primary" component="span" sx={{ marginBottom: 2 }}>
                  Upload Profile Image
                </Button>
              </label>
              <Button variant="contained" color="primary" onClick={handleCreateAccount}>
                Create Account
              </Button>
            </Box>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>Login</Typography>
              <TextField label="Email" variant="outlined" sx={{ marginBottom: 2, width: '100%' }} />
              <TextField label="Password" variant="outlined" type="password" sx={{ marginBottom: 2, width: '100%' }} />
              <Button variant="contained" color="primary" sx={{ marginRight: 1 }} onClick={handleLogin}>Login</Button>
              <Button variant="text" color="primary" onClick={() => setIsCreatingAccount(true)}>
                Create an Account
              </Button>
            </Box>
          )
        ) : (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>Profile</Typography>
            <Avatar alt={profileData.name} src={profileData.profileImage} sx={{ width: 80, height: 80, margin: '0 auto' }} />
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Name:</strong> {profileData.name}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Email:</strong> {profileData.email}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Address 1:</strong> {profileData.address1}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Address 2:</strong> {profileData.address2}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Phone Number:</strong> {profileData.phoneNumber}</Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Profile;

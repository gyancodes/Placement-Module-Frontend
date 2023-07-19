import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from '@material-ui/core';

const ResumeSection = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    skills: '',
    experience: '',
  });

  const handleChange = (event) => {
    setResumeData({
      ...resumeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission and data processing (e.g., API calls, storing data, etc.)
    console.log(resumeData);
    // Reset the form data after submission (if needed)
    setResumeData({
      name: '',
      email: '',
      phone: '',
      education: '',
      skills: '',
      experience: '',
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Create Your Resume
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="name"
              label="Full Name"
              value={resumeData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              label="Email"
              value={resumeData.email}
              onChange={handleChange}
              fullWidth
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="phone"
              label="Phone"
              value={resumeData.phone}
              onChange={handleChange}
              fullWidth
              required
              type="tel"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="education"
              label="Education"
              value={resumeData.education}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="skills"
              label="Skills"
              value={resumeData.skills}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="experience"
              label="Experience"
              value={resumeData.experience}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save Resume
        </Button>
      </form>

      {/* Display Section */}
      <Typography variant="h5" align="center" gutterBottom>
        Your Resume Details
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="body1" gutterBottom>
          <strong>Name:</strong> {resumeData.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {resumeData.email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Phone:</strong> {resumeData.phone}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Education:</strong> {resumeData.education}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Skills:</strong> {resumeData.skills}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Experience:</strong> {resumeData.experience}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ResumeSection;

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Paper, Box } from '@mui/material';

const BookService = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: ''
  });

  const services = ['Soil Testing', 'Tractor Setup', 'Financial Planning', 'Software Installation'];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Booking submitted!");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Book On-Field Professional
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField name="name" label="Your Name" fullWidth margin="normal" onChange={handleChange} />
          <TextField
            select
            label="Select Service"
            name="service"
            fullWidth
            margin="normal"
            value={formData.service}
            onChange={handleChange}
          >
            {services.map(service => (
              <MenuItem key={service} value={service}>
                {service}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            type="date"
            name="date"
            label="Preferred Date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Book Now
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookService;

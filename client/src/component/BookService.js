import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Box,
  Alert
} from '@mui/material';
import axios from 'axios';

const BookService = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: ''
  });
  const navigate = useNavigate();


  const [alert, setAlert] = useState({ type: '', message: '' });

  const services = [
    'Soil Testing',
    'Tractor Setup',
    'Financial Planning',
    'Software Installation'
  ];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, service, date } = formData;

    if (!name || !service || !date) {
      setAlert({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    try {
      const response = await axios.post(
        'https://finance-3-inbn.onrender.com/api/bookings',
        formData
      );
      navigate('/bookings');
    } catch (error) {
      console.error('Booking error:', error);
      setAlert({ type: 'error', message: 'Error booking service. Please try again.' });
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Book On-Field Professional
        </Typography>

        {alert.message && (
          <Alert severity={alert.type} sx={{ mb: 2 }}>
            {alert.message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Your Name"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            select
            label="Select Service"
            name="service"
            fullWidth
            required
            value={formData.service}
            onChange={handleChange}
            margin="normal"
          >
            {services.map((service) => (
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
            required
            value={formData.date}
            onChange={handleChange}
            margin="normal"
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

const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST a new booking
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking({
      name: req.body.name,
      service: req.body.service,
      date: req.body.date,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
});

module.exports = router;

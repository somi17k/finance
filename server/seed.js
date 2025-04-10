const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Resource = require('./models/Resource');

dotenv.config();

const resources = [
  { name: 'Tractor', status: 'Available' },
  { name: 'Irrigation System', status: 'In Use' },
  { name: 'Pesticide Sprayer', status: 'Maintenance' },
  { name: 'Seeder Machine', status: 'Available' },
  { name: 'Greenhouse', status: 'Occupied' }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Resource.deleteMany(); // Optional: clear existing data
    console.log('Old resources removed');

    await Resource.insertMany(resources);
    console.log('New demo resources added');

    mongoose.connection.close();
  } catch (err) {
    console.error('Seeding error:', err);
  }
}

seedDB();

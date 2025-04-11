import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Dashboard from './component/Dashboard';
import BookService from './component/BookService';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Farm Manager
            </Typography>
            <Button color="inherit" component={Link} to="/">Dashboard</Button>
            <Button color="inherit" component={Link} to="/book">Book Service</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/book" element={<BookService />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;

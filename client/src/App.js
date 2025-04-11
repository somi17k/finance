import React from 'react';
import { Container, Typography, AppBar, Toolbar, Box, Button } from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Farm Resource & Financial Manager
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Dashboard />
      </Container>
    </Box>
  );
}

export default App;

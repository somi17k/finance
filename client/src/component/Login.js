import React from 'react';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login to Farm Manager
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;

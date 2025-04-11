import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Resource Tracker</Typography>
            <Typography>Monitor tractors, fertilizers, and more.</Typography>
            <Button sx={{ mt: 2 }} variant="contained">View Resources</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Financial Overview</Typography>
            <Typography>Track income and expenses.</Typography>
            <Button sx={{ mt: 2 }} variant="contained">Finance Details</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

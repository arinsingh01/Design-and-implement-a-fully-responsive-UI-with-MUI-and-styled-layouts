import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, Grid, Card, CardContent } from '@mui/material';
import { CssBaseline } from '@mui/material';

const AdminPanelPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const stats = [
    { title: 'Stat 1', value: '100' },
    { title: 'Stat 2', value: '200' },
    { title: 'Stat 3', value: '300' },
    { title: 'Stat 4', value: '400' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Admin Panel</Typography>
          <Button color="inherit" onClick={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <List>
          <ListItem button>Dashboard</ListItem>
          <ListItem button>Settings</ListItem>
          <ListItem button>Users</ListItem>
        </List>
      </Drawer>
      <Grid container spacing={2} style={{ padding: '16px' }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card raised style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <CardContent>
                <Typography variant="h5">{stat.title}</Typography>
                <Typography variant="body1">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default AdminPanelPage;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Collapse, Grid, Card, CardContent } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const DashboardPage = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [open, setOpen] = useState(false);

    const handleSidebarToggle = () => {
        setOpenSidebar(!openSidebar);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Dashboard</Typography>
                    <IconButton color="inherit" onClick={handleSidebarToggle}>Menu</IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={openSidebar}>
                <List>
                    <ListItem button onClick={handleClick}>
                        <ListItemText primary="Collapsible Menu" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="Sub Item 1" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Sub Item 2" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
            <main>
                <Grid container spacing={2}>
                    {[...Array(9)].map((_, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">Card {index + 1}</Typography>
                                    <Typography color="textSecondary">This is a card.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </div>
    );
};

export default DashboardPage;

import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import AdminPanelPage from './pages/AdminPanelPage';
import Navigation from './components/Navigation';

type Page = 'landing' | 'dashboard' | 'admin';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'admin':
        return <AdminPanelPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <>  
      <CssBaseline />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <Box component="main">
        {renderPage()}
      </Box>
    </>
  );
};

export default App;
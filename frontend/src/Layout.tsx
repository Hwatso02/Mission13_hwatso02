import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      {/* References the Navbar.tsx File */}
      <Navbar />
      {/* References the Routes in the App.tsx File */}
      <Outlet />
    </>
  );
};

//make the function accessible to be imported by other files
export default Layout;

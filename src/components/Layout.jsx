import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-4 lg:ml-[250px]"> {/* Utilise lg:ml-[250px] pour compenser la largeur de la navbar uniquement en desktop */}
        {children}
      </main>
    </div>
  );
};

export default Layout;

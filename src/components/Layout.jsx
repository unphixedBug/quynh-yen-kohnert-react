import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex bg-light">
      <Navbar />
      <main className="flex-1 w-[calc(100vw-150px)] md:pt-10 pb-24 lg:ml-[250px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;

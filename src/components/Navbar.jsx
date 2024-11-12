import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaHome, FaBars, FaShoppingCart, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Icônes pour mobile
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {isDesktop && (
        <nav className="navbar-desktop fixed left-0 top-0 h-full bg-gray-100 flex flex-col items-center p-4">
          <Link to="/" className="text-2xl font-bold mb-8">Q-Y-K</Link>
          <Link to="/creations" className="mb-4">Créations</Link>
          <Link to="/mon-histoire" className="mb-4">Mon histoire</Link>
          <Link to="/contact" className="mb-4">Contact</Link>
          <Link to="/boutique" className="mb-4">Boutique</Link>
          <div className="mt-auto flex flex-col items-center">
            <Link to="/langue" className="mb-4">Langue</Link>
            <Link to="/panier"><FaShoppingCart size={20} /></Link>
          </div>
        </nav>
      )}

      {isTablet && (
        <nav className="navbar-tablet fixed top-0 left-0 w-full bg-gray-100 flex justify-around p-4 shadow">
          <Link to="/" className="text-2xl font-bold">Q-Y-K</Link>
          <Link to="/creations">Créations</Link>
          <Link to="/mon-histoire">Mon histoire</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/boutique">Boutique</Link>
          <Link to="/langue" className="ml-auto">Langue</Link>
          <Link to="/panier"><FaShoppingCart size={20} /></Link>
        </nav>
      )}

      {isMobile && (
        <nav className="navbar-mobile fixed bottom-0 left-0 w-full bg-gray-100 flex justify-around p-4 shadow">
          <Link to="/"><FaHome size={24} /></Link>
          <button onClick={toggleMenu}><FaBars size={24} /></button>
          <Link to="/panier"><FaShoppingCart size={24} /></Link>
        </nav>
      )}

        {isMobile && isMenuOpen && (
        <div className="mobile-menu fixed bottom-0 left-0 w-full bg-white z-50 p-8 flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
            <Link to="/creations" className="mb-6 text-xl" onClick={toggleMenu}>Créations</Link>
            <Link to="/mon-histoire" className="mb-6 text-xl" onClick={toggleMenu}>Mon histoire</Link>
            <Link to="/contact" className="mb-6 text-xl" onClick={toggleMenu}>Contact</Link>
            <Link to="/boutique" className="mb-6 text-xl" onClick={toggleMenu}>Boutique</Link>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
            <Link to="/contact-email"><FaEnvelope size={24} /></Link>
            <button onClick={toggleMenu} className="focus:outline-none">
                <MdClose size={30} />
            </button>
            <Link to="/instagram"><FaInstagram size={24} /></Link>
            </div>
        </div>
        )}  
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { FiX } from '@react-icons/all-files/fi/FiX';
import { Route, routes } from '../../constants/routes';
import { Link } from '../../types/Link';
import HyperLink from './HyperLink';

const NavMenu = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const links = Object.values(routes).map((route: Route): React.ReactElement => {
    const url = route.path === '/' ? route.path : `${route.path}/`;
    const link: Link = { url };
    return (
      <li key={route.path} className="my-4">
        <HyperLink
          link={link}
          className="uppercase text-sm block text-gray-800 hover:text-blue-500"
          activeClassName="font-bold text-blue-500"
        >
          {route.name}
        </HyperLink>
      </li>
    );
  });

  return (
    <nav className="relative z-50 w-full">
      {/* Hamburger Menu Button */}
      <div className="md:hidden flex items-center justify-end">
        <button
          onClick={toggleMenu}
          type="button"
          className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleMenu}
          onKeyDown={(e):void => {
            if (e.key === 'Enter' || e.key === ' ') toggleMenu();
          }}
        />
      )}

      {/* Collapsible Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <ul className="flex flex-col items-start">
          {links}
        </ul>
      </div>

      {/* Inline Menu for Larger Screens */}
      <ul className="hidden md:flex flex-row items-center space-x-6">
        {links}
      </ul>
    </nav>
  );
};

export default NavMenu;

// components/Navbar.jsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Sarees', href: '/sarees' },
  { label: 'Lehengas', href: '/lehengas' },
 
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-yellow-500 text-white py-2 text-center text-sm font-medium">
        Our Lekki Office is now opened! – Visit us at A5, The Greyheights, Ope-Daniel, Taiwo Street, Ikate, Lekki, Lagos State.
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <span className="font-roboto">Threads-Pi</span>
            {/* <span className="text-sm block">Tailors</span> */}
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-700 hover:text-yellow-500 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Favorite Icon with Badge */}
            <button className="relative">
              <Heart className="text-gray-700" />
              <span className="absolute top-[-6px] right-[-8px] bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden px-4 py-4 bg-white shadow">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block text-gray-700 hover:text-yellow-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

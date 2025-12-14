'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Intellect Capital</span>
              <span className="ml-2 text-xs text-gray-400">LLC</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors text-sm font-medium`}>
              Home
            </Link>
            <Link href="/about" className={`${isActive('/about') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors text-sm font-medium`}>
              About
            </Link>
            
            <div className="relative group">
              <button className={`${pathname.startsWith('/services') ? 'text-blue-400' : 'text-gray-300 group-hover:text-white'} transition-colors text-sm font-medium flex items-center`}>
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-neutral-900 border border-neutral-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-black hover:text-white">
                  Services Overview
                </Link>
                <Link href="/services/engineering" className="block px-4 py-2 text-sm text-gray-300 hover:bg-black hover:text-white">
                  Engineering
                </Link>
                <Link href="/services/information-technology" className="block px-4 py-2 text-sm text-gray-300 hover:bg-black hover:text-white">
                  Information Technology
                </Link>
                <Link href="/services/healthcare" className="block px-4 py-2 text-sm text-gray-300 hover:bg-black hover:text-white">
                  Healthcare
                </Link>
              </div>
            </div>

            <Link href="/training" className={`${isActive('/training') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors text-sm font-medium`}>
              Training
            </Link>
            <Link href="/careers" className={`${isActive('/careers') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors text-sm font-medium`}>
              Careers
            </Link>
            <Link href="/clients" className={`${isActive('/clients') ? 'text-blue-400' : 'text-gray-300 hover:text-white'} transition-colors text-sm font-medium`}>
              Clients
            </Link>
            <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-black rounded">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-black rounded">About</Link>
            
            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-black rounded flex justify-between items-center">
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-6 space-y-1">
                <Link href="/services" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Overview</Link>
                <Link href="/services/engineering" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Engineering</Link>
                <Link href="/services/information-technology" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Information Technology</Link>
                <Link href="/services/healthcare" className="block px-3 py-2 text-sm text-gray-400 hover:text-white">Healthcare</Link>
              </div>
            )}
            
            <Link href="/training" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-black rounded">Training</Link>
            <Link href="/careers" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-black rounded">Careers</Link>
            <Link href="/clients" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-black rounded">Clients</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-black rounded">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

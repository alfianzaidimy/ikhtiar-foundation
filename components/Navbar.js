'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Utama', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Penerima Manfaat', path: '/beneficiaries' },
    { name: 'Program', path: '/programs' },
    { name: 'Hubungi & Sumbangan', path: '/contact' },
    { name: 'Kepimpinan', path: '/pasukan' }, // <-- Dipendekkan supaya kekal satu baris kemass
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Diubah ke max-w-full atau max-w-[1400px] untuk beri ruang maksimum di desktop */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-12 w-12 md:h-14 md:w-14">
                <Image
                  src="/edit.png"
                  alt="Ikhtiar Foundation Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 56px"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-gray-900 text-xs md:text-sm tracking-wider leading-none group-hover:text-red-600 transition-colors">
                  IKHTIAR FOUNDATION
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-widest mt-0.5">
                  MALAYSIA
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          {/* Menggunakan space-x-0.5 pada skrin biasa dan space-x-2 pada skrin besar (lg) supaya kekal sebaris */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-2 whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-2.5 py-2 rounded-md text-xs lg:text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-red-600 bg-red-50/50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-xs lg:text-sm font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 active:bg-red-800 transition-all shadow-sm hover:shadow-md"
            >
              Sumbang Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Buka menu utama</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-100 shadow-inner`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-md text-base font-semibold transition-all ${
                isActive(link.path)
                  ? 'text-red-600 bg-red-50/50'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-4">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition-all shadow-sm"
            >
              Sumbang Sekarang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

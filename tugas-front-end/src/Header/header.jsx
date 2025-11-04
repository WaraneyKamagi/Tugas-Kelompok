import React from 'react';

// Logo Component
const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-lg">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">U</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800">Universitas Klabat</span>
        <span className="text-sm text-gray-600 italic">A Legacy of Excellence</span>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  const topLinks = [
    { name: 'FAQs', href: '#faqs' },
    { name: 'Kalender Akademik', href: '#kalender' },
    { name: 'Biaya Perkuliahan', href: '#biaya' },
    { name: 'Presensi Online', href: '#presensi' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar - Purple */}
      <div className="bg-linear-to-r from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-6 text-white">
              <a href="tel:+62431891035" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62431 891035</span>
              </a>
              <a href="mailto:info@unklab.ac.id" className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@unklab.ac.id</span>
              </a>
            </div>

            {/* Top Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {topLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Header - White */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
                Tentang
              </a>
              <a href="#programs" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
                Program Studi
              </a>
              <a href="#admission" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
                Pendaftaran
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
                Kontak
              </a>
            </nav>

            {/* CTA Button */}
            <button className="hidden md:block px-6 py-2 bg-linear-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
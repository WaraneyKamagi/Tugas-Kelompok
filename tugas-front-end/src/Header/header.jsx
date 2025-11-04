import React, { useState, useEffect, useRef } from "react";

const Logo = () => (
  <div className="flex items-center space-x-3">
    {/* Logo Resmi Universitas Klabat */}
    <img 
      src="https://www.unklab.ac.id/wp-content/uploads/2022/09/logo-with-motto-3.png" 
      alt="Universitas Klabat" 
      className="h-16 w-auto object-contain"  // Height 16 (64px), width auto untuk maintain aspect ratio
      onError={(e) => {
        // Fallback jika logo tidak load
        console.error('Logo failed to load');
        e.target.style.display = 'none';
      }}
    />
  </div>
);

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const closeTimeout = useRef(null);
  const menuRef = useRef(null);

  // Komponen untuk icon dropdown
  const DropdownIcon = ({ isOpen }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menus = [
    {
      name: "Tentang Unklab",
      items: [
        "Sambutan Rektor",
        "Sejarah",
        "Visi, Misi, Tujuan",
        "Pimpinan",
        "Struktur Organisasi",
        "Akreditasi",
        "Unklab Info",
        "Fasilitas",
        "Lokasi",
      ],
    },
    {
      name: "Program Studi",
      items: [
        {
          name: "Fakultas Ekonomi",
          subItems: ["Manajemen", "Akuntansi", "Bisnis Digital"],
        },
        {
          name: "Fakultas Ilmu Komputer",
          subItems: ["Teknik Informatika", "Sistem Informasi"],
        },
        {
          name: "Fakultas Keperawatan",
          subItems: ["Keperawatan", "Ners"],
        },
        {
          name: "Fakultas Filsafat",
          subItems: ["Ilmu Filsafat", "Teologi"],
        },
        {
          name: "Fakultas Pendidikan",
          subItems: ["Pendidikan Agama", "Pendidikan Bahasa Inggris"],
        },
      ],
    },
    { name: "Pendaftaran" },
    { name: "Kontak" },
  ];

  const topLinks = [
    { name: "FAQs", href: "#faqs" },
    { name: "Kalender Akademik", href: "#kalender" },
    { name: "Biaya Perkuliahan", href: "#biaya" },
    { name: "Presensi Online", href: "#presensi" },
  ];

  const handleMenuClick = (idx) => {
    setOpenMenu(openMenu === idx ? null : idx);
  };

  const handleMouseEnter = (idx) => {
    clearTimeout(closeTimeout.current);
    setOpenMenu(idx);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenSubmenu(null);
    }, 250);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* TOP BAR - TANPA HIGHLIGHT KUNING */}
      <div className="bg-[rgb(64,33,85)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm text-white">
            <div className="flex items-center space-x-6">
              <a
                href="tel:+62431891035"
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62431 891035</span>
              </a>
              <a
                href="mailto:info@unklab.ac.id"
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@unklab.ac.id</span>
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-6">
              {topLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION - HANYA MENU UTAMA PAKAI HIGHLIGHT */}
      <div ref={menuRef} className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />

            {/* MAIN MENU - HANYA INI YANG PAKAI GARIS BAWAH KUNING */}
            <nav className="hidden md:flex items-center space-x-8 relative">
              {menus.map((menu, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleMenuClick(idx)}
                    className="text-gray-700 hover:text-purple-700 font-medium transition-all duration-300 flex items-center space-x-1 relative group pb-2 px-1"
                  >
                    <span className="relative z-10">{menu.name}</span>
                    {/* Icon dropdown hanya ditampilkan jika menu memiliki items */}
                    {menu.items && <DropdownIcon isOpen={openMenu === idx} />}
                    
                    {/* GARIS BAWAH KUNING - HANYA UNTUK MENU UTAMA */}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                  </button>

                  {/* LEVEL 1 DROPDOWN - TANPA HIGHLIGHT KUNING */}
                  {menu.items && openMenu === idx && (
                    <div className="absolute left-0 top-full mt-2 bg-purple-800 text-white w-56 rounded-md shadow-lg py-2 z-50">
                      {menu.items.map((item, i) => (
                        <div
                          key={i}
                          className="relative group"
                          onMouseEnter={() => setOpenSubmenu(i)}
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-purple-700 flex justify-between items-center"
                          >
                            <span>
                              {typeof item === "string" ? item : item.name}
                            </span>
                            {item.subItems && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </a>

                          {/* LEVEL 2 DROPDOWN - TANPA HIGHLIGHT KUNING */}
                          {item.subItems && openSubmenu === i && (
                            <div className="absolute left-full top-0 bg-purple-700 w-56 rounded-md shadow-lg py-2 z-50">
                              {item.subItems.map((sub, j) => (
                                <a 
                                  key={j} 
                                  href="#" 
                                  className="block px-4 py-2 hover:bg-purple-600"
                                >
                                  {sub}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA BUTTON - TANPA HIGHLIGHT KUNING */}
            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
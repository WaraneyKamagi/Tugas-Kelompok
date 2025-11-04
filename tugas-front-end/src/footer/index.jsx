import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#5B2C6F] text-white py-10 px-6">
      <div className="flex flex-wrap justify-between gap-8">
        
        {/* Kolom 1 - UNKLAB */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-2">UNKLAB</h2>
          <p className="text-sm leading-relaxed">
            Universitas Klabat adalah pusat pendidikan tinggi yang didirikan oleh Gereja
            Masehi Advent Hari Ketujuh untuk menyediakan mahasiswa bagi pelayanan di Indonesia
            dan tempat lainnya.
          </p>
        </div>

        {/* Kolom 2 - Tautan */}
        <div className="flex-1 min-w-[200px] mb-6">
          <h3 className="text-lg font-semibold mb-2">Tautan Lainnya</h3>
          <ul className="list-none space-y-1 text-sm">
            <li><a href="#" className="hover:underline">SIU (S1)</a></li>
            <li><a href="#" className="hover:underline">SISTER</a></li>
            <li><a href="#" className="hover:underline">E-learning</a></li>
            <li><a href="#" className="hover:underline">Biaya Kuliah</a></li>
            <li><a href="#" className="hover:underline">Kalender Akademik</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Kolom 3 - Informasi */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h3 className="text-lg font-semibold mb-2">Informasi</h3>
          <p className="text-sm">
            Jl. Arnold Mononutu, Airmadidi, Minahasa Utara, Sulawesi Utara, 95371
          </p>
          <p className="text-sm mt-1">Telp: +62431 891035</p>
          <p className="text-sm mt-1">Email: info@unklab.ac.id</p>
        </div>

        {/* Kolom 4 - Peta */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h3 className="text-lg font-semibold mb-2">Peta</h3>
          <iframe
            title="Peta UNKLAB"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.2157038242784!2d124.9835!3d1.4182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3286fc0e8a2f39a1%3A0x2e9d83d52c6eb62a!2sUniversitas%20Klabat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            className="w-full h-[150px] border-0 rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Garis Bawah */}
      <div className="text-center text-xs mt-8 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Universitas Klabat. All rights reserved.
      </div>
    </footer>
  );
}

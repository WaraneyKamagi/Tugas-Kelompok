import React from 'react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Visi, Misi & Tujuan Section - lebih rapat ke atas */}
      <div className="max-w-4xl mx-auto px-6 py-4"> {/* Reduced py-8 to py-4 */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6"> {/* Reduced mb-8 to mb-6 */}
          Visi, Misi & Tujuan
        </h2>

        {/* Visi */}
        <div className="mb-6"> {/* Reduced mb-8 to mb-6 */}
          <h3 className="text-2xl font-bold text-green-700 mb-3"> {/* Reduced mb-4 to mb-3 */}
            Visi
          </h3>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-700 leading-relaxed">
              Menjadi universitas swasta Kristen Masehi Advent Hari Ketujuh yang memperoleh pengakuan secara nasional, 
              dan internasional melalui pendidikan dan pengajaran, penelitian, dan pengabdian kepada masyarakat yang 
              bermutu dengan dilandasi pada suatu proses pengembangan yang serasi yakni spiritual, intelektual, fisik dan sosial.
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="mb-6"> {/* Reduced mb-8 to mb-6 */}
          <h3 className="text-2xl font-bold text-blue-700 mb-3"> {/* Reduced mb-4 to mb-3 */}
            Misi
          </h3>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 leading-relaxed">
              Universitas Klabat bertekad mencapai keunggulan mutu dalam pendidikan Kristen Masehi Advent Hari Ketujuh 
              dengan menciptakan lingkungan yang kondusif untuk pengembangan karakter Kristiani yang mulia dan untuk 
              pembekalan ketrampilan dan ilmu pengetahuan kepada mahasiswa agar bisa menjadi warga negara yang mampu 
              hidup mandiri dan bekerja untuk melayani sesama manusia tanpa mementingkan diri sendiri.
            </p>
          </div>
        </div>

        {/* Tujuan */}
        <div>
          <h3 className="text-2xl font-bold text-purple-700 mb-3"> {/* Reduced mb-4 to mb-3 */}
            Tujuan
          </h3>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <p className="text-gray-700 mb-4 font-semibold">
              Berdasarkan pernyataan Visi dan Misi, Universitas Klabat berupaya mencapai tujuan-tujuan berikut:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">Menuntun mahasiswa dalam pembentukan karakter Kristiani yang ditandai dengan kerajinan, kejujuran, penghematan, pengendalian-diri, dan kekudusan.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">Memanfaatkan hasil penelitian dan teknologi semaksimal mungkin untuk memastikan pembelajaran yang bersifat student-centered dan student-oriented.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">Membekali mahasiswa dengan ketrampilan dan penerapan ilmu pengetahuan dan teknologi yang ditekuninya.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">Meningkatkan penelitian dosen dengan melibatkan mahasiswa.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span className="text-gray-700">Menerapkan ilmu pengetahuan dan teknologi semaksimal mungkin dalam bentuk pengabdian kepada masyarakat dengan melibatkan dosen, staf, dan mahasiswa.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
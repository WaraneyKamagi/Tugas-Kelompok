import React from "react";

// Import semua gambar kamu
import img1 from "./download.jpg";
import img2 from "./download(1).jpg";
import img3 from "./fasilitas_study-garden-2.jpg";
import img4 from "./images(1).jpg";
import img5 from "./images(2).jpg";
import img6 from "./images.jpg";

const cardData = [
  {
    title: "Gambar1",
    img: img1,
  },
  {
    title: "Gambar2",
    img: img2,
  },
  {
    title: "Gambar3",
    img: img3,
  },
  {
    title: "Gambar4",
    img: img4,
  },
  {
    title: "Gambar5",
    img: img5,
  },
  {
    title: "Gambar6",
    img: img6,
  },
];

const CardInfo = () => {
  return (
    
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background utama */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?campus,university')",
        }}
      ></div>

      {/* Grid card */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10 mt-[-100px] max-w-6xl">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-2xl shadow-xl hover:bg-white/25 transition-all duration-300 overflow-hidden"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
              <p className="text-sm opacity-90">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardInfo;

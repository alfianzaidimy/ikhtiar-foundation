"use client";

import React, { useState } from "react";

// 1. Data Contoh Aktiviti mengikut Tahun (Bie boleh tukar teks & url gambar nanti)
const dataProgram = {
  2026: [
    {
      id: 1,
      tajuk: "Misi Kasih Ramadan & Agihan Fitrah",
      tarikh: "Mac - April 2026",
      status: "SELESAI",
      penerangan: "Pengagihan barangan dapur asas (beras, minyak, gula) serta wang tunai saguhati buat 350 keluarga asnaf di sekitar daerah Putrajaya dan Sepang.",
      images: [
        "https://picsum.photos/id/1011/400/250",
        "https://picsum.photos/id/1012/400/250",
        "https://picsum.photos/id/1013/400/250",
        "https://picsum.photos/id/1015/400/250",
        "https://picsum.photos/id/1016/400/250",
      ]
    },
    {
      id: 2,
      tajuk: "Program Kembali Ke Sekolah (Back To School)",
      tarikh: "Februari 2026",
      status: "SELESAI",
      penerangan: "Sumbangan set lengkap persekolahan merangkumi beg, pakaian seragam, kasut, dan baucar buku untuk anak-anak yatim.",
      images: [
        "https://picsum.photos/id/1025/400/250",
        "https://picsum.photos/id/1031/400/250",
        "https://picsum.photos/id/1033/400/250",
        "https://picsum.photos/id/1035/400/250",
        "https://picsum.photos/id/1038/400/250",
      ]
    }
  ],
  2025: [
    {
      id: 3,
      tajuk: "Kempen Kesihatan & Saringan Dialisis Percuma",
      tarikh: "Disember 2025",
      status: "SELESAI",
      penerangan: "Kerjasama dengan klinik panel swasta untuk menyediakan khidmat pemeriksaan kesihatan am serta subsidi khas rawatan pencucian buah pinggang.",
      images: [
        "https://picsum.photos/id/1040/400/250",
        "https://picsum.photos/id/1041/400/250",
        "https://picsum.photos/id/1042/400/250",
        "https://picsum.photos/id/1043/400/250",
        "https://picsum.photos/id/1044/400/250",
      ]
    }
  ],
  2024: [
    {
      id: 4,
      tajuk: "Misi Bantuan Pasca Banjir Pantai Timur",
      tarikh: "Disember 2024",
      status: "SELESAI",
      penerangan: "Membantu membersihkan rumah mangsa banjir serta mengagihkan tilam, bantal, dan barangan elektrik asas.",
      images: [
        "https://picsum.photos/id/1050/400/250",
        "https://picsum.photos/id/1051/400/250",
        "https://picsum.photos/id/1052/400/250",
        "https://picsum.photos/id/1053/400/250",
        "https://picsum.photos/id/1054/400/250",
      ]
    }
  ],
  2023: [
    {
      id: 5,
      tajuk: "Pelancaran Dana Didik Asnaf 2023",
      tarikh: "Ogos 2023",
      status: "SELESAI",
      penerangan: "Penyerahan komputer riba terpakai yang telah dinaik taraf kepada pelajar asnaf yang berjaya melanjutkan pelajaran.",
      images: [
        "https://picsum.photos/id/1060/400/250",
        "https://picsum.photos/id/1061/400/250",
        "https://picsum.photos/id/1062/400/250",
        "https://picsum.photos/id/1063/400/250",
        "https://picsum.photos/id/1064/400/250",
      ]
    }
  ]
};

export default function ProgramPage() {
  const senaraiTahun = [2026, 2025, 2024, 2023];
  const [tahunAktif, setTahunAktif] = useState(2026);
  const [selectedImage, setSelectedImage] = useState(null); // Untuk fungsi Popup

  // Komponen Kecil untuk Navigasi Tab Tahun (Boleh diguna di atas & bawah)
  const TabsTahun = () => (
    <div className="flex justify-center items-center gap-4 my-8 border-b border-t border-gray-200 py-3 bg-gray-50 rounded-lg">
      {senaraiTahun.map((tahun) => (
        <button
          key={tahun}
          onClick={() => setTahunAktif(tahun)}
          className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all ${
            tahunAktif === tahun
              ? "bg-red-600 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          Aktiviti {tahun}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-12">
      {/* Header Banner */}
      <div className="bg-black text-white text-center py-16 px-4">
        <span className="bg-red-900/50 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-red-700">
          JEJAK KHIDMAT
        </span>
        <h1 className="text-4xl font-extrabold mt-3">Program & Aktiviti</h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-2 text-sm">
          Sorotan laporan ringkas serta garis masa pelaksanaan program kebajikan yang telah dijayakan hasil sumbangan berterusan para dermawan.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        {/* TAB TAHUN (ATAS) */}
        <TabsTahun />

        {/* Senarai Garis Masa Kandungan */}
        <div className="relative border-l-2 border-red-500 ml-4 md:ml-6 space-y-12 my-10">
          {dataProgram[tahunAktif] && dataProgram[tahunAktif].length > 0 ? (
            dataProgram[tahunAktif].map((prog, index) => (
              <div key={prog.id} className="relative pl-8 md:pl-10">
                {/* Penunjuk Bulatan Nombor */}
                <span className="absolute -left-3.5 top-1 bg-white border-2 border-red-500 text-red-600 rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shadow-sm">
                  {index + 1}
                </span>

                {/* Kad Kandungan */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{prog.tajuk}</h3>
                      <span className="text-xs text-gray-400 font-medium">{prog.tarikh}</span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-md">
                      {prog.status}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{prog.penerangan}</p>

                  {/* MINI IMAGE CAROUSEL / GRID BARIS GAMBAR (Maksimum 5 Gambar) */}
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Galeri Foto (Sila klik untuk besarkan):</p>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
                      {prog.images.map((imgUrl, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          onClick={() => setSelectedImage(imgUrl)}
                          className="relative min-w-[100px] h-[70px] md:min-w-[120px] md:h-[80px] rounded-lg overflow-hidden cursor-pointer border border-gray-200 hover:scale-105 hover:border-red-500 transition-all shadow-sm"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Slide ${imgIdx + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-10">Tiada rekod program ditemui untuk tahun ini.</p>
          )}
        </div>

        {/* TAB TAHUN (BAWAH) */}
        <TabsTahun />
      </div>

      {/* POPUP MODAL LIGHTBOX (Sama konsep macam popup QR Code kelmanin) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)} // Klik luar untuk tutup
        >
          <div 
            className="relative max-w-3xl w-full bg-white p-2 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Mengelakkan modal tertutup bila klik dalam gambar
          >
            {/* Butang Tutup (Pangkah) */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/20 text-white hover:bg-white/40 hover:text-white rounded-full p-2 text-sm font-bold transition-all"
            >
              ✕ Tutup
            </button>
            
            {/* Gambar Besar */}
            <div className="rounded-xl overflow-hidden bg-gray-100 max-h-[75vh] flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Paparan Besar" 
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
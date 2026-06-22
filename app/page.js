"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // State untuk mengawal indeks gambar slider aktif
  const [currentSlide, setCurrentSlide] = useState(0);

  // Senarai gambar latar belakang untuk Hero Banner (Simpan fail fail ini dalam folder public)
  const slides = [
    "/main_banner_1.jpg", // Gambar Kempen 1
    "/main_banner_2.jpg", // Gambar Kempen 2
    "/main_banner_3.jpg", // Gambar Kempen 3
  ];

  // Kesan auto-play untuk pertukaran slaid (Setiap 5 saat)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Fungsi navigasi slaid
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 3 Program Sorotan Utama Tahun 2026 daripada fail PDF
  const highlightPrograms = [
    {
      id: 1,
      title: 'Projek IKHTIAR Foundation Prihatin: Pembinaan Masjid Kinandusan Ranau',
      date: 'Jun – Julai 2026',
      beneficiaries: '2,000 penduduk',
      description: 'Inisiatif pembangunan infrastruktur komuniti bagi menyediakan ruang ibadah yang selesa dan kondusif untuk penduduk luar bandar di Sabah.',
      tag: 'Pembangunan Komuniti',
    },
    {
      id: 2,
      title: 'Projek Fun Run Save Harimau Malaysia: Call To Action',
      date: 'Ogos 2026',
      beneficiaries: '50,000 pelawat',
      description: 'Program kesedaran alam sekitar global dan pengumpulan dana di Putrajaya bagi memelihara khazanah fauna negara daripada ancaman kepupusan.',
      tag: 'Kelestarian Alam Sekitar',
    },
    {
      id: 3,
      title: 'Kembara Qurban IKHTIAR Foundation: Selangor 2026',
      date: 'Jun 2026',
      beneficiaries: '1,000 keluarga',
      description: 'Program agihan daging qurban tahunan yang disasarkan terus kepada komuniti asnaf dan golongan yang memerlukan di sekitar negeri Selangor.',
      tag: 'Khidmat Masyarakat',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section dengan Image Slider Interaktif */}
      <section className="relative bg-zinc-950 text-white overflow-hidden py-24 lg:py-32 min-h-[500px] lg:min-h-[600px] flex items-center">
        
        {/* Layer Gambar Slider di Belakang */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-20" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}

        {/* Gradient Overlay Gelap Seragam */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-zinc-950/30 to-transparent"></div>
        
        {/* Konten Utama Terapung di Atas Slider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 text-red-500 border border-red-500/20 tracking-wider uppercase mb-6 backdrop-blur-sm">
              Ikhtiar Foundation Malaysia
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6 drop-shadow-lg">
              Meneruskan Tradisi <br />
              <span className="text-red-600">&quot;Hidup Untuk Memberi&quot;</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed mb-10 max-w-2xl drop-shadow">
              Kami berdiri di atas inisiatif &quot;usaha&quot; (IKHTIAR) untuk membina instrumen bermakna dalam meringankan bebanan isu sosial dan menyantuni golongan asnaf di dalam serta luar negara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 active:bg-red-800 transition-all shadow-md text-center z-20"
              >
                Sumbang Sekarang
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-zinc-700 hover:border-gray-500 text-base font-semibold rounded-lg text-gray-300 hover:text-white bg-zinc-900/50 hover:bg-zinc-900 transition-all text-center z-20"
              >
                Mengenai Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Butang Navigasi Manual (Kiri & Kanan) - Muncul pada paparan desktop desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-zinc-900/50 hover:bg-red-600 border border-zinc-800 text-white transition-colors focus:outline-none"
          aria-label="Slaid Kiri"
        >
          &larr;
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-zinc-900/50 hover:bg-red-600 border border-zinc-800 text-white transition-colors focus:outline-none"
          aria-label="Slaid Kanan"
        >
          &rarr;
        </button>

        {/* Indikator Titik Slider (Dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 bg-red-600" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
              }`}
              aria-label={`Pergi ke slaid ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Pengenalan & Objektif */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xs font-bold text-red-600 tracking-widest uppercase">
              Platform Kebajikan Global
            </h2>
            <p className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Inisiatif Bermakna Untuk Meringankan Beban Sosial
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              IKHTIAR Foundation diwujudkan dengan berasaskan kepada inisiatif usaha nyata bagi mewujudkan sebuah instrumen penting untuk membantu mengurangkan bebanan isu sosial secara inklusif dan global.
            </p>
          </div>

          {/* Hadis & Quran Card */}
          <div className="lg:col-span-7 bg-zinc-50 border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm relative">
            <div className="absolute top-6 right-6 text-red-100">
              <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.161 3.735-4.23 7.004h4.246v8.87h-11v-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.161 3.735-4.23 7.004h4.246v8.87h-11v-6.275z" />
              </svg>
            </div>
            <div className="relative z-10 space-y-6">
              <div className="border-l-4 border-red-600 pl-4">
                <p className="text-sm italic text-gray-700 font-medium leading-relaxed">
                  &quot;Sesiapa yang melepaskan salah satu kesusahan dunia daripada seorang Mukmin, maka Allah akan melepaskan salah satu kesusahan pada hari kiamat daripadanya. Sesiapa memudahkan orang yang sedang dilanda kesulitan, maka Allah akan memudahkannya di dunia dan akhirat.&quot;
                </p>
                <span className="block mt-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  — Hadis Riwayat Muslim No. 2699
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tunjang Aktiviti Utama */}
      <section className="bg-zinc-50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-red-600 tracking-widest uppercase mb-3">
              Fokus Utama Kami
            </h2>
            <p className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              Lima Aktiviti Utama Penubuhan
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Tumpuan strategik kami dalam menyantuni kebajikan penerima manfaat melalui perancangan yang tersusun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { code: 'PKM', label: 'Khidmat Masyarakat' },
              { code: 'PPL', label: 'Pendidikan & Latihan' },
              { code: 'PPP', label: 'Peningkatan Pendapatan' },
              { code: 'PPK', label: 'Pembangunan Komuniti' },
              { code: 'PKAS', label: 'Kelestarian Alam Sekitar' },
            ].map((act, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md hover:border-red-100 transition-all group"
              >
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-sm mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {act.code}
                </div>
                <h3 className="font-bold text-zinc-900 text-sm leading-tight">
                  {act.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sorotan Program 2026 */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-xs font-bold text-red-600 tracking-widest uppercase mb-3">
              Perancangan Aktif
            </h2>
            <p className="text-3xl font-extrabold text-zinc-900 tracking-tight">
              Sorotan Program Utama 2026
            </p>
          </div>
          <Link
            href="/programs"
            className="text-red-600 hover:text-red-700 text-sm font-semibold inline-flex items-center gap-1.5 mt-4 md:mt-0 group transition-all"
          >
            Lihat Semua Jadual Program
            <span className="transform group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white border border-gray-150 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col h-full"
            >
              <div className="p-6 flex-grow flex flex-col">
                <span className="inline-block self-start px-2.5 py-1 text-[10px] font-bold tracking-wider text-red-600 bg-red-50 rounded-md uppercase mb-4">
                  {prog.tag}
                </span>
                <h3 className="text-base font-bold text-zinc-900 mb-3 leading-snug">
                  {prog.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                  {prog.description}
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{prog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{prog.beneficiaries}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom Call-To-Action (CTA) */}
      <section className="bg-zinc-950 text-white py-16 relative overflow-hidden border-t border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Mari Bersama Menyantuni Golongan Asnaf
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Sumbangan anda membolehkan kami merangka program kebajikan berterusan demi membantu meringankan kesulitan saudara seagama dan sesama manusia yang memerlukan bantuan mendesak.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all shadow-md"
            >
              Layari Halaman Sumbangan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
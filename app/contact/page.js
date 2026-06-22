"use client";

import { useState } from "react";

export default function ContactPage() {
  // State untuk mengawal buka/tutup modal QR Code
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="bg-zinc-50 min-h-screen font-sans">
      
      {/* 1. Header Section */}
      <section className="relative bg-zinc-950 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-red-500 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
            Sumbangan & Pertanyaan
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Hubungi & Sumbangan
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Salurkan seikhlas hati sumbangan anda demi kelangsungan operasi bantuan asnaf, ataupun kemukakan sebarang pertanyaan am kepada pihak pengurusan kami.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Kiri: Info Urusan Bank & Alamat Rasmi */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-l-4 border-red-600 pl-4">
                Maklumat Akaun Rasmi
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Bagi memastikan audit kewangan yang telus, sila pastikan semua transaksi sumbangan tunai dipindahkan terus ke akaun bank utama milik yayasan di bawah:
              </p>
            </div>

            {/* Kad Bank Perbadanan dengan Butang QR */}
            <div className="bg-zinc-900 text-white p-6 md:p-8 rounded-2xl shadow-lg border border-zinc-800 relative overflow-hidden space-y-6">
              <div className="absolute right-4 top-4 text-4xl opacity-10 font-bold select-none">BANKING</div>
              
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-red-500">Nama Pemegang Akaun</span>
                <p className="text-base md:text-lg font-bold tracking-wide">IKHTIAR FOUNDATION MALAYSIA</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Nama Bank</span>
                  <p className="text-sm md:text-base font-semibold">Bank Kerjasama Rakyat</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">Nombor Akaun</span>
                  <p className="text-sm md:text-base font-mono font-bold tracking-xl text-red-400">11-0194685-2</p>
                </div>
              </div>

              {/* Butang Scan QR Code Baru */}
              <div className="pt-2">
                <button
                  onClick={() => setShowQR(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-700 border border-zinc-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm group text-red-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  Papar QR Code Imbasan
                </button>
              </div>

              <div className="bg-zinc-800/60 p-4 rounded-xl border border-zinc-700/50 text-xs text-zinc-400 leading-relaxed">
                💡 <strong>Nota Resit Pelepasan Cukai:</strong> Sila simpan bukti pindahan wang (*receipt*) anda dan hantarkan salinan digital tersebut ke emel rasmi kami untuk tujuan rekod penyerahan resit rasmi yayasan.
              </div>
            </div>

            {/* Alamat Berdaftar & Surat Menyurat */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-950 tracking-tight border-l-4 border-red-600 pl-4">
                Alamat Berdaftar & Surat Menyurat
              </h3>
              
              <div className="space-y-5 text-zinc-600 text-xs md:text-sm">
                <div className="flex items-start gap-3 bg-zinc-50 p-3.5 rounded-xl border border-zinc-100">
                  <span className="text-lg mt-0.5">🏢</span>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm mb-1">Pejabat Operasi IF</h4>
                    <p className="leading-relaxed">No. 71A, Aras 2, Jalan Diplomatik, Presint Diplomatik, 62050 Putrajaya.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-zinc-50 p-3.5 rounded-xl border border-zinc-100">
                  <span className="text-lg mt-0.5">📍</span>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm mb-1">Cawangan Perak</h4>
                    <p className="leading-relaxed">No. 71, Batu 28½, Padang Ampang, 33000 Kuala Kangsar, Perak.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-zinc-50 p-3.5 rounded-xl border border-zinc-100">
                  <span className="text-lg mt-0.5">📍</span>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm mb-1">Cawangan Selangor</h4>
                    <p className="leading-relaxed">B-17-15, Blok B, Lakeview Apartment, Taman Jasa Perwira, Batu Caves, 68100 Selayang, Selangor.</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p className="flex items-center gap-2">
                    <span>📧</span>
                    <span className="font-medium text-zinc-800">info@ikhtiarfoundation.org.my</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <span className="font-medium text-zinc-800">+603-8888 7766</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: Borang Mesej Digital */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-zinc-950 tracking-tight">Hantar Mesej Segera</h3>
              <p className="text-zinc-500 text-xs md:text-sm">
                Mempunyai cadangan usahasama, aduan, atau rujukan kes asnaf? Isi borang ringkas ini.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase">Nama Penuh</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Alfian Zaidi" 
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-zinc-50/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase">Alamat Emel</label>
                  <input 
                    type="email" 
                    placeholder="contoh@emel.com" 
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-zinc-50/50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase">Subjek / Tujuan</label>
                <input 
                  type="text" 
                  placeholder="Pertanyaan Sumbangan / Rujukan Kes Asnaf" 
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-zinc-50/50"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase">Mesej / Perincian</label>
                <textarea 
                  rows="4" 
                  placeholder="Tuliskan mesej atau perincian kes anda di sini..." 
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-zinc-50/50 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Hantar Mesej
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 3. MODAL POP-UP QR CODE INTERAKTIF */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all animate-fade-in">
          <div className="relative bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl border border-zinc-100 space-y-4">
            
            {/* Tajuk Pop-up */}
            <div>
              <h3 className="text-lg font-bold text-zinc-900">QR Code DuitNow</h3>
              <p className="text-xs text-zinc-500">Ikhtiar Foundation Malaysia (Bank Rakyat)</p>
            </div>

            {/* Gambar QR Code */}
            <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 flex justify-center items-center aspect-square w-full max-w-[240px] mx-auto">
              <img 
                src="/qr-bank.png"  // <-- Letakkan gambar file QR code DuitNow Bie di sini
                alt="DuitNow QR Code Ikhtiar Foundation" 
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-[11px] text-zinc-500 leading-normal">
              Imbas kod QR di atas menggunakan aplikasi perbankan mudah alih (*Mobile Banking*) atau e-dompet anda untuk membuat sumbangan langsung.
            </p>

            {/* Butang Tutup Pop-up */}
            <button
              onClick={() => setShowQR(false)}
              className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-colors focus:outline-none"
            >
              Tutup Paparan
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
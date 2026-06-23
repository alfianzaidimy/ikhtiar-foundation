import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Info Ringkas & Logo */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 bg-white rounded-lg p-1">
                <Image
                  src="/footer.JPG"
                  alt="Ikhtiar Foundation Logo"
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="block font-bold text-white text-sm tracking-wider leading-none">
                  IKHTIAR FOUNDATION
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-widest mt-0.5 block">
                  MALAYSIA (PPAB - 10/2022)
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Sebuah yayasan berdaftar yang meneruskan tradisi kecemerlangan khidmat masyarakat menerusi inisiatif kebajikan yang mampan dan telus.
            </p>
            <p className="text-xs text-red-500 font-semibold tracking-wider italic">
              &quot;Hidup Untuk Memberi&quot;
            </p>
          </div>

          {/* Column 2: Pautan Pintas */}
          <div className="flex flex-col space-y-4 md:pl-12">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">
              Pautan Pintas
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Laman Utama
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/beneficiaries" className="hover:text-red-500 transition-colors">
                  Penerima Manfaat
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-red-500 transition-colors">
                  Program & Aktiviti
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">
                  Hubungi & Sumbangan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Alamat & Media Sosial */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">
              Pejabat Operasi
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              No. 71A, Aras 2, Jalan Diplomatik, <br />
              Presint Diplomatik, <br />
              62050 Putrajaya, Malaysia.
            </p>
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Ikuti Media Sosial Kami
              </h4>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=100088326274474" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-red-600 text-gray-400 hover:text-white p-2.5 rounded-full transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ikhtiar.foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-red-600 text-gray-400 hover:text-white p-2.5 rounded-full transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {currentYear} Ikhtiar Foundation Malaysia (PPAB - 10/2022). Hak Cipta Terpelihara.
          </p>
          <p className="text-[11px]">
            Diuruskan di bawah Akta Pemegang Amanah (Pemerbadanan) 1952 [Akta 258] (BHEUU, JPM).
          </p>
        </div>
      </div>
    </footer>
  );
}

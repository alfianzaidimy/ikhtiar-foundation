import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Tentang Kami | Ikhtiar Foundation',
  description: 'Kenali latar belakang, visi, misi, dan barisan kepimpinan Ikhtiar Foundation Malaysia.',
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Ketelusan (Transparency)",
      desc: "Setiap sen sumbangan diuruskan dengan rekod audit yang jelas dan telus demi menjaga amanah para penyumbang.",
      icon: "📊"
    },
    {
      title: "Kelestarian (Sustainability)",
      desc: "Inisiatif kami tidak bersifat sementara, sebaliknya berfokus kepada impak jangka panjang yang mampu mengubah taraf hidup.",
      icon: "🌱"
    },
    {
      title: "Ihsaaniyah (Compassion)",
      desc: "Menyantuni golongan sasar dengan penuh rasa hormat, kasih sayang, dan menjaga maruah mereka sebagai manusia.",
      icon: "❤️"
    }
  ];

  return (
    <div className="bg-zinc-50 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative bg-zinc-950 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="text-red-500 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
            Mengenali Kami
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Sejarah & Agenda Perjuangan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Ikhtiar Foundation
            </span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Berdiri atas paksi kemanusiaan untuk membasmi kemiskinan, menyemarakkan pendidikan, dan menyediakan sokongan kritikal buat komuniti asnaf di Malaysia.
          </p>
        </div>
      </section>

      {/* 2. Pengenalan & Latar Belakang */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight border-l-4 border-red-600 pl-4">
              Latar Belakang Yayasan
            </h2>
            <div className="text-zinc-600 text-sm md:text-base space-y-4 leading-relaxed">
              <p>
                <strong>Ikhtiar Foundation Malaysia</strong> telah didaftarkan secara rasmi di bawah Akta Pemegang Amanah (Pemerbadanan) 1952 [Akta 258] melalui Bahagian Hal Ehwal Undang-Undang, Jabatan Perdana Menteri (BHEUU, JPM) dengan nombor pendaftaran <strong>PPAB - 10/2022</strong>.
              </p>
              <p>
                Ditubuhkan hasil kesedaran kolektif sekumpulan profesional dan aktivis kemasyarakatan, yayasan ini berhasrat menjadi jambatan utuh yang menghubungkan para dermawan dengan golongan yang terpinggir daripada arus pembangunan ekonomi.
              </p>
              <p>
                Menerusi cogan kata <em className="text-red-600 font-semibold">&quot;Hidup Untuk Memberi&quot;</em>, kami percaya bahawa bantuan yang terbaik adalah bantuan yang memperkasakan penerimanya untuk berdikari pada masa hadapan.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
  <Image 
    src="/main_banner_1.jpg" // Tukar nama fail ni mengikut nama gambar sebenar Bie
    alt="Visual Korporat Ikhtiar Foundation"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="bg-white border-y border-zinc-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Visi */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 flex flex-col justify-between">
              <div>
                <span className="text-2xl">👁️</span>
                <h3 className="text-xl font-bold text-zinc-950 mt-4 mb-3">Visi Kami</h3>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  Menjadi sebuah institusi kebajikan teraju di Malaysia yang diyakini, telus, dan mampan dalam mentransformasikan komuniti asnaf ke arah kehidupan yang bermaruah dan berdaya saing.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 flex flex-col justify-between">
              <div>
                <span className="text-2xl">🎯</span>
                <h3 className="text-xl font-bold text-zinc-950 mt-4 mb-3">Misi Kami</h3>
                <ul className="text-zinc-600 text-sm md:text-base space-y-2.5 list-disc pl-5 leading-relaxed">
                  <li>Merangka dan menyalurkan bantuan kebajikan, perubatan, serta pasca-bencana secara sistematik dan berfokus.</li>
                  <li>Menyediakan dana serta prasarana pendidikan alternatif yang inklusif untuk anak-anak golongan kurang berkemampuan.</li>
                  <li>Membangunkan modal insan komuniti asnaf melalui program latihan kemahiran bagi memecah rantaian kemiskinan tegar.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Nilai Teras */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-12">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
            Nilai Teras Pegangan Kami
          </h2>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">
            Prinsip utama yang memandu setiap langkah, keputusan, dan operasi kerja amal kami di lapangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-zinc-200/80 text-left shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center text-lg">
                {val.icon}
              </div>
              <h4 className="font-bold text-zinc-900 text-base">{val.title}</h4>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="bg-zinc-950 text-white py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-5">
          <h3 className="text-xl md:text-2xl font-bold">
            Sokong Usaha Murni Kami Hari Ini
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Setiap sumbangan atau sokongan moral daripada anda amat bermakna dalam melancarkan operasi bantuan buat mereka yang memerlukan.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-all shadow-sm"
            >
              Hubungi & Sumbang
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

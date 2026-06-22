import Link from 'next/link';

export const metadata = {
  title: 'Penerima Manfaat | Ikhtiar Foundation',
  description: 'Maklumat mengenai kriteria kelayakan, golongan sasar, dan statistik agihan bantuan Ikhtiar Foundation Malaysia.',
};

export default function BeneficiariesPage() {
  const categories = [
    {
      title: "Fakir & Miskin (Asnaf)",
      desc: "Bantuan keperluan asas bulanan, dana sara hidup, dan pembaikan prasarana rumah kediaman yang uzur.",
      icon: "🏠",
      tag: "Fokus Utama"
    },
    {
      title: "Pendidikan Anak Asnaf",
      desc: "Agihan beg sekolah, pakaian seragam, komputer riba, serta tajaan yuran pengajian kolej/universiti buat anak-anak cemerlang.",
      icon: "🎓",
      tag: "Pendidikan"
    },
    {
      title: "Ibu Tunggal & Wanita",
      desc: "Sokongan moral, khidmat bimbingan, dan penyediaan geran mini mesin jahitan atau ketuhar untuk memulakan perniagaan kecil.",
      icon: "👩‍👦",
      tag: "Pemerkasaan"
    },
    {
      title: "Sakit Kronik & Warga Emas",
      desc: "Sumbangan kos ubat-ubatan, pembelian kerusi roda, katil khas hospital, serta pembiayaan rawatan dialisis berkala.",
      icon: "🧓",
      tag: "Kesihatan"
    }
  ];

  const stats = [
    { value: "4,500+", label: "Keluarga Dibantu" },
    { value: "RM 1.2M", label: "Dana Diagihkan" },
    { value: "350+", label: "Pelajar Ditaja" },
    { value: "14+", label: "Daerah Terlibat" }
  ];

  return (
    <div className="bg-zinc-50 min-h-screen font-sans">
      
      {/* 1. Header Section */}
      <section className="relative bg-zinc-950 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-red-500 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
            Amanah & Agihan
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Penerima Manfaat
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Mekanisme saringan yang ketat dijalankan bagi memastikan setiap ringgit sumbangan masyarakat sampai ke tangan mereka yang benar-benar berhak.
          </p>
        </div>
      </section>

      {/* 2. Stats Quick View */}
      <section className="bg-white border-b border-zinc-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl md:text-4xl font-extrabold text-red-600">{stat.value}</div>
                <div className="text-zinc-500 font-medium text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Kategori Penerima Bantuan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
            Golongan Sasar Pembelaan
          </h2>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto">
            Sumbangan anda disalurkan secara bersasar merangkumi pelbagai kluster kebajikan utama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="text-3xl bg-zinc-50 p-3 rounded-xl border border-zinc-100">{cat.icon}</div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    {cat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">{cat.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Kriteria Kelayakan & Cara Memohon */}
      <section className="bg-zinc-100 border-t border-zinc-200 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 border-l-4 border-red-600 pl-3">
              Kriteria & Proses Permohonan Bantuan
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Bagi mengekalkan ketelusan, setiap permohonan individu mahupun rujukan komuniti mestilah memenuhi syarat asas pendapatan isi rumah di bawah garis kemiskinan semasa (PGK) dan melepasi sesi siasatan serta lawatan turun padang oleh pegawai lapangan kami.
            </p>
            <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200/60 text-xs md:text-sm text-zinc-500 flex items-start gap-3">
              <span className="text-lg mt-0.5">ℹ️</span>
              <p className="leading-relaxed">
                Adakah anda mengenali mana-mana individu atau keluarga di kawasan Putrajaya & Selangor yang memerlukan pembelaan segera? Sila kemukakan maklumat melalui halaman hubungan untuk semakan pantas unit kebajikan kami.
              </p>
            </div>
            <div className="pt-2 text-center sm:text-left">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-zinc-900 hover:bg-zinc-800 transition-all shadow-sm"
              >
                Hubungi Unit Kebajikan
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
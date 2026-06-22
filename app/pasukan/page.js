export const metadata = {
  title: 'Barisan Kepimpinan | Ikhtiar Foundation',
  description: 'Kenali barisan pengurusan dan jawatankuasa tertinggi yang memacu misi kemainan Ikhtiar Foundation Malaysia.',
};

// Data barisan pengurusan yayasan
const teamMembers = [
  {
    id: 1,
    name: 'YBhg. Dato’ Seri Dr. Ahmad Jailani bin Muhamed Yunus',
    role: 'Pengasas / Pengerusi',
    image: '/DS_Ahmad_Jailani.png',
  },
  {
    id: 2,
    name: 'Encik Khairul Azar bin Hj. Omar',
    role: 'Pengasas / Pengerusi',
    image: '/edit.JPG',
  },
  {
    id: 3,
    name: 'Puan Khadijah binti Ishak',
    role: 'Setiausaha Kehormat IF',
    image: '/edit.JPG',
  },
  {
    id: 4,
    name: 'Encik `Aizul Kamil bin Ibrahim',
    role: 'Setiausaha Kehormat IF',
    image: '/edit.JPG',
  },
  {
    id: 5,
    name: 'Tengku Amni',
    role: 'Pengurus Kewangan',
    image: '/edit.JPG',
  },
  {
    id: 6,
    name: 'Azly Rafil',
    role: 'Pengurus Pemasaran',
    image: '/edit.JPG',
  },
  {
    id: 7,
    name: 'Alfian Zaidi',
    role: 'Ketua Pegawai Teknologi (CTO)',
    image: '/edy.png',
  },
];

export default function PasukanPage() {
  return (
    <div className="bg-zinc-50 min-h-screen font-sans">
      
      {/* 1. Header Section (Dah diseragamkan dengan kotak hitam penuh macam rujukan imej Bie) */}
      <section className="relative bg-zinc-950 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-red-500 font-bold tracking-widest uppercase text-xs px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
            Our Team
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Barisan Pengurusan <span className="text-red-600 block sm:inline">Yayasan</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Sinergi kepimpinan yang komited dalam menguruskan amanah sumbangan demi membela kebajikan asnaf.
          </p>
        </div>
      </section>

      {/* 2. Team Grid Layout Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-gradient-to-b from-red-950 to-zinc-950 rounded-2xl overflow-hidden shadow-md border border-zinc-800/50 aspect-[3/4] flex flex-col justify-end transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Overlay Logo Halus di Penjuru Atas Kanan */}
              <div className="absolute top-4 right-4 text-xs font-bold text-white/40 tracking-wider select-none uppercase">
                Ikhtiar
              </div>

              {/* Gambar Ahli */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-95 transition-all duration-500"
                />
                {/* Gradient shading bawah kad untuk teks */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Informasi Nama & Jawatan */}
              <div className="relative z-10 p-5 space-y-0.5 text-white">
                <h3 className="font-extrabold text-base md:text-lg tracking-wide text-zinc-100 group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-red-400 tracking-wide uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

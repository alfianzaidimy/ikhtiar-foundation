export const metadata = {
  title: 'Barisan Kepimpinan | Ikhtiar Foundation',
  description: 'Kenali barisan pengurusan dan jawatankuasa tertinggi yang memacu misi kemainah Ikhtiar Foundation Malaysia.',
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
    image: '/edit.png',
  },
  {
    id: 3,
    name: 'Puan Khadijah binti Ishak',
    role: 'Setiausaha Kehormat IF',
    image: '/edit.png',
  },
  {
    id: 4,
    name: 'Encik `Aizul Kamil bin Ibrahim',
    role: 'Setiausaha Kehormat IF',
    image: '/edit.png',
  },
  {
    id: 5,
    name: 'Tengku Amni',
    role: 'Pengurus Kewangan',
    image: '/edit.png',
  },
  {
    id: 6,
    name: 'Azly Rafil',
    role: 'Pengurus Pemasaran',
    image: '/edit.png',
  },
  {
    id: 7,
    name: 'Alfian Zaidi Bin Mohamad Yusof',
    role: 'Ketua Pegawai Teknologi (CTO)',
    image: '/edy.png',
  },
];

export default function PasukanPage() {
  return (
    <div className="bg-zinc-50 min-h-screen font-sans">
      
      {/* 1. Header Section */}
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
              {/* Watermark LOGO RASMI IKHTIAR (White Khat) di Penjuru Atas Kanan */}
              <div className="absolute top-4 right-3 z-20 select-none opacity-80 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-8 text-white" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 2C14.536 2 2 14.536 2 30C2 45.464 14.536 58 30 58C45.464 58 58 45.464 58 30C58 14.536 45.464 2 30 2ZM30 52C17.85 52 8 42.15 8 30C8 17.85 17.85 8 30 8C42.15 8 52 17.85 52 30C52 42.15 42.15 52 30 52Z" fill="currentColor"/>
                  <path d="M24 18.5C24 17.6716 24.6716 17 25.5 17C26.3284 17 27 17.6716 27 18.5V41.5C27 42.3284 26.3284 43 25.5 43C24.6716 43 24 42.3284 24 41.5V18.5Z" fill="currentColor"/>
                  <path d="M33 18.5C33 17.6716 33.6716 17 34.5 17C35.3284 17 36 17.6716 36 18.5V41.5C36 42.3284 35.3284 43 34.5 43C33.6716 43 33 42.3284 33 41.5V18.5Z" fill="currentColor"/>
                  <path d="M42 28.5C42 27.6716 42.6716 27 43.5 27C44.3284 27 45 27.6716 45 28.5V41.5C45 42.3284 44.3284 43 43.5 43C42.6716 43 42 42.3284 42 41.5V28.5Z" fill="currentColor"/>
                  <path d="M15 28.5C15 27.6716 15.6716 27 16.5 27C17.3284 27 18 27.6716 18 28.5V41.5C18 42.3284 17.3284 43 16.5 43C15.6716 43 15 42.3284 15 41.5V28.5Z" fill="currentColor"/>
                  <circle cx="30" cy="48" r="2" fill="currentColor"/>
                  <circle cx="30" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>

              {/* Gambar Ahli / Kotak Kad */}
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

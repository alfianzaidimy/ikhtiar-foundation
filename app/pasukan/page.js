export const metadata = {
  title: 'Barisan Kepimpinan | Ikhtiar Foundation',
  description: 'Kenali barisan pengurusan dan jawatankuasa tertinggi yang memacu misi kemainah Ikhtiar Foundation Malaysia.',
};

// Data barisan kepimpinan dan pengurusan yayasan (ID disusun semula secara teratur)
const teamMembers = [
  {
    id: 1,
    name: 'Dato’ Seri Dr. Ahmad Jailani bin Muhamed Yunus',
    role: 'Pengasas / Pengerusi',
    image: '/DS_Ahmad_Jailani.png',
  },
  {
    id: 2,
    name: 'Khairul Azar bin Omar',
    role: 'Ahli Lembaga Pemegang Amanah',
    image: '/edit.png',
  },
  {
    id: 3,
    name: 'Datuk Abdul Halim bin Hamzah',
    role: 'Ahli Lembaga Pemegang Amanah',
    image: '/edit.png',
  },
  {
    id: 4,
    name: 'Dato’ Shamshuzaman bin Sulaiman',
    role: 'Ahli Lembaga Pemegang Amanah',
    image: '/edit.png',
  },
  {
    id: 5,
    name: 'Dato’ Jabar Azman bin Jaafar',
    role: 'Ahli Lembaga Pemegang Amanah',
    image: '/edit.png',
  },
  {
    id: 6,
    name: 'Wan Khairul Anuar bin Wan Mohd Zain',
    role: 'Ahli Lembaga Pemegang Amanah',
    image: '/edit.png',
  },
  {
    id: 7,
    name: 'Ahmad Abdul Hadi bin Hamzah',
    role: 'Ahli Lembaga Pemegang Amanah',
    image: '/edit.png',
  },
  {
    id: 8,
    name: 'Syed Amiruddeen bin Mohd Shaid',
    role: 'Ahli Lembaga Pemegang Amanah',
    image: '/edit.png',
  },
  {
    id: 9,
    name: 'YM Raja Noor Afiz bin Raja Noor Afandi',
    role: 'Ahli Lembaga Pemegang Amanah',
    image: '/edit.png',
  },
  {
    id: 10,
    name: 'Khadijah binti Ishak',
    role: 'Setiausaha Kehormat',
    image: '/Khadija.jpg',
  },
  {
    id: 11,
    name: 'Nik Norbaizura binti Nik Wil',
    role: 'Penolong Setiausaha Kehormat',
    image: '/edit.png',
  },
  {
    id: 12,
    name: '’Aizul Kamil bin Ibrahim',
    role: 'Bendahari Kehormat',
    image: '/Aizul .jpg',
  },
  {
    id: 13,
    name: 'Nilenurnilam binti Ahmad',
    role: 'Penolong Bendahari Kehormat',
    image: '/edit.png',
  },
  {
    id: 14,
    name: 'Nurul Ain binti Abd Rahman',
    role: 'Setiausaha Eksekutif',
    image: '/edit.png',
  },
  {
    id: 15,
    name: 'Nur Ilyani Syuhada binti Nasri',
    role: 'Setiausaha Eksekutif II',
    image: '/edit.png',
  },
  {
    id: 16,
    name: 'Osmainiza binti Osman',
    role: 'Penolong Setiausaha Eksekutif (Pengurusan Rekod Program & Keahlian)',
    image: '/edit.png',
  },
  {
    id: 17,
    name: 'Aziz bin Daud',
    role: 'Pengurus Pendanaan',
    image: '/edit.png',
  },
  {
    id: 18,
    name: 'Stanley Low',
    role: 'Pengurus Projek Khas ESG',
    image: '/edit.png',
  },
  {
    id: 19,
    name: 'Syed Muhammad Afiff bin Syed Zakaria',
    role: 'Pengurus Komunikasi Korporat',
    image: '/edit.png',
  },
  {
    id: 20,
    name: 'Abdul Razak Ismail',
    role: 'Pengurus Pelaburan',
    image: '/edit.png',
  },
  {
    id: 21,
    name: 'Azam bin Azmi',
    role: 'Pengurus Hartanah dan Aset',
    image: '/edit.png',
  },
  {
    id: 22,
    name: 'Alfian Zaidi bin Mohamad Yusof',
    role: 'Pengurus Digital IKHTIAR Foundation',
    image: '/edy.png',
  },
  {
    id: 23,
    name: 'Nadiah Syahirah binti Ahmad Jailani',
    role: 'Pengurus Pejabat Operasi IKHTIAR Foundation',
    image: '/edit.png',
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
              {/* Logo Vektor Ikhtiar Sebenar (Merah & Titik Hitam) di Penjuru Atas Kanan */}
              <div className="absolute top-3 right-3 z-25 select-none opacity-80 group-hover:opacity-100 transition-opacity">
                <svg className="w-8 h-10" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Titik-titik atas (Hitam) */}
                  <rect x="35" y="2" width="10" height="10" transform="rotate(45 35 2)" fill="#111111" />
                  <rect x="55" y="2" width="10" height="10" transform="rotate(45 55 2)" fill="#111111" />
                  <rect x="70" y="12" width="8" height="8" transform="rotate(45 70 12)" fill="#111111" />

                  {/* Badan Khat Utama (Merah Terang) */}
                  <path d="M25 30H32V90H25V30Z" fill="#E53E3E" />
                  <path d="M40 20H48V100H40V20Z" fill="#E53E3E" />
                  <path d="M55 20H63V90H55V20Z" fill="#E53E3E" />
                  <path d="M72 35H80V75H72V35Z" fill="#E53E3E" />
                  <path d="M15 35H22V65H15V35Z" fill="#E53E3E" />

                  {/* Titik-titik bawah (Hitam) */}
                  <rect x="35" y="105" width="10" height="10" transform="rotate(45 35 105)" fill="#111111" />
                  <rect x="50" y="105" width="10" height="10" transform="rotate(45 50 105)" fill="#111111" />
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

import TeamCard from "@/components/TeamCard";

export const metadata = {
  title: "Profil",
  description:
    "Kenali Radix Consulting — visi, misi, pendekatan psikologi, dan tim profesional kami yang berdedikasi untuk kesejahteraan mental Anda.",
};

const teamMembers = [
  {
    name: "Jasmine Mustika Zahraa, M.Psi., Psikolog",
    role: "Psikolog",
    bio: "Berpengalaman menangani kasus kecemasan, depresi, gangguan perilaku, tumbuh kembang dan emosi anak/remaja, serta pendampingan korban kekerasan seksual. Juga berpengalaman dalam konseling pranikah dan pasangan dengan pendekatan terapi kognitif perilaku yang humanis.",
    initial: "JZ",
    photo: "/images/jasmine.jpg",
  },
  {
    name: "Hening Mahardika, M.Psi., Psikolog",
    role: "Psikolog",
    bio: "Berpengalaman menangani berbagai kasus termasuk depresi, kecemasan, stres, quarter life crisis, serta masalah relasi seperti hubungan anak dan orang tua, hubungan romantis, dan pertemanan. Menggunakan pendekatan humanistik, psikoanalisis, dan kognitif perilaku.",
    initial: "HM",
    photo: "/images/hening.png",
  },
  {
    name: "Anis Irmala Sandy, M.Psi., Psikolog",
    role: "Psikolog",
    bio: "Berpengalaman menangani permasalahan sosial emosi remaja dan dewasa, pengembangan diri, konseling pra-nikah, tumbuh kembang anak dan pola asuh. Aktif dalam kegiatan edukasi komunitas di bidang kesehatan mental dengan minat keahlian pendekatan humanistik, journaling dan writing expression.",
    initial: "AS",
    photo: "/images/anis.png",
  },
];

export default function ProfilPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Tentang Kami
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Profil Klinik
          </h1>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto leading-relaxed">
            Mengenal lebih dekat siapa kami, apa yang kami yakini, dan bagaimana
            kami bekerja untuk kesejahteraan mental Anda.
          </p>
        </div>
      </section>

      {/* Tim Profesional */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Tim Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-3">
              Profesional yang Berdedikasi
            </h2>
            <p className="text-dark/70 mt-4 max-w-2xl mx-auto">
              Tim kami terdiri dari psikolog berlisensi dan profesional
              berpengalaman yang berkomitmen untuk kesejahteraan Anda.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <TeamCard key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-primary/80 rounded-3xl p-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A1BC98"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-dark mb-4">
                Visi Kami
              </h2>
              <p className="text-dark/70 leading-relaxed">
                Menjadi penyedia layanan psikologi yang membantu individu dan
                masyarakat memahami akar permasalahan psikologis secara
                mendalam, sebagai dasar untuk meningkatkan kesejahteraan dan
                kualitas hidup.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-primary/80 rounded-3xl p-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A1BC98"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-dark mb-4">
                Misi Kami
              </h2>
              <ul className="space-y-3 text-dark/70 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  Memberikan layanan psikologi profesional yang berfokus pada
                  identifikasi dan penanganan akar permasalahan, bukan sekadar
                  gejala.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  Menyediakan ruang aman dan suportif bagi individu untuk
                  mengeksplorasi diri dan bertumbuh secara emosional.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  Mengintegrasikan pendekatan berbasis bukti ilmiah dengan
                  kepekaan terhadap konteks budaya dan kebutuhan unik setiap
                  klien.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  Berkontribusi dalam edukasi masyarakat tentang pentingnya
                  kesehatan mental dan penanganan psikologis yang tepat.
                </li>
              </ul>
            </div>
          </div>

          {/* Nilai-Nilai Kami */}
          <div className="mt-12">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">
                Nilai-Nilai Kami
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "💛",
                  title: "Empati dan Kepedulian",
                  desc: "Kami mendengarkan dengan sepenuh hati dan memahami setiap klien tanpa penghakiman.",
                },
                {
                  icon: "⚖️",
                  title: "Profesionalisme dan Etika",
                  desc: "Kami menjunjung tinggi standar profesi dan kode etik psikologi dalam setiap layanan.",
                },
                {
                  icon: "🌱",
                  title: "Pendekatan Berbasis Akar Permasalahan",
                  desc: "Kami percaya bahwa solusi yang berkelanjutan dimulai dari pemahaman mendalam terhadap akar masalah.",
                },
                {
                  icon: "🤝",
                  title: "Kolaborasi dan Keberlanjutan",
                  desc: "Kami membangun hubungan kolaboratif dengan klien dan mitra untuk hasil jangka panjang yang bermakna.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-primary/80 rounded-3xl p-8 text-center hover-lift cursor-default"
                >
                  <span className="text-4xl mb-4 block" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pendekatan Psikologi */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Metodologi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-3">
              Pendekatan Psikologi Kami
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cognitive Behavioral Therapy",
                desc: "Mengidentifikasi dan mengubah pola pikir negatif untuk memperbaiki emosi dan perilaku secara sistematis.",
                icon: "🧠",
              },
              {
                title: "Mindfulness-Based Therapy",
                desc: "Melatih kesadaran penuh (mindfulness) untuk mengurangi stres, kecemasan, dan meningkatkan kualitas hidup.",
                icon: "🧘",
              },
              {
                title: "Person-Centered Therapy",
                desc: "Memberikan ruang eksplorasi diri yang dipimpin oleh klien dengan dukungan empati tanpa syarat.",
                icon: "💚",
              },
              {
                title: "Solution-Focused Therapy",
                desc: "Berfokus pada solusi dan kekuatan yang dimiliki klien untuk membangun perubahan positif.",
                icon: "🎯",
              },
              {
                title: "Positive Psychology",
                desc: "Mengembangkan kekuatan karakter, resiliensi, dan kebahagiaan melalui intervensi berbasis psikologi positif.",
                icon: "✨",
              },
              {
                title: "Integrative Approach",
                desc: "Menggabungkan berbagai metode terapeutik sesuai kebutuhan unik setiap individu.",
                icon: "🔗",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-secondary/30 rounded-3xl p-8 hover-lift cursor-default"
              >
                <span className="text-3xl mb-4 block" role="img" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-serif text-lg font-semibold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-dark/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

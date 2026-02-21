import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata = {
  title: "Layanan",
  description:
    "Temukan berbagai layanan psikologi dan well-being profesional di Radix Consulting — konseling individu, terapi anak, dan program kesejahteraan organisasi.",
};

const services = [
  {
    icon: "🗣️",
    title: "Konseling Individu",
    description:
      "Sesi tatap muka atau daring dengan psikolog profesional untuk mengatasi masalah emosional, kecemasan, depresi, trauma, dan tantangan hidup lainnya secara personal dan rahasia.",
  },
  {
    icon: "👫",
    title: "Konseling Pasangan & Keluarga",
    description:
      "Membantu pasangan dan keluarga memperbaiki komunikasi, menyelesaikan konflik, dan membangun hubungan yang lebih sehat dan harmonis.",
  },
  {
    icon: "🧒",
    title: "Psikologi Anak & Remaja",
    description:
      "Layanan psikologi khusus untuk anak dan remaja meliputi asesmen perkembangan, terapi bermain, konseling remaja, dan pendampingan orang tua.",
  },
  {
    icon: "🏢",
    title: "Program Well-Being Organisasi",
    description:
      "Program kesejahteraan karyawan meliputi workshop mindfulness, manajemen stres, employee assistance program, dan pelatihan kepemimpinan.",
  },
  {
    icon: "📋",
    title: "Asesmen Psikologis",
    description:
      "Pemeriksaan psikologis komprehensif meliputi tes IQ, tes kepribadian, asesmen bakat minat, dan evaluasi psikologis untuk berbagai keperluan.",
  },
  {
    icon: "🧘",
    title: "Program Mindfulness & Relaksasi",
    description:
      "Kelas dan workshop mindfulness, meditasi terpandu, serta teknik relaksasi untuk mengurangi stres dan meningkatkan kesejahteraan sehari-hari.",
  },
  {
    icon: "📚",
    title: "Psikoedukasi & Workshop",
    description:
      "Seminar, workshop, dan pelatihan tentang kesehatan mental, emotional intelligence, parenting, dan pengembangan diri untuk umum.",
  },
  {
    icon: "🌐",
    title: "Konseling Daring",
    description:
      "Layanan konseling fleksibel melalui video call yang dapat diakses dari mana saja, memudahkan Anda mendapatkan dukungan profesional tanpa batasan jarak.",
  },
];

export default function LayananPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Layanan Kami
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Layanan Psikologi & Well-Being
          </h1>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto leading-relaxed">
            Berbagai layanan profesional yang dirancang untuk mendukung
            kesehatan mental dan kesejahteraan Anda secara menyeluruh.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">
            Butuh Bantuan untuk Memilih Layanan?
          </h2>
          <p className="text-dark/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Tim kami siap membantu Anda menemukan layanan yang paling sesuai
            dengan kebutuhan Anda. Jangan ragu untuk menghubungi kami.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+6282312340131"
              className="px-8 py-4 rounded-2xl bg-accent text-white font-semibold text-lg transition-all duration-300 hover:bg-dark hover:shadow-xl"
            >
              Hubungi Kami
            </a>
            <Link
              href="/profil"
              className="px-8 py-4 rounded-2xl border-2 border-accent text-accent font-semibold text-lg transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

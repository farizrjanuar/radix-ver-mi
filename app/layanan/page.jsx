import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata = {
  title: "Layanan",
  description:
    "Daftar layanan dan harga 2026 — konseling individual, konseling pasangan, pra nikah, tes psikologi, skrining tumbuh kembang anak di Radix Consulting.",
};

const services = [
  {
    icon: "🗣️",
    title: "Konseling Individual Dewasa",
    description:
      "Sesi konseling one-on-one dengan psikolog profesional untuk mengatasi kecemasan, depresi, stres, quarter life crisis, dan tantangan emosional lainnya.",
    duration: "± 60 menit per sesi",
    prices: [
      { label: "Online", value: "Rp150.000" },
      { label: "Offline", value: "Rp225.000" },
    ],
  },
  {
    icon: "📦",
    title: "Paket 3 Sesi Konseling Individual",
    description:
      "Paket hemat 3 sesi konseling individual dewasa untuk proses pendampingan yang lebih berkelanjutan dan terstruktur.",
    duration: "± 60 menit per sesi",
    prices: [
      { label: "Online", value: "Rp425.000" },
      { label: "Offline", value: "Rp650.000" },
    ],
  },
  {
    icon: "👫",
    title: "Konseling Pasangan",
    description:
      "Sesi konseling untuk pasangan yang ingin memperbaiki komunikasi, menyelesaikan konflik, dan membangun hubungan yang lebih sehat dan harmonis.",
    duration: "± 60 menit per sesi",
    prices: [
      { label: "Online", value: "Rp275.000" },
      { label: "Offline", value: "Rp425.000" },
    ],
  },
  {
    icon: "💍",
    title: "Paket Pra Nikah",
    description:
      "Program persiapan pernikahan komprehensif meliputi konseling pra-nikah untuk membangun fondasi hubungan yang kuat sebelum menuju jenjang pernikahan.",
    duration: "± 90 menit per sesi",
    prices: [
      { label: "Online", value: "Rp500.000" },
      { label: "Offline", value: "Rp650.000" },
    ],
  },
  {
    icon: "🩺",
    title: "Mental Health Check Up (MHCU)",
    description:
      "Pemeriksaan kesehatan mental menyeluruh untuk mengetahui kondisi psikologis Anda saat ini dan mendapatkan rekomendasi penanganan yang tepat.",
    duration: "± 60 menit",
    prices: [
      { label: "Online", value: "Rp200.000" },
      { label: "Offline", value: "Rp240.000" },
    ],
  },
  {
    icon: "📊",
    title: "Tes Potensi Diri (16+)",
    description:
      "Asesmen psikologis komprehensif untuk mengenali potensi, minat, bakat, dan kepribadian Anda guna mendukung pengembangan diri dan pengambilan keputusan karier.",
    duration: "± 90 menit",
    prices: [
      { label: "Online", value: "Rp250.000" },
      { label: "Offline", value: "Rp350.000" },
    ],
  },
  {
    icon: "🎒",
    title: "Tes Kesiapan Sekolah Dasar",
    description:
      "Evaluasi kesiapan anak untuk memasuki jenjang sekolah dasar meliputi aspek kognitif, sosial-emosional, dan kemandirian.",
    duration: "± 90 menit",
    prices: [
      { label: "Offline", value: "Rp400.000" },
    ],
  },
  {
    icon: "🧒",
    title: "Tes Potensi Kecerdasan (3+)",
    description:
      "Asesmen potensi kecerdasan anak usia 3 tahun ke atas untuk memahami kemampuan kognitif dan mendukung stimulasi perkembangan yang optimal.",
    duration: "± 60 menit",
    prices: [
      { label: "Online", value: "Rp225.000" },
      { label: "Offline", value: "Rp300.000" },
    ],
  },
  {
    icon: "🌱",
    title: "Skrining Tumbuh Kembang Anak",
    description:
      "Pemeriksaan dan evaluasi perkembangan anak untuk mendeteksi dini potensi keterlambatan dan memberikan rekomendasi intervensi yang sesuai.",
    duration: "± 60 menit",
    prices: [
      { label: "Online", value: "Rp150.000" },
      { label: "Offline", value: "Rp225.000" },
    ],
  },
];

const addons = [
  {
    title: "Resume Hasil Layanan",
    desc: "Laporan tertulis hasil konseling / tes",
    price: "Rp50.000",
  },
  {
    title: "Overtime",
    desc: "Perpanjangan sesi per 30 menit",
    price: "Rp50.000",
  },
  {
    title: "Home Visit",
    desc: "Layanan kunjungan ke rumah klien",
    price: "Mulai Rp100.000",
  },
];

const layananKhusus = [
  {
    icon: "🏢",
    title: "Paket Psikotes Institusi",
    desc: "Layanan asesmen psikologis untuk perusahaan, sekolah, dan institusi lainnya. Harga disesuaikan dengan kebutuhan.",
  },
  {
    icon: "🎤",
    title: "Narasumber / Pembicara",
    desc: "Penyediaan psikolog sebagai narasumber seminar, webinar, workshop, atau kegiatan edukasi kesehatan mental.",
  },
  {
    icon: "📝",
    title: "Professional Judgement",
    desc: "Layanan penilaian profesional psikolog untuk keperluan hukum, pendidikan, atau kebutuhan khusus lainnya.",
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
            Daftar Layanan & Harga 2026
          </h1>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto leading-relaxed">
            Berbagai layanan psikologi profesional yang dirancang untuk
            mendukung kesehatan mental dan kesejahteraan Anda secara
            menyeluruh — tersedia online maupun offline.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Tambahan
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-3">
              Add-Ons
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {addons.map((item, idx) => (
              <div
                key={idx}
                className="bg-secondary/30 rounded-3xl p-8 text-center hover-lift cursor-default"
              >
                <h3 className="font-serif text-lg font-semibold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-dark/60 mb-4">{item.desc}</p>
                <span className="text-xl font-bold text-accent">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan Khusus */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Custom
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-3">
              Layanan Khusus
            </h2>
            <p className="text-dark/70 mt-4 max-w-xl mx-auto">
              Hubungi kami untuk konsultasi dan penawaran harga yang
              disesuaikan dengan kebutuhan Anda.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {layananKhusus.map((item, idx) => (
              <div
                key={idx}
                className="bg-primary/80 rounded-3xl p-8 hover-lift cursor-default"
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

      {/* CTA */}
      <section className="py-24 px-6">
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
              href="https://wa.me/6282312340131"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-accent text-white font-semibold text-lg transition-all duration-300 hover:bg-dark hover:shadow-xl"
            >
              Chat via WhatsApp
            </a>
            <a
              href="mailto:contact.radixconsulting@gmail.com"
              className="px-8 py-4 rounded-2xl border-2 border-accent text-accent font-semibold text-lg transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Kirim Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

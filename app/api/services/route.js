import { NextResponse } from "next/server";

const services = [
  {
    id: 1,
    slug: "konseling-individual-dewasa",
    title: "Konseling Individual Dewasa",
    icon: "🗣️",
    shortDescription:
      "Sesi konseling one-on-one untuk mengatasi kecemasan, depresi, stres, dan tantangan emosional lainnya.",
    description:
      "Sesi konseling one-on-one dengan psikolog profesional untuk mengatasi kecemasan, depresi, stres, quarter life crisis, dan tantangan emosional lainnya.",
    duration: "± 60 menit per sesi",
    format: ["Online", "Offline"],
    prices: { online: "Rp150.000", offline: "Rp225.000" },
  },
  {
    id: 2,
    slug: "paket-3-sesi-konseling",
    title: "Paket 3 Sesi Konseling Individual",
    icon: "📦",
    shortDescription:
      "Paket hemat 3 sesi konseling untuk pendampingan yang lebih berkelanjutan.",
    description:
      "Paket hemat 3 sesi konseling individual dewasa untuk proses pendampingan yang lebih berkelanjutan dan terstruktur.",
    duration: "± 60 menit per sesi",
    format: ["Online", "Offline"],
    prices: { online: "Rp425.000", offline: "Rp650.000" },
  },
  {
    id: 3,
    slug: "konseling-pasangan",
    title: "Konseling Pasangan",
    icon: "👫",
    shortDescription:
      "Konseling untuk memperbaiki komunikasi dan menyelesaikan konflik pasangan.",
    description:
      "Sesi konseling untuk pasangan yang ingin memperbaiki komunikasi, menyelesaikan konflik, dan membangun hubungan yang lebih sehat dan harmonis.",
    duration: "± 60 menit per sesi",
    format: ["Online", "Offline"],
    prices: { online: "Rp275.000", offline: "Rp425.000" },
  },
  {
    id: 4,
    slug: "paket-pra-nikah",
    title: "Paket Pra Nikah",
    icon: "💍",
    shortDescription:
      "Program persiapan pernikahan untuk membangun fondasi hubungan yang kuat.",
    description:
      "Program persiapan pernikahan komprehensif meliputi konseling pra-nikah untuk membangun fondasi hubungan yang kuat sebelum menuju jenjang pernikahan.",
    duration: "± 90 menit per sesi",
    format: ["Online", "Offline"],
    prices: { online: "Rp500.000", offline: "Rp650.000" },
  },
  {
    id: 5,
    slug: "mental-health-check-up",
    title: "Mental Health Check Up (MHCU)",
    icon: "🩺",
    shortDescription:
      "Pemeriksaan kesehatan mental menyeluruh untuk mengetahui kondisi psikologis.",
    description:
      "Pemeriksaan kesehatan mental menyeluruh untuk mengetahui kondisi psikologis Anda saat ini dan mendapatkan rekomendasi penanganan yang tepat.",
    duration: "± 60 menit",
    format: ["Online", "Offline"],
    prices: { online: "Rp200.000", offline: "Rp240.000" },
  },
  {
    id: 6,
    slug: "tes-potensi-diri",
    title: "Tes Potensi Diri (16+)",
    icon: "📊",
    shortDescription:
      "Asesmen untuk mengenali potensi, minat, bakat, dan kepribadian.",
    description:
      "Asesmen psikologis komprehensif untuk mengenali potensi, minat, bakat, dan kepribadian Anda guna mendukung pengembangan diri dan pengambilan keputusan karier.",
    duration: "± 90 menit",
    format: ["Online", "Offline"],
    prices: { online: "Rp250.000", offline: "Rp350.000" },
  },
  {
    id: 7,
    slug: "tes-kesiapan-sekolah-dasar",
    title: "Tes Kesiapan Sekolah Dasar",
    icon: "🎒",
    shortDescription:
      "Evaluasi kesiapan anak untuk memasuki jenjang sekolah dasar.",
    description:
      "Evaluasi kesiapan anak untuk memasuki jenjang sekolah dasar meliputi aspek kognitif, sosial-emosional, dan kemandirian.",
    duration: "± 90 menit",
    format: ["Offline"],
    prices: { offline: "Rp400.000" },
  },
  {
    id: 8,
    slug: "tes-potensi-kecerdasan",
    title: "Tes Potensi Kecerdasan (3+)",
    icon: "🧒",
    shortDescription:
      "Asesmen potensi kecerdasan anak usia 3 tahun ke atas.",
    description:
      "Asesmen potensi kecerdasan anak usia 3 tahun ke atas untuk memahami kemampuan kognitif dan mendukung stimulasi perkembangan yang optimal.",
    duration: "± 60 menit",
    format: ["Online", "Offline"],
    prices: { online: "Rp225.000", offline: "Rp300.000" },
  },
  {
    id: 9,
    slug: "skrining-tumbuh-kembang-anak",
    title: "Skrining Tumbuh Kembang Anak",
    icon: "🌱",
    shortDescription:
      "Pemeriksaan dan evaluasi perkembangan anak untuk deteksi dini.",
    description:
      "Pemeriksaan dan evaluasi perkembangan anak untuk mendeteksi dini potensi keterlambatan dan memberikan rekomendasi intervensi yang sesuai.",
    duration: "± 60 menit",
    format: ["Online", "Offline"],
    prices: { online: "Rp150.000", offline: "Rp225.000" },
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: services,
    total: services.length,
  });
}

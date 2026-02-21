import { NextResponse } from "next/server";

const services = [
  {
    id: 1,
    slug: "konseling-individu",
    title: "Konseling Individu",
    icon: "🗣️",
    shortDescription:
      "Sesi konseling personal dengan psikolog profesional untuk mengatasi berbagai tantangan emosional dan psikologis.",
    description:
      "Layanan konseling individu kami menyediakan ruang aman untuk Anda berbicara secara terbuka tentang perasaan, pikiran, dan pengalaman hidup Anda. Psikolog kami menggunakan pendekatan berbasis bukti untuk membantu Anda mengatasi kecemasan, depresi, trauma, dan masalah emosional lainnya.",
    duration: "50 menit per sesi",
    format: ["Tatap muka", "Daring"],
  },
  {
    id: 2,
    slug: "konseling-pasangan-keluarga",
    title: "Konseling Pasangan & Keluarga",
    icon: "👫",
    shortDescription:
      "Membantu pasangan dan keluarga membangun hubungan yang lebih sehat dan harmonis.",
    description:
      "Konseling pasangan dan keluarga bertujuan untuk memperbaiki komunikasi, menyelesaikan konflik, dan memperkuat ikatan antar anggota keluarga. Kami menciptakan ruang dialog yang aman untuk semua pihak.",
    duration: "75 menit per sesi",
    format: ["Tatap muka", "Daring"],
  },
  {
    id: 3,
    slug: "psikologi-anak-remaja",
    title: "Psikologi Anak & Remaja",
    icon: "🧒",
    shortDescription:
      "Layanan psikologi khusus untuk mendukung tumbuh kembang anak dan remaja.",
    description:
      "Layanan komprehensif yang meliputi asesmen perkembangan, terapi bermain, konseling remaja, dan pendampingan orang tua untuk mendukung kesehatan mental anak dan remaja.",
    duration: "45-60 menit per sesi",
    format: ["Tatap muka"],
  },
  {
    id: 4,
    slug: "program-wellbeing-organisasi",
    title: "Program Well-Being Organisasi",
    icon: "🏢",
    shortDescription:
      "Program kesejahteraan karyawan untuk meningkatkan produktivitas dan kesehatan mental di tempat kerja.",
    description:
      "Program holistik yang dirancang untuk organisasi meliputi workshop mindfulness, manajemen stres, employee assistance program (EAP), dan pelatihan kepemimpinan berbasis psikologi positif.",
    duration: "Disesuaikan",
    format: ["Tatap muka", "Daring", "Hybrid"],
  },
  {
    id: 5,
    slug: "asesmen-psikologis",
    title: "Asesmen Psikologis",
    icon: "📋",
    shortDescription:
      "Pemeriksaan psikologis komprehensif untuk berbagai keperluan.",
    description:
      "Asesmen psikologis profesional meliputi tes kecerdasan (IQ), tes kepribadian, asesmen bakat dan minat, serta evaluasi psikologis untuk keperluan pendidikan, karir, dan klinis.",
    duration: "2-4 jam",
    format: ["Tatap muka"],
  },
  {
    id: 6,
    slug: "program-mindfulness",
    title: "Program Mindfulness & Relaksasi",
    icon: "🧘",
    shortDescription:
      "Kelas dan workshop mindfulness untuk mengurangi stres dan meningkatkan kesejahteraan.",
    description:
      "Program terstruktur yang mengajarkan teknik mindfulness, meditasi terpandu, dan relaksasi progresif untuk membantu Anda mengelola stres dan meningkatkan kualitas hidup sehari-hari.",
    duration: "60 menit per sesi",
    format: ["Tatap muka", "Daring"],
  },
  {
    id: 7,
    slug: "psikoedukasi-workshop",
    title: "Psikoedukasi & Workshop",
    icon: "📚",
    shortDescription:
      "Seminar dan workshop kesehatan mental untuk umum dan organisasi.",
    description:
      "Berbagai seminar, workshop, dan pelatihan tentang kesehatan mental, emotional intelligence, positive parenting, dan pengembangan diri yang dapat diikuti oleh masyarakat umum.",
    duration: "2-8 jam",
    format: ["Tatap muka", "Daring"],
  },
  {
    id: 8,
    slug: "konseling-daring",
    title: "Konseling Daring",
    icon: "🌐",
    shortDescription:
      "Layanan konseling fleksibel melalui video call dari mana saja.",
    description:
      "Layanan konseling profesional melalui platform video call yang aman dan terenkripsi, memungkinkan Anda mendapatkan dukungan psikologis dari kenyamanan rumah Anda.",
    duration: "50 menit per sesi",
    format: ["Daring"],
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: services,
    total: services.length,
  });
}

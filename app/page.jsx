"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const coreValues = [
  {
    icon: "🌿",
    title: "Ketenangan",
    description:
      "Kami menciptakan ruang aman dan damai bagi setiap individu untuk mengeksplorasi diri tanpa penghakiman.",
  },
  {
    icon: "💛",
    title: "Empati",
    description:
      "Setiap sesi dibangun atas dasar empati mendalam, mendengarkan dengan sepenuh hati dan memahami perspektif Anda.",
  },
  {
    icon: "🔬",
    title: "Berbasis Bukti",
    description:
      "Pendekatan kami didasarkan pada riset ilmiah terkini dan praktik psikologi berbasis bukti yang teruji.",
  },
  {
    icon: "🤝",
    title: "Kolaboratif",
    description:
      "Proses penyembuhan adalah perjalanan bersama. Kami bekerja sama dengan Anda menuju tujuan yang Anda tetapkan.",
  },
];

function useFadeInOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = ref.current?.querySelectorAll(".fade-section");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function HomePage() {
  const containerRef = useFadeInOnScroll();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/50 text-sm font-medium text-dark/80 mb-8 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Selamat Datang di Radix Consulting
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight mb-8 animate-fadeIn animation-delay-200">
            From Root Causes
            <br />
            <span className="text-accent">to Lasting Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-dark/70 max-w-2xl mx-auto leading-relaxed mb-12 animate-fadeIn animation-delay-400">
            Bersama kami, Anda didampingi dalam proses memahami akar
            permasalahan dan membangun dasar untuk perubahan yang lebih
            bermakna.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn animation-delay-600">
            <Link
              href="/layanan"
              className="px-8 py-4 rounded-2xl bg-accent text-white font-semibold text-lg transition-all duration-300 hover:bg-dark hover:shadow-xl hover:shadow-dark/10"
            >
              Mulai Konsultasi
            </Link>
            <Link
              href="/profil"
              className="px-8 py-4 rounded-2xl bg-secondary/50 text-dark font-semibold text-lg transition-all duration-300 hover:bg-secondary"
            >
              Kenali Kami
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-dark/30"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto fade-section">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Decorative visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-secondary/50 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full p-12 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-accent/20 absolute" />
                  <div className="w-32 h-32 rounded-full bg-accent/30 absolute" />
                  <div className="w-20 h-20 rounded-full bg-accent/50 absolute flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Tentang Kami
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark leading-tight">
                Ruang Aman untuk Setiap Perjalanan Mental Anda
              </h2>
              <p className="text-dark/70 leading-relaxed">
                Radix Consulting adalah pusat layanan psikologi yang
                didirikan dengan keyakinan bahwa setiap individu berhak
                mendapatkan dukungan profesional untuk kesehatan mental mereka.
              </p>
              <p className="text-dark/70 leading-relaxed">
                Dengan tim psikolog berpengalaman dan pendekatan yang
                holistik, kami membantu Anda mengatasi tantangan emosional,
                mengembangkan ketahanan mental, dan menemukan keseimbangan
                dalam hidup sehari-hari.
              </p>
              <Link
                href="/profil"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300"
              >
                Pelajari lebih lanjut
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto fade-section">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Prinsip Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mt-3">
              Nilai Inti yang Kami Pegang
            </h2>
            <p className="text-dark/70 mt-4 max-w-2xl mx-auto">
              Setiap langkah yang kami ambil didasarkan pada nilai-nilai yang
              kami yakini untuk memberikan layanan terbaik bagi Anda.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-primary/80 rounded-3xl p-8 hover-lift cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {value.icon}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-dark/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center fade-section">
          <div className="bg-secondary/40 rounded-3xl p-12 md:p-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-dark/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Langkah pertama menuju kesejahteraan mental dimulai dengan
              keberanian untuk mencari bantuan. Kami di sini untuk mendampingi
              Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/layanan"
                className="px-8 py-4 rounded-2xl bg-accent text-white font-semibold text-lg transition-all duration-300 hover:bg-dark hover:shadow-xl"
              >
                Lihat Layanan Kami
              </Link>
              <a
                href="tel:+6282312340131"
                className="px-8 py-4 rounded-2xl border-2 border-accent text-accent font-semibold text-lg transition-all duration-300 hover:bg-accent hover:text-white"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

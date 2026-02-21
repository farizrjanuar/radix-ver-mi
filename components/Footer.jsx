import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-primary/90">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-accent flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="font-serif text-xl font-semibold text-white">
                Radix Consulting
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary/70 max-w-xs">
              Pusat layanan psikologi dan well-being profesional yang membantu
              Anda menemukan ketenangan dan keseimbangan dalam hidup.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/profil", label: "Profil" },
                { href: "/layanan", label: "Layanan" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-primary/70">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Boyolali, <br />
                  Jawa Tengah, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact.radixconsulting@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62 823 1234 0131</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a
                  href="https://instagram.com/radixconsulting.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  @radixconsulting.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-xs text-primary/50">
            &copy; {currentYear} Radix Consulting. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

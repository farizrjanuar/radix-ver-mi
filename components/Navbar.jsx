"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/profil", label: "Profil" },
  { href: "/layanan", label: "Layanan" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo-radix-full.png"
            alt="Radix Consulting"
            width={44}
            height={44}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-serif text-xl font-semibold text-dark tracking-tight">
            Radix Consulting
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-5 py-2.5 rounded-2xl text-dark/80 font-medium text-sm transition-all duration-300 hover:bg-secondary/60 hover:text-dark"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href="/layanan"
              className="px-6 py-2.5 rounded-2xl bg-accent text-white text-sm font-semibold transition-all duration-300 hover:bg-dark hover:shadow-lg"
            >
              Konsultasi
            </Link>
          </li>
          <li className="ml-2">
            <a
              href="https://maps.app.goo.gl/3iTiHYB7dGcD1V8h9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-dark/70 transition-all duration-300 hover:bg-secondary/60 hover:text-accent"
              aria-label="Lokasi kami di Google Maps"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-dark hover:bg-secondary/50 transition-colors"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-primary/95 backdrop-blur-md">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-dark/80 font-medium transition-all duration-300 hover:bg-secondary/60 hover:text-dark"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/layanan"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-2xl bg-accent text-white font-semibold text-center transition-all duration-300 hover:bg-dark"
              >
                Konsultasi
              </Link>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/3iTiHYB7dGcD1V8h9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-dark/80 font-medium transition-all duration-300 hover:bg-secondary/60 hover:text-dark"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Lokasi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

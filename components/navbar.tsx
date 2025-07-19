"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/container";
import { FaWhatsapp } from "react-icons/fa";
import { homepageDetails } from "@/data/homepage";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Features 🌶️", href: "/features" },
  { name: "Curriculum", href: "/curriculum" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
];

const CTA_ITEM = {
  name: "Get Started",
  href: "https://wa.me/1234567890",
};

const logo = "/assets/logomark.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    // Special case for home page
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-bg">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 -space-x-3">
            <Image
              src={logo}
              alt="Logo"
              width={60}
              height={60}
              className="w-full h-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium pb-1 transition-colors ${
                      isActive(item.href)
                        ? "border-b-2 border-myPrimary"
                        : "hover:border-b-2 border-myBlack"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={homepageDetails?.whatsApp?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-2 lg:px-6 py-3 rounded-none hover:bg-green-600 flex items-center gap-1 lg:gap-3 text-sm lg:text-lg font-medium transition-colors"
            >
              <FaWhatsapp size={28} />
              {homepageDetails?.whatsApp?.text}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 top-16 bg-bg z-50 p-6 shadow-lg">
              <ul className="flex flex-col gap-4 border-b pb-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block py-2 text-xl font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-myPrimary underline"
                          : "hover:underline"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={homepageDetails?.whatsApp?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-myBlack text-white px-6 py-3 rounded-none hover:bg-green-600 flex items-center justify-center gap-3 text-lg font-medium transition-colors"
              >
                <FaWhatsapp size={28} />
                {homepageDetails?.whatsApp?.text}
              </Link>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}

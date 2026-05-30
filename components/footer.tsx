import Link from "next/link";
import { Aperture, Linkedin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and blurb */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Aperture className="h-6 w-6 text-white" strokeWidth={2} />
              </span>
              <span className="text-lg font-bold text-white">Apex VR Tours</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Immersive Matterport 3D virtual tours for hotels, venues, retail and
              commercial spaces across the UK.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:02038869021" className="hover:text-blue-400 transition-colors">
                  020 3886 9021
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@apexvrtours.co.uk"
                  className="hover:text-blue-400 transition-colors"
                >
                  hello@apexvrtours.co.uk
                </a>
              </li>
              <li>London &amp; nationwide UK coverage</li>
            </ul>
            <div className="mt-4 flex items-center space-x-4">
              <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {currentYear} Apex VR Tours Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

"use client"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="section-title text-2xl font-bold mb-4 text-slate-300">
                JJ Coffee
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Nikmati pengalaman kopi terbaik dengan biji kopi pilihan berkualitas tinggi dari berbagai belahan dunia.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors text-xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-slate-400 hover:text-slate-300 transition-colors text-xl">
                  <FaTwitter />
                </a>
                <a href="https://wa.me/6281234567890" className="text-slate-400 hover:text-slate-300 transition-colors text-xl">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 relative">
                Menu
                <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-slate-400 to-transparent"></div>
              </h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>
                  <Link href="/" className="hover:text-slate-300 transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="hover:text-slate-300 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-300 transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-300 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 relative">
                Layanan
                <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-slate-400 to-transparent"></div>
              </h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>
                  <Link href="#" className="hover:text-slate-300 transition-colors">
                    Dine In
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-300 transition-colors">
                    Take Away
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-300 transition-colors">
                    Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-slate-300 transition-colors">
                    Catering
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4 pb-2 relative">
                Hubungi Kami
                <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-slate-400 to-transparent"></div>
              </h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <MdPhone className="text-slate-400 text-lg" />
                  <a href="tel:021-555-0123" className="hover:text-slate-300 transition-colors">
                    (021) 555-0123
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdEmail className="text-slate-400 text-lg" />
                  <a href="mailto:info@jjcoffee.com" className="hover:text-slate-300 transition-colors break-all">
                    info@jjcoffee.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MdLocationOn className="text-slate-400 text-lg flex-shrink-0 mt-0.5" />
                  <span>Jl. Makmur Pasar 7 Tembung<br />Medan, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 my-8"></div>

          {/* Newsletter */}
          <div className="bg-slate-800 rounded-sm p-6 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-bold text-lg mb-2">Dapatkan Penawaran Spesial</h3>
              <p className="text-slate-400 text-sm mb-4">Berlangganan newsletter kami untuk mendapatkan promosi eksklusif dan informasi kopi terbaru.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-4 py-2 rounded-sm bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <button className="px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-sm transition-colors whitespace-nowrap">
                  Daftar
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2026 JJ Coffee. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

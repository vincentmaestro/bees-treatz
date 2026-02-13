import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-orange">Bee's</span> Treatz
            </h3>
            <p className="text-gray-300 mb-4">
              Authentic Nigerian home-style food, freshly made in the UK.
            </p>
            <p className="text-gray-400 text-sm">
              Bringing the taste of home to your table.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <span>WhatsApp Order</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Email Us</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bee's Treatz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Footer() {
  
  return (
    <footer className="bg-linear-to-br from-brand-dark via-gray-900 to-brand-dark text-white relative overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">
                  <span className="text-brand-orange">Bee{`'`}s</span> Treatz
                </h3>
              </div>
              <p className="text-gray-300 mb-3 text-lg">
                ...Satisfying stomachs
              </p>
            </>
            <div className="hidden md:flex border-t border-gray-700 mt-8 pt-8 flex-col justify-between gap-4">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Bee{`'`}s Treatz.
              </p>
              <div className="flex gap-4 text-xs text-gray-500">
                <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
                <span>•</span>
                <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-brand-orange text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/catering', label: 'Catering' },
                { href: '/about', label: 'About' },
                { href: '/order', label: 'Order Now' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-brand-orange transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-orange transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-brand-orange text-lg">Reach Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <a href='https://www.instagram.com/beestreattz' target='_blank' className="text-sm">Instagram</a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <a href='www.tiktok.com/@catererinwolverhampton' target='_blank' className="text-sm">TikTok</a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <a href='https://web.whatsapp.com/send/?phone=447778797023&text&type=phone_number&app_absent=0' target='_blank' className="text-sm">WhatsApp</a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <a href='mailto:hello@beestreatz.co.uk' target='_blank' className="text-sm">hello@beestreatz.co.uk</a>
              </li>
              <li className="flex items-start gap-2 text-gray-300 group">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                <span className="text-sm">Wolverhampton, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:hidden border-t border-gray-700 mt-8 pt-8 flex flex-col justify-between gap-4">
          <p className="text-gray-400 text-sm text-left sm:text-center">
            © {new Date().getFullYear()} Bee{`'`}s Treatz.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms</a>
          </div>
        </div>

      </div>

      <div className="h-1 bg-linear-to-r from-brand-red via-brand-orange to-warm-yellow"></div>
    </footer>
  );
}

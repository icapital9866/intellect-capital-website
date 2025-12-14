import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Intellect Capital LLC</h3>
            <p className="text-gray-400 text-sm mb-4">
              Delivering innovative solutions across Engineering, IT, and Healthcare domains.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/engineering" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Engineering</Link></li>
              <li><Link href="/services/information-technology" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Information Technology</Link></li>
              <li><Link href="/services/healthcare" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Healthcare</Link></li>
              <li><Link href="/training" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Careers</Link></li>
              <li><Link href="/clients" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Clients</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>701 S Carroll Blvd Ste 206</li>
              <li>Denton, TX 76201</li>
              <li className="pt-2">
                <a href="tel:469-579-0881" className="hover:text-blue-400 transition-colors">469-579-0881</a>
              </li>
              <li>
                <a href="mailto:hr@intellectcapital.us" className="hover:text-blue-400 transition-colors">hr@intellectcapital.us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Intellect Capital LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


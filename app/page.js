import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r border-gray-300 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Intellect Capital LLC
        </h1>
        <nav className="space-y-2">
          <a href="#engineering" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Engineering</a>
          <a href="#it" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">IT Services</a>
          <a href="#healthcare" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Healthcare</a>
          <a href="#about" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">About</a>
          <a href="#contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Contact</a>
        </nav>
        <div className="mt-12 text-sm text-gray-600">
          <p>701 S Carroll Blvd Ste 206</p>
          <p>Denton, TX 76201</p>
          <p className="mt-2">469-579-0881</p>
          <p>hr@intellectcapital.us</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <section id="engineering" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Engineering</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• ADAS - Advanced Driver Assistance Systems</li>
            <li>• Infotainment Systems</li>
            <li>• Hardware-in-Loop (HIL) Testing</li>
            <li>• AUTOSAR Development</li>
            <li>• Functional Safety (ISO 26262)</li>
            <li>• Embedded Technologies</li>
            <li>• Testing & Validation</li>
          </ul>
        </section>

        <section id="it" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Technology</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Java Development</li>
            <li>• .NET Solutions</li>
            <li>• Mobile & Hybrid Technologies</li>
            <li>• Cloud & DevOps</li>
            <li>• Data Engineering</li>
            <li>• QA Automation</li>
          </ul>
        </section>

        <section id="healthcare" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Healthcare IT Systems</li>
            <li>• Claims & Billing Data</li>
            <li>• Clinical Analytics</li>
            <li>• Compliance & Security (HIPAA)</li>
            <li>• Reporting & Business Intelligence</li>
          </ul>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Intellect Capital LLC provides specialized consulting services across Engineering, IT, and Healthcare domains. 
            Our team combines deep technical expertise with industry knowledge to deliver solutions that drive measurable results.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
          <p className="text-gray-700">
            <strong>Address:</strong> 701 S Carroll Blvd Ste 206, Denton, TX 76201<br/>
            <strong>Phone:</strong> 469-579-0881<br/>
            <strong>Email:</strong> hr@intellectcapital.us
          </p>
        </section>
      </main>
    </div>
  );
}

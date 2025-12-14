import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Intellect Capital LLC - Engineering, IT & Healthcare Solutions',
  description: 'Premier consulting services in Automotive Engineering, Enterprise IT, and Healthcare Technology',
};

export default function Home() {
  return (
    <>
      <Hero
        imageSrc="/images/home-hero.jpg"
        title="Engineering Excellence. Digital Innovation."
        subtitle="Transforming industries through cutting-edge technology solutions"
        height="h-[600px]"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Delivering world-class solutions across three core practice areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/engineering" className="group">
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 h-full transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Engineering</h3>
                <p className="text-gray-400 mb-6">
                  Automotive systems engineering including ADAS, infotainment, AUTOSAR, and functional safety for next-generation vehicles.
                </p>
                <span className="text-blue-400 font-medium group-hover:underline">Explore Engineering →</span>
              </div>
            </Link>

            <Link href="/services/information-technology" className="group">
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 h-full transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Information Technology</h3>
                <p className="text-gray-400 mb-6">
                  Enterprise software development, cloud solutions, mobile applications, and DevOps transformation services.
                </p>
                <span className="text-blue-400 font-medium group-hover:underline">Explore IT Services →</span>
              </div>
            </Link>

            <Link href="/services/healthcare" className="group">
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 h-full transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Healthcare</h3>
                <p className="text-gray-400 mb-6">
                  Healthcare IT, claims processing, clinical analytics, and compliance solutions for the healthcare industry.
                </p>
                <span className="text-blue-400 font-medium group-hover:underline">Explore Healthcare →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/about-preview.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Intellect Capital?</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                We bring deep domain expertise, proven methodologies, and a commitment to excellence that sets us apart in the consulting industry.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our teams combine technical mastery with business acumen to deliver solutions that drive measurable results for our clients.
              </p>
              <Link href="/about" className="inline-block bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your technology goals.
          </p>
          <Link href="/contact" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}


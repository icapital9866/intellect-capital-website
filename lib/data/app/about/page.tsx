import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Intellect Capital LLC',
  description: "Learn about Intellect Capital's mission, values, and expertise in Engineering, IT, and Healthcare",
};

export default function About() {
  return (
    <>
      <Hero
        imageSrc="/images/about-hero.jpg"
        title="About Intellect Capital"
        subtitle="Building the future through innovation and expertise"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Intellect Capital LLC is dedicated to delivering transformative technology solutions that empower organizations to excel in an increasingly complex digital landscape. We combine deep technical expertise with industry knowledge to solve our clients' most challenging problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Since our founding, we have built a reputation for excellence across automotive engineering, enterprise IT, and healthcare technology domains. Our multidisciplinary approach enables us to deliver comprehensive solutions that create lasting value.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Domain Expertise</h3>
                <p className="text-gray-400">
                  Our consultants bring specialized knowledge in automotive systems, enterprise software, and healthcare IT, ensuring solutions that meet industry standards and best practices.
                </p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Innovation Focus</h3>
                <p className="text-gray-400">
                  We stay at the forefront of emerging technologies, continuously investing in training and research to deliver cutting-edge solutions to our clients.
                </p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Quality Commitment</h3>
                <p className="text-gray-400">
                  Every engagement is guided by rigorous quality processes, ensuring deliverables that meet or exceed expectations for reliability, performance, and maintainability.
                </p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Partnership Model</h3>
                <p className="text-gray-400">
                  We build long-term relationships with our clients, serving as trusted advisors who understand their business objectives and technology roadmaps.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Industries We Serve</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-white mb-2">Automotive & Transportation</h4>
                <p className="text-gray-400">
                  OEMs, Tier 1 suppliers, and mobility companies advancing autonomous driving, connected vehicles, and electric powertrains.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-white mb-2">Healthcare & Life Sciences</h4>
                <p className="text-gray-400">
                  Hospitals, health systems, payers, and healthcare technology vendors modernizing patient care and operational efficiency.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-white mb-2">Financial Services</h4>
                <p className="text-gray-400">
                  Banks, insurance companies, and fintech firms building secure, scalable digital platforms and data analytics capabilities.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="text-xl font-semibold text-white mb-2">Technology & Telecommunications</h4>
                <p className="text-gray-400">
                  Software companies, cloud providers, and telecom operators delivering next-generation products and services.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-neutral-900 border border-neutral-800 rounded-lg p-12">
            <h2 className="text-2xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We're always looking for talented engineers, architects, and consultants who are passionate about technology and delivering exceptional client value.
            </p>
            <Link href="/careers" className="inline-block bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition-colors">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

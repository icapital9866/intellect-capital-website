import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { getServiceCategory } from '@/lib/data/services';

export const metadata = {
  title: 'IT Services - Intellect Capital LLC',
  description: 'Enterprise IT solutions including Java, .NET, Cloud, Mobile, Data Engineering, and QA Automation',
};

export default function ITServices() {
  const category = getServiceCategory('information-technology');

  if (!category) return null;

  return (
    <>
      <Hero
        imageSrc="/images/it/it-hero.jpg"
        title="Information Technology"
        subtitle={category.description}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>

            <h2 className="text-3xl font-bold text-white mb-6">Our IT Capabilities</h2>
            <p className="text-gray-400 text-lg max-w-4xl">
              From cloud-native applications to data pipelines and DevOps transformation, our IT division delivers modern enterprise solutions that drive digital innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subservices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                summary={service.summary}
                imageSrc={service.cardImage}
                href={`/services/information-technology/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

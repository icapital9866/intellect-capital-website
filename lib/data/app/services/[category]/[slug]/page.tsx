import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { getSubService, getServiceCategory } from '@/lib/data/services';

type Props = {
  params: {
    category: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const subService = getSubService(params.category, params.slug);
  const categoryData = getServiceCategory(params.category);

  if (!subService || !categoryData) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${subService.title} - ${categoryData.categoryName} - Intellect Capital LLC`,
    description: subService.summary,
  };
}

export default function SubServicePage({ params }: Props) {
  const subService = getSubService(params.category, params.slug);
  const categoryData = getServiceCategory(params.category);

  if (!subService || !categoryData) {
    notFound();
  }

  return (
    <>
      <Hero
        imageSrc={subService.heroImage}
        title={subService.title}
        subtitle={subService.summary}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link
              href={`/services/${params.category}`}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {categoryData.categoryName}
            </Link>
          </div>

          {/* What It Is Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What is {subService.title}?</h2>
            <div className="space-y-4">
              {subService.whatItIs.map((paragraph, index) => (
                <p key={index} className="text-gray-400 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* What We Do Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {subService.whatWeDo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Standards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {subService.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Roles We Provide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Roles We Provide</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {subService.roles.map((role, index) => (
                <div key={index} className="flex items-center p-4 bg-neutral-900 border border-neutral-800 rounded">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-300">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-neutral-900 border border-blue-500 rounded-lg p-8 text-center shadow-lg shadow-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6">
              Let's discuss how our {subService.title} expertise can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded font-medium hover:bg-blue-600 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


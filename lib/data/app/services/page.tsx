import Link from 'next/link';
import Hero from '@/components/Hero';
import { serviceCategories } from '@/lib/data/services';

export const metadata = {
  title: 'Services - Intellect Capital LLC',
  description: 'Comprehensive Engineering, IT, and Healthcare consulting services',
};

export default function ServicesOverview() {
  return (
    <>
      <Hero
        imageSrc="/images/services-hero.jpg"
        title="Our Services"
        subtitle="Comprehensive solutions across Engineering, IT, and Healthcare"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Intellect Capital delivers specialized consulting services across three core domains, each backed by deep expertise and proven methodologies.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <div key={category.categorySlug} className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 md:p-12">
                <Link href={`/services/${category.categorySlug}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                    {category.categoryName}
                  </h2>
                </Link>
                <p className="text-gray-400 text-lg mb-8">{category.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {category.subservices.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/services/${category.categorySlug}/${sub.slug}`}
                      className="block p-4 bg-black border border-neutral-800 rounded hover:border-blue-500 transition-all group"
                    >
                      <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{sub.summary}</p>
                    </Link>
                  ))}
                </div>

                <Link
                  href={`/services/${category.categorySlug}`}
                  className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
                >
                  Explore {category.categoryName}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

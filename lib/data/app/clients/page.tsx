import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Clients - Intellect Capital LLC',
  description: 'Trusted by leading organizations across automotive, healthcare, and technology sectors',
};

export default function Clients() {
  const industries = [
    {
      name: 'Automotive OEMs',
      description: 'Leading global automotive manufacturers advancing autonomous and electric vehicle technologies'
    },
    {
      name: 'Tier 1 Suppliers',
      description: 'Major automotive suppliers developing advanced safety systems and vehicle electronics'
    },
    {
      name: 'Healthcare Providers',
      description: 'Hospital systems and integrated delivery networks modernizing patient care platforms'
    },
    {
      name: 'Health Insurance Payers',
      description: 'National and regional payers optimizing claims processing and member engagement'
    },
    {
      name: 'Financial Services',
      description: 'Banks and fintech companies building secure, scalable digital platforms'
    },
    {
      name: 'Technology Companies',
      description: 'Software and SaaS providers accelerating product development and cloud migration'
    }
  ];

  const testimonials = [
    {
      quote: "Intellect Capital's ADAS expertise helped us accelerate our autonomous driving program by 6 months. Their engineers seamlessly integrated with our team.",
      author: "VP of Engineering",
      company: "Major Automotive OEM"
    },
    {
      quote: "The cloud migration strategy and execution provided by Intellect Capital transformed our infrastructure while reducing costs by 40%.",
      author: "CTO",
      company: "Healthcare Technology Company"
    },
    {
      quote: "Their healthcare analytics platform gave us unprecedented visibility into clinical outcomes and population health metrics.",
      author: "Chief Medical Officer",
      company: "Regional Health System"
    }
  ];

  return (
    <>
      <Hero
        imageSrc="/images/clients-hero.jpg"
        title="Our Clients"
        subtitle="Trusted by industry leaders across automotive, healthcare, and technology"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Intellect Capital partners with organizations across multiple industries, delivering specialized expertise and proven results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {industries.map((industry, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 hover:border-blue-500 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-8">
                  <div className="text-blue-400 text-4xl mb-4">"</div>
                  <p className="text-gray-400 mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t border-neutral-800 pt-4">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Become a Client</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join the organizations that trust Intellect Capital to deliver innovative technology solutions and drive measurable business results.
            </p>
            <Link href="/contact" className="inline-block bg-blue-500 text-white px-8 py-3 rounded font-medium hover:bg-blue-600 transition-colors">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

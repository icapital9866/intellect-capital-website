import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Careers - Intellect Capital LLC',
  description: 'Join our team of expert engineers and consultants',
};

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior ADAS Engineer',
      location: 'Denton, TX / Remote',
      type: 'Full-time',
      category: 'Engineering'
    },
    {
      title: 'Full Stack Developer (.NET/React)',
      location: 'Denton, TX / Remote',
      type: 'Full-time',
      category: 'IT'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      category: 'IT'
    },
    {
      title: 'Healthcare Data Analyst',
      location: 'Denton, TX / Hybrid',
      type: 'Full-time',
      category: 'Healthcare'
    },
    {
      title: 'Functional Safety Engineer',
      location: 'Denton, TX / Remote',
      type: 'Full-time',
      category: 'Engineering'
    },
    {
      title: 'Cloud Architect (AWS/Azure)',
      location: 'Remote',
      type: 'Full-time',
      category: 'IT'
    }
  ];

  return (
    <>
      <Hero
        imageSrc="/images/careers-hero.jpg"
        title="Careers at Intellect Capital"
        subtitle="Build your career with a team of exceptional technologists"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Join Us?</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              At Intellect Capital, you'll work on cutting-edge technologies, collaborate with industry experts, and make a real impact for world-class clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Projects</h3>
              <p className="text-gray-400">
                Work on innovative solutions in automotive, cloud, and healthcare technologies
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-400">
                Access to training, certifications, and professional development opportunities
              </p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-3">Career Growth</h3>
              <p className="text-gray-400">
                Clear advancement paths from individual contributor to technical leadership
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 hover:border-blue-500 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {position.type}
                        </span>
                        <span className="text-blue-400">{position.category}</span>
                      </div>
                    </div>
                    <Link href="/contact" className="inline-block bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600 transition-colors text-center">
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <Link href="/contact" className="inline-block bg-blue-500 text-white px-8 py-3 rounded font-medium hover:bg-blue-600 transition-colors">
              Submit Your Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Training Programs - Intellect Capital LLC',
  description: 'Professional training programs in Engineering, IT, and Healthcare technologies',
};

export default function Training() {
  const trainingPrograms = [
    {
      title: 'Automotive Software Development',
      description: 'Comprehensive training in AUTOSAR, embedded systems, and automotive software architecture',
      duration: '8-12 weeks',
      level: 'Intermediate to Advanced'
    },
    {
      title: 'Cloud & DevOps Bootcamp',
      description: 'Hands-on training in AWS/Azure, Kubernetes, CI/CD, and infrastructure as code',
      duration: '6-8 weeks',
      level: 'Beginner to Intermediate'
    },
    {
      title: 'Healthcare IT Fundamentals',
      description: 'HL7, FHIR, HIPAA compliance, and healthcare system integration',
      duration: '4-6 weeks',
      level: 'Beginner to Intermediate'
    },
    {
      title: 'Data Engineering & Analytics',
      description: 'Modern data pipelines, Spark, SQL, and data warehousing techniques',
      duration: '6-10 weeks',
      level: 'Intermediate'
    }
  ];

  return (
    <>
      <Hero
        imageSrc="/images/training-hero.jpg"
        title="Training & Development"
        subtitle="Upskill your team with industry-leading training programs"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Professional Training Programs</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Intellect Capital offers customized training programs designed to accelerate your team's technical capabilities and domain expertise. Our hands-on curriculum is delivered by practicing engineers and consultants with real-world experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 hover:border-blue-500 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration: <span className="text-blue-400">{program.duration}</span></span>
                  <span className="text-gray-500">Level: <span className="text-blue-400">{program.level}</span></span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Custom Training Solutions</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Every organization has unique training needs. We work with you to design custom curriculum that addresses your specific technology stack, business challenges, and skill gaps.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">On-site or remote delivery options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Hands-on labs and real-world projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Certification preparation and assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">Post-training mentorship and support</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition-colors">
                Discuss Your Training Needs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  summary: string;
  imageSrc: string;
  href: string;
}

export default function ServiceCard({ title, summary, imageSrc, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{summary}</p>
          <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
            Learn more
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

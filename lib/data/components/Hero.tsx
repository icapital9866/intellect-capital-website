import Image from 'next/image';

interface HeroProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  height?: string;
}

export default function Hero({ imageSrc, title, subtitle, height = 'h-96' }: HeroProps) {
  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}


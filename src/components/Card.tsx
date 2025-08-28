import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <InteractiveCard>
      <div className="rounded-xl overflow-hidden max-w-md w-full transform transition duration-300">
        <div className="relative w-full h-[250px] sm:h-[200px] overflow-hidden">
          <Image
            src={imgSrc}
            alt={venueName}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-5">
          <h3 className="text-2xl font-bold text--gray-600 dark:text-gray-400 leading-snug mb-3 sm:text-xl">
            {venueName}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-[0.95rem] leading-relaxed mb-4">
            Experience luxury and elegance at our exceptional venue.
          </p>

          {/* Button */}
          <button className="w-full bg-indigo-500 hover:bg-purple-600 active:scale-95 text-white font-semibold py-3 px-6 rounded-lg text-base transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </InteractiveCard>
  );
}
import React from "react";
import Image from "next/image";

type Topic = {
  title: string;
  description: string;
  imageSrc: string;
};

const ImageSnippets: React.FC<{ topics: Topic[] }> = ({ topics }) => {
  const gridStyle =
    topics.length === 1
      ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-1"
      : topics.length === 2
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
      : topics.length === 3
      ? "grid-cols-1 sm:grid-cols-3 md:grid-cols-3"
      : topics.length === 5
      ? "grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";
  return (
    <div className={`grid ${gridStyle} gap-4`}>
      {topics.map((topic, index) => (
        <div key={index} className="relative group overflow-hidden h-[360px]">
          <Image
            src={topic.imageSrc}
            alt={topic.title}
            width={240}
            height={360}
            className="w-full h-full object-cover"
            unoptimized
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-80 transition-opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="text-white text-xl font-bold group-hover:translate-y-[-250px] transition-transform duration-1000 ease-in-out">
              {topic.title}
            </h2>
          </div>

          {/* Description */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
            <p className="text-white text-md">{topic.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSnippets;

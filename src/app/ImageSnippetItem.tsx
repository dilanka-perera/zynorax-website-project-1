// components/ImageSnippetItem.tsx
import React from 'react';
import Image from 'next/image';

type Topic = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
};

const ImageSnippetItem: React.FC<{ topic: Topic }> = ({ topic }) => {
  return (
    <div className="relative group overflow-hidden h-[360px] w-full">
      <Image
        src={topic.imageSrc}
        alt={topic.title}
        width={720}
        height={360}
        className="w-full h-full object-cover"
        unoptimized
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-80 transition-opacity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h2 className="text-white text-xl font-medium group-hover:translate-y-[-150px] transition-transform duration-1000 ease-in-out">
          {topic.title}
        </h2>
      </div>

      {/* Description */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
        <p className="text-white text-left text-md">{topic.description}</p>
      </div>
    </div>
  );
};

export default ImageSnippetItem;

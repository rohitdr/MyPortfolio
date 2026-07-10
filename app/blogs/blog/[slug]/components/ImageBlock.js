"use client";

import Image from "next/image";

export default function ImageBlock({
  src,
  alt,
  caption,
}) {
  return (
    <figure className="my-8 sm:my-10 lg:my-14">
      <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl border border-zinc-800 bg-zinc-900">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          className="w-full h-auto object-cover transition-transform duration-500 sm:duration-700 group-hover:scale-[1.02]"
          priority={false}
        />
      </div>

      {caption && (
        <figcaption className="mt-3 px-2 text-center text-xs sm:text-sm leading-6 sm:leading-7 text-zinc-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
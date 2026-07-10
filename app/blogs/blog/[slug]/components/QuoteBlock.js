"use client";

export default function QuoteBlock({ quote, author }) {
  return (
    <figure className="my-14 border-l-2 border-white/20 pl-6">
      <blockquote>
        <p className="text-2xl font-light leading-relaxed text-white md:text-3xl">
          “{quote}”
        </p>
      </blockquote>

      {author && (
        <figcaption className="mt-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
          — {author}
        </figcaption>
      )}
    </figure>
  );
}
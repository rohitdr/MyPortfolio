"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaGlobe } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function AuthorCard({ author }) {
  if (!author) return null;

  return (
    <section className="mx-auto mt-16 w-full max-w-4xl  sm:mt-20 sm:px-6 lg:mt-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          {/* Avatar */}
          <div className="mx-auto lg:mx-0">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/10 sm:h-28 sm:w-28">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
              About the Author
            </p>

            <h2 className="mt-3 text-2xl font-light text-white sm:text-3xl">
              {author.name}
            </h2>

            <p className="mt-2 text-sm text-zinc-400 sm:text-base">
              {author.role}
            </p>

            <p className="mt-5 text-xs sm:text-sm leading-7 text-zinc-300 sm:mt-6 sm:text-base sm:leading-8">
              {author.bio}
            </p>

            {/* Social Links */}
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                href={author?.social?.portfolio}
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white hover:bg-white/5"
              >
                <FaGlobe size={15} />
                Portfolio
              </Link>

              <Link
                href={author?.social?.github}
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white hover:bg-white/5"
              >
                <FaGithub size={15} />
                GitHub
              </Link>

              <Link
                href={author?.social?.linkedin}
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white hover:bg-white/5"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-400 transition hover:text-white sm:text-sm"
              >
                More About Me
                <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
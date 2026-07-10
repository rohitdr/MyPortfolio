"use client";

import { useState } from "react";
import { FaCheck, FaCopy, FaLinkedin, FaShare, FaTwitter } from "react-icons/fa";

export default function ShareArticle({ title, url }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const nativeShare = async () => {
    if (!navigator.share) return;

    try {
      await navigator.share({
        title,
        url,
      });
    } catch (err) {
      // User cancelled
    }
  };

  return (
    <section className="mx-auto mt-24 max-w-4xl px-6">
      <div className="border-t border-white/10 pt-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Share
            </p>

            <h2 className="mt-2 text-2xl font-light text-white">
              Enjoyed this article?
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Copy */}
            <button
              onClick={copyLink}
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white hover:bg-white/5"
            >
              {copied ? (
                <>
                  <FaCheck size={16} />
                  Copied
                </>
              ) : (
                <>
                  <FaCopy size={16} />
                  Copy Link
                </>
              )}
            </button>

            {/* X */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                title
              )}&url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white hover:bg-white/5"
            >
              <FaTwitter size={16} />
              X
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white hover:bg-white/5"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            {/* Native Share */}
            {typeof navigator !== "undefined" && navigator.share && (
              <button
                onClick={nativeShare}
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white hover:bg-white/5"
              >
                <FaShare size={16} />
                Share
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
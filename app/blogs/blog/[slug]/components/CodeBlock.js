"use client";

import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

export default function CodeBlock({
  language = "text",
  code,
}) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="my-8 w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d0d0d]">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800 px-4 py-3">
        <span className="truncate text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="flex shrink-0 items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-xs text-zinc-400 transition hover:border-zinc-500 hover:text-white"
        >
          {copied ? (
            <>
              <FaCheck size={14} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <FaCopy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
    <div className="w-full overflow-x-auto">
  <pre className="inline-block min-w-full p-4 text-[10px] sm:text-[13px] leading-6 text-zinc-200">
    <code>{code}</code>
  </pre>
</div>
    </div>
  );
}
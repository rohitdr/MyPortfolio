"use client";

import { useEffect, useMemo, useState } from "react";

export default function TableOfContents({ content }) {
  const headings = useMemo(
    () =>
      content.filter((item) => item.type === "heading"),
    [content]
  );

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = headings
      .map((heading) =>
        document.getElementById(
          heading.text.toLowerCase().replace(/\s+/g, "-")
        )
      )
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside className="sticky top-28 hidden h-fit lg:block">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
          Contents
        </p>

        <nav>
          <ul className="space-y-3">
            {headings.map((heading) => {
              const id = heading.text
                .toLowerCase()
                .replace(/\s+/g, "-");

              const active = activeId === id;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`block text-sm transition ${
                      active
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
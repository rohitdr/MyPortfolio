"use client";

import CalloutBlock from "./CallOutBlock";
import CodeBlock from "./CodeBlock";
import ImageBlock from "./ImageBlock";
import QuoteBlock from "./QuoteBlock";

export default function BlogContent({ content }) {
  return (
    <article className="mx-auto max-w-4xl px-2 sm:px-6 py-20">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                id={block.text
                  .toLowerCase()
                  .replace(/\s+/g, "-")}
                className="mt-16 mb-6 text-3xl font-light text-white scroll-mt-24"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="mb-6 text-lg leading-9 text-zinc-300"
              >
                {block.text}
              </p>
            );

          case "quote":
            return (
              <QuoteBlock
                key={index}
                quote={block.text}
                author={block.author}
              />
            );

          case "callout":
            return (
              <CalloutBlock
                key={index}
                variant={block.variant}
                title={block.title}
                text={block.text}
              />
            );

          case "image":
            return (
              <ImageBlock
                key={index}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            );

          case "code":
            return (
              <CodeBlock
                key={index}
                language={block.language}
                code={block.code}
              />
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
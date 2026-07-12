import { notFound } from "next/navigation";
import blogs from "./data";
import author from "./author";
import ReadingProgress from "./components/ReadingProgress";
import BlogHero from "./components/BlogHero";
import TableOfContents from "./components/TableOfContent";
import BlogContent from "./components/BlogContent";
import FAQ from "./components/FAQ";
import BlogTags from "./components/BlogTags";
import ShareArticle from "./components/ShareArticle";
import AuthorCard from "./components/AuthorCard";
import RelatedBlogs from "./components/RelatedBlogs";
import BlogNavigation from "./components/BlogNavigation";
import BlogCTA from "./components/BlogCTA";


export default async function BlogPage({ blog,relatedBlogs,next,previous }) {


  return (
    <div className="bg-black text-white">
      <ReadingProgress />

      <BlogHero blog={blog} />

      <div className="mx-auto grid max-w-7xl gap-20 px-6 py-20 lg:grid-cols-[260px_1fr]">
        <TableOfContents content={blog.content} />

        <div>
          <BlogContent content={blog.content} />

          <FAQ faq={blog.faq} />

          <BlogTags tags={blog.tags} />

          <ShareArticle
            title={blog.title}
            url={`https://www.rohitdevstack.online/blogs/blog/${blog.slug}`}
          />

          <AuthorCard author={author} />
        </div>
      </div>

      <RelatedBlogs blogs={relatedBlogs} />

      <BlogNavigation
        previous={previous}
        next={next}
      />

      <BlogCTA />
    </div>
  );
}
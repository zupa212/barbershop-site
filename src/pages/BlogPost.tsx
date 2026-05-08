import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.id === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        {post.image && <meta property="og:image" content={post.image} />}
        <link rel="canonical" href="" />
      </Helmet>

      <Navbar />

      <div className="pt-28 pb-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-primary">
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog" className="text-primary">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {post.image && (
          <div className="w-full max-h-[500px] overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-400 mb-6">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content}
          </div>
        </article>

        {/* Related Posts Section */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Σχετικά Άρθρα</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.id}`} 
                  className="bg-gray-900 p-4 rounded hover:bg-gray-800 transition-colors"
                >
                  {relatedPost.image && (
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-48 object-cover mb-4"
                    />
                  )}
                  <h3 className="font-semibold">{relatedPost.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default BlogPost;


import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogPostList from "@/components/blog/BlogPostList";
import BlogCategories from "@/components/blog/BlogCategories";
import { Helmet } from "react-helmet";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Blog = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
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
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <BlogHeader />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogPostList />
          </div>
          <div className="lg:col-span-1">
            <BlogCategories />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Blog;

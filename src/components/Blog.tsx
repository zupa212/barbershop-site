
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Calendar, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Tips for Maintaining Your Beard",
      excerpt: "Learn the essential beard care routine every man should follow for a healthy, stylish beard.",
      image: "/uploads/8d854dcd-a1e8-4127-a9f4-739f49915caf.png",
      date: "July 15, 2023",
      author: "Alex Johnson",
      category: "Beard Care"
    },
    {
      title: "Summer Haircut Trends",
      excerpt: "Discover the hottest men's haircut styles that will keep you looking fresh this summer.",
      image: "/uploads/64406659-411c-4673-9901-7d99103c4796.png",
      date: "June 28, 2023",
      author: "Michael Smith",
      category: "Hair Trends"
    },
    {
      title: "Choosing the Right Hair Products",
      excerpt: "A guide to selecting the best hair products based on your hair type and desired style.",
      image: "/uploads/133ab73d-829c-47d1-bbd5-0719d13e39bb.png",
      date: "May 10, 2023",
      author: "David Wilson",
      category: "Hair Products"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-black to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 text-white">Hair Care Blog</h2>
        <p className="text-xl text-center mb-12 text-gray-300 max-w-2xl mx-auto">
          Expert tips, trends, and advice for the modern gentleman
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none text-white hover:bg-white/20 transition-all duration-300">
              <div className="h-56 overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <Scissors size={16} />
                  <span>{post.category}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

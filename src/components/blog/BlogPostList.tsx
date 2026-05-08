import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPostList = () => {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredPosts = sortedPosts.filter(post => post.featured);
  const otherPosts = sortedPosts.filter(post => !post.featured);
  const displayedPosts = [...featuredPosts, ...otherPosts];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedPosts.map((post) => (
        <Card key={post.id} className="bg-gray-900 border-gray-800 hover:border-primary transition-colors">
          {post.image && (
            <div className="w-full h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-white hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-400">
            {post.excerpt}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogPostList;

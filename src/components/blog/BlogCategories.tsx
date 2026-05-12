
import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TagIcon, BookText, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogCategories = () => {
  const categories = Object.entries(
    blogPosts.reduce<Record<string, number>>((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, count]) => ({ name, count }));

  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags || [])));

  return (
    <div className="space-y-8">
      {/* Categories widget */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="text-primary" size={20} />
          Κατηγορίες
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to="/blog"
              className="flex items-center justify-between py-2 border-b border-gray-800 hover:text-primary"
            >
              <span>{category.name}</span>
              <span className="text-sm bg-gray-800 px-2 py-1 rounded-full">{category.count}</span>
            </Link>
          ))}
        </div>
      </Card>
      
      {/* Recent posts widget */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookText className="text-primary" size={20} />
          Πρόσφατα Άρθρα
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="block hover:text-primary"
            >
              <p>{post.title}</p>
            </Link>
          ))}
        </div>
      </Card>
      
      {/* Tags widget */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TagIcon className="text-primary" size={20} />
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link 
              key={tag} 
              to="/blog"
              className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-black transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BlogCategories;

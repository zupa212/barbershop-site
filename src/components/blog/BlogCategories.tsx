
import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TagIcon, BookText, BookOpen } from "lucide-react";

const BlogCategories = () => {
  const categories = [
    { name: "Περιποίηση Γενειάδας", count: 8, slug: "beard-care" },
    { name: "Τάσεις Μαλλιών", count: 12, slug: "hair-trends" },
    { name: "Προϊόντα Μαλλιών", count: 6, slug: "hair-products" },
    { name: "Συμβουλές Styling", count: 9, slug: "styling-tips" },
    { name: "Νέα Καταστημάτων", count: 5, slug: "shop-news" },
    { name: "Επαγγελματική Εμφάνιση", count: 4, slug: "professional-look" },
  ];

  const recentPosts = [
    { title: "Πώς να επιλέξετε το ιδανικό κούρεμα για το σχήμα του προσώπου σας", slug: "ideal-haircut-face-shape" },
    { title: "Τα καλύτερα προϊόντα για λεπτά μαλλιά", slug: "best-products-thin-hair" },
    { title: "Φθινοπωρινές τάσεις στα ανδρικά κουρέματα", slug: "fall-mens-haircut-trends" },
  ];

  const tags = [
    "κουρέματα", "γενειάδα", "fade", "περιποίηση", "undercut", 
    "styling", "προϊόντα", "barber", "τάσεις", "φροντίδα μαλλιών"
  ];

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
              key={category.slug} 
              to={`/blog/category/${category.slug}`}
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
              key={post.slug} 
              to={`/blog/${post.slug}`}
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
              to={`/blog/tag/${tag}`}
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

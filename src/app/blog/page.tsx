import BlogPostCard from '@/components/BlogPostCard';

const blogPosts = [
  {
    id: 1,
    title: "Fremtidens policy-forskning",
    date: "15. januar 2025",
    excerpt: "Utforskning av nye trender og metoder innen moderne policy-forskning.",
    slug: "fremtidens-policy-forskning",
    tag: "Forskning",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Datadrevet beslutningstaking",
    date: "10. januar 2025",
    excerpt: "Hvordan dataanalyse transformerer policyutviklingsprosesser.",
    slug: "datadrevet-beslutningstaking",
    tag: "Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Strategier for samfunnsengasjement",
    date: "5. januar 2025",
    excerpt: "Beste praksis for å involvere lokalsamfunn i policyutvikling.",
    slug: "strategier-for-samfunnsengasjement",
    tag: "Engasjement",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-6xl font-bold mb-8 text-[#1e3a8a] leading-tight">
          Prosjekter
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              tag={post.tag}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


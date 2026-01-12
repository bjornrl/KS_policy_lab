import Link from "next/link";
import BlogPostCard from "@/components/BlogPostCard";
import GameOfLife from "@/components/GameOfLife";

const blogPosts = [
  {
    id: 1,
    title:
      "Sammen med ansatte i kommunen og fylkeskommunen utforsket Policy Lab muliggjørere og hindere for en interessebasert skolehverdag. Deltakerne pekte på spesifikke regulatoriske virkemid...",
    date: "15. januar 2025",
    excerpt:
      "Utforskning av nye trender og metoder innen moderne policy-forskning.",
    slug: "fremtidens-policy-forskning",
    tag: "Forskning",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title:
      "På Brunla Ungdomsskole ble skoledagen lagt opp for at 10-trinn fikk konstruere en interessebasert skolehverdag, basert på egne interesser i kombinasjon med formål og læreplanmål. Elevene delte seg opp i g...",
    date: "10. januar 2025",
    excerpt: "Hvordan dataanalyse transformerer policyutviklingsprosesser.",
    slug: "datadrevet-beslutningstaking",
    tag: "Data",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title:
      "Policy lab er en enhet i Kommunesektorens Organisasjon som jobber med å adressere regulatoriske hindringer. Forslag til nye reguleringer utvikles med utgangspunkt i kommunal sektors behov.",
    date: "5. januar 2025",
    excerpt: "Beste praksis for å involvere lokalsamfunn i policyutvikling.",
    slug: "strategier-for-samfunnsengasjement",
    tag: "Engasjement",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Regulatoriske utfordringer",
    date: "2. januar 2025",
    excerpt: "Analyse av regulatoriske hindringer og løsninger.",
    slug: "regulatoriske-utfordringer",
    tag: "Regulering",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Tverrsektorielt samarbeid",
    date: "28. desember 2024",
    excerpt:
      "Viktigheten av samarbeid på tvers av sektorer og forvaltningsnivåer.",
    slug: "tverrsektorielt-samarbeid",
    tag: "Samarbeid",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Kommunal sektors behov",
    date: "20. desember 2024",
    excerpt:
      "Hvordan identifisere og adressere kommunal sektors spesifikke behov.",
    slug: "kommunal-sektors-behov",
    tag: "Kommunal",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 gap-16 items-start mb-20">
          <div className="flex flex-col h-fit">
            <h1 className="text-6xl font-bold text-[#1e3a8a] leading-tight mb-8">
              Policy Lab
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/about"
                className="border-2 border-dashed border-red-500 text-[#1e3a8a] px-6 py-3 rounded hover:bg-red-50 transition-colors font-medium"
              >
                Om Policy Lab
              </Link>
              <Link
                href="/services"
                className="border-2 border-dashed border-red-500 text-[#1e3a8a] px-6 py-3 rounded hover:bg-red-50 transition-colors font-medium"
              >
                Metoder
              </Link>
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed">
              Policy lab er en enhet i Kommunesektorens Organisasjon som jobber
              med å adressere regulatoriske hindringer.
            </p>
            <p className="text-lg leading-relaxed">
              Forslag til nye reguleringer utvikles med utgangspunkt i kommunal
              sektors behov, og i samarbeid med alle relevante aktører på tvers
              av sektorer og forvaltningsnivåer
            </p>
          </div>
        </div>
        <div className="w-full flex-1 min-h-0 mb-48">
          <GameOfLife cellSize={15} speed={300} />
        </div>

        {/* Blog Posts Grid */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-[#1e3a8a]">Aktuelt</h2>
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

        {/* Bottom Button */}
        <div className="mt-16 mb-8">
          <button className="w-full bg-red-600 text-white py-4 px-6 text-lg font-semibold hover:bg-red-700 transition-colors">
            Bruk laben
          </button>
        </div>
      </div>
    </div>
  );
}

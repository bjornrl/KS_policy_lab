import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogPosts: Record<string, {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}> = {
  'fremtidens-policy-forskning': {
    id: 1,
    title: 'Fremtidens policy-forskning',
    date: '15. januar 2025',
    excerpt: 'Utforskning av nye trender og metoder innen moderne policy-forskning.',
    content: 'Policy-forskning gjennomgår en transformasjon med nye metoder og tilnærminger som utvider mulighetene for å forstå og utvikle effektiv politikk. Denne artikkelen utforsker de viktigste trendene som former fremtidens policy-forskning.',
  },
  'datadrevet-beslutningstaking': {
    id: 2,
    title: 'Datadrevet beslutningstaking',
    date: '10. januar 2025',
    excerpt: 'Hvordan dataanalyse transformerer policyutviklingsprosesser.',
    content: 'Dataanalyse og big data har revolusjonert måten vi tar beslutninger på. I denne artikkelen ser vi på hvordan kommuner kan bruke data for å utvikle mer informert og effektiv politikk.',
  },
  'strategier-for-samfunnsengasjement': {
    id: 3,
    title: 'Strategier for samfunnsengasjement',
    date: '5. januar 2025',
    excerpt: 'Beste praksis for å involvere lokalsamfunn i policyutvikling.',
    content: 'Effektivt samfunnsengasjement er avgjørende for å utvikle politikk som faktisk fungerer. Vi utforsker ulike strategier og metoder for å involvere innbyggere i policyutviklingsprosessen.',
  },
  'regulatoriske-utfordringer': {
    id: 4,
    title: 'Regulatoriske utfordringer',
    date: '2. januar 2025',
    excerpt: 'Analyse av regulatoriske hindringer og løsninger.',
    content: 'Regulatoriske hindringer kan hemme innovasjon og effektivitet i kommunal sektor. Denne artikkelen analyserer vanlige utfordringer og presenterer praktiske løsninger.',
  },
  'tverrsektorielt-samarbeid': {
    id: 5,
    title: 'Tverrsektorielt samarbeid',
    date: '28. desember 2024',
    excerpt: 'Viktigheten av samarbeid på tvers av sektorer og forvaltningsnivåer.',
    content: 'Tverrsektorielt samarbeid er essensielt for å løse komplekse samfunnsutfordringer. Vi ser på hvordan ulike aktører kan samarbeide mer effektivt.',
  },
  'kommunal-sektors-behov': {
    id: 6,
    title: 'Kommunal sektors behov',
    date: '20. desember 2024',
    excerpt: 'Hvordan identifisere og adressere kommunal sektors spesifikke behov.',
    content: 'For å utvikle effektiv politikk må vi først forstå kommunal sektors spesifikke behov og utfordringer. Denne artikkelen gir innsikt i hvordan vi kan identifisere og adressere disse behovene.',
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <Link
          href="/blog"
          className="text-[#1e3a8a] hover:underline mb-8 inline-block"
        >
          ← Tilbake til blogg
        </Link>
        <article>
          <h1 className="text-5xl font-bold text-[#1e3a8a] mb-4">
            {post.title}
          </h1>
          <p className="text-zinc-500 mb-8">
            {post.date}
          </p>
          <div className="prose prose-lg max-w-none text-zinc-700">
            <p className="text-xl text-zinc-600 mb-6 font-medium">
              {post.excerpt}
            </p>
            <p className="leading-relaxed">
              {post.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}


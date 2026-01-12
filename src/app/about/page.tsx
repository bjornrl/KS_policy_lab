export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-6xl font-bold mb-8 text-[#1e3a8a] leading-tight">
          Om laben
        </h1>
        <div className="space-y-6 text-[#1e3a8a]">
          <p className="text-lg leading-relaxed">
            Policy lab er en enhet i Kommunesektorens Organisasjon som jobber med å adressere regulatoriske hindringer.
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#1e3a8a]">
              Vår misjon
            </h2>
            <p className="text-lg leading-relaxed">
              Vi er dedikert til å fremme policy-forskning og gi innsikt som driver positiv endring i våre lokalsamfunn.
            </p>
            <p className="text-lg leading-relaxed">
              Forslag til nye reguleringer utvikles med utgangspunkt i kommunal sektors behov, og i samarbeid med alle relevante aktører på tvers av sektorer og forvaltningsnivåer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


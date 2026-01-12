export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-6xl font-bold mb-8 text-[#1e3a8a] leading-tight">
          Verktøykasse
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1e3a8a]">
              Policy-forskning
            </h2>
            <p className="text-lg text-[#1e3a8a] leading-relaxed">
              Omfattende policy-analyse og forskningstjenester.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1e3a8a]">
              Konsulenttjenester
            </h2>
            <p className="text-lg text-[#1e3a8a] leading-relaxed">
              Eksperttjenester for policyutvikling.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1e3a8a]">
              Dataanalyse
            </h2>
            <p className="text-lg text-[#1e3a8a] leading-relaxed">
              Avansert dataanalyse og visualiseringstjenester.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1e3a8a]">
              Opplæring
            </h2>
            <p className="text-lg text-[#1e3a8a] leading-relaxed">
              Utdanningsprogrammer og workshops om policy-temaer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


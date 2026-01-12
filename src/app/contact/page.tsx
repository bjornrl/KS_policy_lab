export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-6xl font-bold mb-8 text-[#1e3a8a] leading-tight">
          Start nå
        </h1>
        <div className="space-y-6 text-[#1e3a8a]">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#1e3a8a]">
              Kom i kontakt
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Vi vil gjerne høre fra deg. Ta kontakt med oss ved å bruke informasjonen nedenfor.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                E-post
              </h3>
              <p className="text-lg text-[#1e3a8a]">
                info@kspolicylab.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                Telefon
              </h3>
              <p className="text-lg text-[#1e3a8a]">
                +47 123 45 678
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                Adresse
              </h3>
              <p className="text-lg text-[#1e3a8a]">
                Policy Lab<br />
                Kommunesektorens Organisasjon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


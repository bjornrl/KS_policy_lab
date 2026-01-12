import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/KS Logo.svg"
            alt="KS Logo"
            width={168}
            height={84}
            className="h-10 w-auto"
            priority
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Søk..."
            className="border border-[#1e3a8a] rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-offset-1"
          />
          <button className="bg-[#1e3a8a] text-white p-2 rounded hover:bg-[#1e40af] transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path
                d="m21 21-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}


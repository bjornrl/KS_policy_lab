import Link from "next/link";
import { Circle } from "lucide-react";

interface NavbarButtonProps {
  title: string;
  href: string;
}

export default function NavbarButton({ title, href }: NavbarButtonProps) {
  return (
    <Link href={href} className="flex items-start justify-start flex-row gap-2">
      <Circle className="w-4 h-4 hidden hover:block" />
      <button
        type="button"
        className="bg-[#1e3a8a] text-white rounded hover:bg-[#274da7] transition-colors"
      >
        {title}
      </button>
    </Link>
  );
}

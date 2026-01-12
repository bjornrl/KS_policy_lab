import Link from "next/link";
import Image from "next/image";

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  image: string;
}

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  tag,
  image,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group overflow-hidden transition-all hover:bg-blue-50 bg-white"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6">
        {/* Tag */}

        {/* Title */}
        <div className="flex flex-row h-fill">
          <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-3 group-hover:underline">
            {title}
          </h2>
        </div>

        {/* Date */}

        <div className="flex justify-between items-center flex-row">
          {" "}
          <div>
            {" "}
            <p className="text-sm text-zinc-500 mb-4">{date}</p>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#1e3a8a] bg-blue-50 rounded-full mb-3">
              {tag}
            </span>
          </div>
          {/* Excerpt */}
          <button
            type="button"
            className="mt-2 px-4 py-2 bg-[#1e3a8a] text-white rounded hover:bg-[#274da7] transition-colors"
          >
            les mer
          </button>
        </div>
      </div>
    </Link>
  );
}

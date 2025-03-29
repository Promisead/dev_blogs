import Link from "next/link";
import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string; // Optional className prop
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" title="Home">
      <div className={`flex items-center space-x-4 ${className || ""}`}>
        <Image
          src="/images/logo/logo.png"
          alt="Logo"
          width={40} // Adjust width for responsive design
          height={40}
          className="w-10 h-10" // Tailwind classes for sizing
          unoptimized
        />
        <div className="flex">
          <span className="ml-3 text-2xl sm:text-3xl font-semibold text-[#077998]">
            DEV
          </span>
          <span className="ml-1 text-2xl sm:text-3xl font-semibold text-[#8A1D4F]">
            BLOGS
          </span>
        </div>
      </div>
    </Link>
  );
}

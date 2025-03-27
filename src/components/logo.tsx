import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Image from "next/image";


export default function Logo({ className }: { className?: string }) {
  return (
    <Link href={"/"} title="Home">
      <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo/logo_web.png"
                    alt="Logo"
                    width={40} // Adjust width as needed for responsive sizing
                    height={40}
                    className="w-10 h-10" // Tailwind sizing for better control on smaller screens
                    unoptimized
                  />
                  <span className="ml-3 text-2xl sm:text-3xl font-semibold text-[#077998]">
                   DEV
                  </span>
                  <span className="ml-3 text-2xl sm:text-3xl font-semibold text-[#8A1D4F]">
                    BLOGS
                  </span>
                </Link>
              </div>
      
        
    </Link>
  );
}

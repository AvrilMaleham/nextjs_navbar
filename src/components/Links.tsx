"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface LinkItem {
  title: string;
  path: string;
}

const link: LinkItem[] = [
  {
    title: "Contact ",
    path: "/contact",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Prices",
    path: "/prices",
  },
];

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  return (
    <div>
      {/* Top menu */}
      <div className="hidden md:flex items-center gap-5">
        {link.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`${
              pathName === link.path
                ? "bg-text text-bg rounded-full p-2" // Apply active styles
                : "" // Apply normal styles
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <button
        className=" md:hidden text-xl font-bold"
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button>

      {/* Sidebar menu */}
      {isOpen && (
        // Blur background
        <div className="fixed h-full w-screen bg-bg/50 backdrop-blur-sm top-0 right-0 md:hidden">
          <div className="flex flex-col items-center justify-center gap-10 absolute top-0 right-0 w-1/2 h-full bg-bg md:hidden">
            {link.map((linkItem) => (
              <Link
                href={linkItem.path}
                key={linkItem.title}
                className={`${
                  pathName === linkItem.path
                    ? "bg-text text-bg rounded-full p-2" // Apply active styles
                    : "" // Apply normal styles
                }`}
              >
                {linkItem.title}
              </Link>
            ))}
          </div>

          <button
            className="text-xl font-bold z-50 absolute m-8 right-5 top-5 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Links;

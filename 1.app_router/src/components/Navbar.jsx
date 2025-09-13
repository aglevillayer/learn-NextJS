"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-x-5 mb-6">
      <Link className="underline" href="/">
        Accueil
      </Link>
      <Link className="underline" href="/contact">
        Contact
      </Link>
      <Link
        className={`underline ${pathname === "/dashboard" && "bg-yellow-300"}`}
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={`underline ${pathname === "/blog" ? "text-red-600" : ""}`}
        href="/blog"
      >
        Blog
      </Link>
    </nav>
  );
}

export default Navbar;

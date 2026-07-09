import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  return (
    <header>
      {/* mobile navigation */}
      <nav className="flex gap-3 flex-col">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-2 flex-col">
          <Link href="/browse">Browse Services</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/submit">List your Trade</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>

      {/* desktop navigation */}
      {/* <nav className="hidden md:flex gap-4">
        <Link href="/browse">Browse</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/submit">List your Trade</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav> */}
    </header>
  );
}

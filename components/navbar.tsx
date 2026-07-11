"use client";

import Link from "next/link";
import Logo from "./logo";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      {/* mobile navigation */}
      <nav className="flex flex-col md:hidden">
        {/* logo */}
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </Button>
          </div>
        </div>

        {/* links  for mobile*/}
        {isMenuOpen && (
          <div className="flex gap-2 flex-col p-8 bg-background">
            <Link
              href="/browse"
              onClick={closeMenu}
              className=" font-semibold px-4 py-2 rounded-xl transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Browse Services
            </Link>
            <Link
              href="/categories"
              onClick={closeMenu}
              className=" font-semibold px-4 py-2 rounded-xl transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Categories
            </Link>
            <Link
              href="/submit"
              onClick={closeMenu}
              className=" font-semibold px-4 py-2 rounded-xl transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              List your Trade
            </Link>
            <Link
              href="/dashboard"
              onClick={closeMenu}
              className=" font-semibold px-4 py-2 rounded-xl transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Dashboard
            </Link>

            <Link href="/auth" className="w-full" onClick={closeMenu}>
              <Button
                variant="secondary"
                className="w-full bg-[#0db57b] hover:bg-[#0db57b]/80 transition-colors"
              >
                Login / Sign Up
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {/* desktop navigation */}
      <nav className="hidden md:flex justify-between items-center p-4">
        <Link href="/">
          <Logo />
        </Link>

        {/* desktop links */}
        <div className="flex items-center gap-6">
          <Link
            href="/browse"
            className={clsx(
              "font-semibold hover:text-[#0db57b]/80 transition-colors",
              {
                "text-[#0db57b]": path === "/browse",
              },
            )}
          >
            Browse
          </Link>
          <Link
            href="/categories"
            className={clsx(
              "font-semibold hover:text-[#0db57b]/80 transition-colors",
              {
                "text-[#0db57b]": path === "/categories",
              },
            )}
          >
            Categories
          </Link>
          <Link
            href="/submit"
            className={clsx(
              "font-semibold hover:text-[#0db57b]/80 transition-colors",
              {
                "text-[#0db57b]": path === "/submit",
              },
            )}
          >
            List your Trade
          </Link>
          <Link
            href="/dashboard"
            className={clsx(
              "font-semibold hover:text-[#0db57b]/80 transition-colors",
              {
                "text-[#0db57b]": path === "/dashboard",
              },
            )}
          >
            Dashboard
          </Link>

          <ModeToggle />

          <Link href="/auth">
            <Button
              variant="secondary"
              className="bg-[#0db57b] hover:bg-[#0db57b]/80 transition-colors"
            >
              Login / Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

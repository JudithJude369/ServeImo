"use client";

import Link from "next/link";
import Logo from "./logo";
// import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* mobile navigation */}
      <nav className="flex  flex-col md:hidden ">
        {/* logo */}
        <div className="flex justify-between items-center shadow-sm p-4 ">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            {/* <Button variant="outline" size="icon">
              <IoMdClose />
            </Button> */}
            <Button variant="outline" size="icon">
              <GiHamburgerMenu />
            </Button>
          </div>
        </div>
        {/* links */}
        <div className="flex gap-2 flex-col p-8  ">
          <Link href="/browse">Browse Services</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/submit">List your Trade</Link>
          <Link href="/dashboard">Dashboard</Link>

          <Link href="/auth" className="w-full">
            <Button variant="ghost" className="w-full bg-[#0db57b]">
              Login / Sign Up
            </Button>
          </Link>
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

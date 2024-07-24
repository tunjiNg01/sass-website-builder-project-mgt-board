import React from "react";
import Image from "next/image";
import logo from "@/../public/assets/plura-logo.svg";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ModeToggler } from "../global/ModeToggler";
const Navigation = () => {
  return (
    <div className="relative z-30 flex items-center justify-between bg-white p-4 dark:bg-dark-tremor-brand-faint">
      <aside className="flex items-center gap-2">
        <Image src={logo} width={40} height={40} alt="logo" />
        <span className="text-xl font-bold">Plura.</span>
      </aside>
      <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
        <ul className="flex items-center justify-center gap-8">
          <Link href="#">Pricing</Link>
          <Link href="#">About</Link>
          <Link href="#">Documentation</Link>
          <Link href="#">Features</Link>
        </ul>
      </nav>
      <aside className="flex items-center gap-2">
        <Link
          href={"/sign-in"}
          className="rounded-md bg-primary p-2 px-4 text-white hover:bg-primary/80"
        >
          Login
        </Link>
        {/* <UserButton /> */}
        <ModeToggler />
      </aside>
    </div>
  );
};

export default Navigation;

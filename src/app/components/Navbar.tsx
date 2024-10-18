'use client'

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-orange text-white">
      <nav className="flex justify-between items-center w-9/12 mx-auto py-6">
        <h1>ELO DIGITAL</h1>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? String.fromCharCode(10005) : String.fromCharCode(9776)}
        </button>

        <ul className={`flex flex-col lg:flex-row gap-4 lg:gap-8 ${isOpen ? "block" : "hidden"} lg:flex`}>
          <li>
            <Link href="#home">HOME</Link>
          </li>

          <li>
            <Link href="#services">SERVIÇOS</Link>
          </li>

          <li>
            <Link href="#tools">FERRAMENTAS</Link>
          </li>

          <li>
            <Link href="#questions">DUVIDAS</Link>
          </li>

          <li>
            <Link href="#">CONTATO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

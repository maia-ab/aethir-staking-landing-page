"use client";

import { IoMenu, IoCloseOutline } from "react-icons/io5";
import Logo from "./logo";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  {
    href: "/connectWallet",
    label: "Connect Wallet",
  },
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/documentation",
    label: "Documentation",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
];

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    console.log({ isOpen });
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    console.log({ isOpen });
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between md:hidden">
      <Logo />
      <div className="my-auto" onClick={handleMenuClick}>
        <IoMenu size={50} />
      </div>
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" fixed top-10 right-20" onClick={handleCloseClick}>
          <IoCloseOutline size={50} />
        </div>
        <div>
          <ul className=" py-10 my-5 text-4xl flex flex-col items-center gap-8">
            {navLinks.slice(1).map((link) => (
              <li
                className="hover:text-green"
                key={link.href}
                onClick={handleCloseClick}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;

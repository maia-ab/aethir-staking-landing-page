"use client";

import { IoMenu, IoCloseOutline } from "react-icons/io5";
import Logo from "./logo";
import { useState } from "react";
import ConnectButton from "./connectButton";
import NavLinks from "./navLinks";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log({ isOpen });
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log({ isOpen });
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between md:hidden">
      <Logo />
      <div className="my-auto" onClick={handleOpen}>
        <IoMenu size={50} />
      </div>
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" fixed top-10 right-20" onClick={handleClose}>
          <IoCloseOutline size={50} />
        </div>
        <div>
          <NavLinks
            ulSytling="py-10 my-5 text-4xl flex flex-col items-center gap-8"
            liStyling="hover:text-green"
            onClick={handleClose}
            links={[
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
            ]}
          />
        </div>
        <div onClick={handleClose}>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;

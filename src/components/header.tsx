import Link from "next/link";
import Logo from "./logo";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/connectWallet",
    label: "Connect Wallet",
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

export default function Header() {
  return (
    <header className="bg-[#FCFFF0] px-20 py-5">
      <nav className="flex">
        <Link href={navLinks[0].href}>
          <Logo />
        </Link>
        <ul className="flex justify-items-center gap-3 w-[200px] mx-8 my-5 text-lg">
          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link className="ml-auto" href={navLinks[1].href}>
          <button>Connect Wallet</button>
        </Link>
      </nav>
    </header>
  );
}

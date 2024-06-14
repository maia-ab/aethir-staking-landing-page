import Link from "next/link";
import Logo from "./logo";

const navLinks = [
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
    <header>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          {
            navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

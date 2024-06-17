import Link from "next/link";

type Link = {
  href: string;
  label: string;
};

type NavLinksProps = {
  links: Link[];
  ulSytling: string;
  liStyling: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

function NavLinks({ ulSytling, liStyling, onClick, links }: NavLinksProps) {
  return (
    <>
      <ul className={ulSytling}>
        {links.map((link) => (
          <li className={liStyling} key={link.href} onClick={onClick}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavLinks;

import Logo from "./logo";
import ConnectButton from "./connectButton";
import NavLinks from "./navLinks";

function Navbar() {
  return (
    <div className="hidden md:block">
      <nav className="flex">
        <Logo />
        <NavLinks
          links={[
            {
              href: "/documentation",
              label: "Documentation",
            },
            {
              href: "/faq",
              label: "FAQ",
            },
          ]}
          ulSytling="flex justify-items-center gap-20 w-[200px] mx-20 my-5 text-lg"
          liStyling="hover:text-green"
        />

        <div className="ml-auto my-auto">
          <ConnectButton />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

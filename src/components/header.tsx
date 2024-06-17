import Navbar from "./navbar";
import Logo from "./logo";
import MobileNavbar from "./mobileNavbar";

export default function Header() {
  return (
    <header className="px-20 py-5">
      <Navbar />
      <MobileNavbar />
    </header>
  );
}

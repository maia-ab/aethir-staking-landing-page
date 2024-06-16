import Image from "next/image";
import ButtonGrid from "./buttonGrid";

function Footer() {
  return (
    <footer className="bg-black-green text-white px-40 py-20 ">
      <div className="flex ">
        <div className="w-[600px]">
          <h2 className="text-2xl font-semibold my-2">Header</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            expedita ad aspernatur architecto aut soluta aperiam ipsum assumenda
            hic esse qui necessitatibus, harum quaerat perspiciatis. Nihil
            repellendus distinctio vel dolor.
          </p>
        </div>
        <div className="ml-auto">
          <ButtonGrid />
        </div>
      </div>
      <hr className="my-10" />
      <Image src="/Vector.svg" alt="Aethir Logo" width={40} height={40} />
    </footer>
  );
}

export default Footer;

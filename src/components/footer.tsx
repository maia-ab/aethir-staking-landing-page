import Image from "next/image";
import ButtonGrid from "./buttonGrid";

function Footer() {
  return (
    <footer className="bg-black-green text-white px-10 py-20">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <div className="">
          <h2 className="text-2xl font-semibold my-2">Header</h2>
          <p className=" max-h-50 max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            expedita ad aspernatur architecto aut soluta aperiam ipsum assumenda
            hic esse qui necessitatibus, harum quaerat perspiciatis. Nihil
            repellendus distinctio vel dolor.
          </p>
        </div>
        <div className="">
          <ButtonGrid />
        </div>
      </div>
      <hr className="my-10" />
      <Image src="/Vector.svg" alt="Aethir Logo" width={40} height={40} />
    </footer>
  );
}

export default Footer;

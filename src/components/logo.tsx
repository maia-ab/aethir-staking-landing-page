import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="bg-black rounded-full p-2"
        src="/Vector.svg"
        alt="Aethir Logo"
        width={60}
        height={60}
      />
      <h2 className="mx-1 font-medium" >Aethir</h2>
    </div>
  );
}

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
      <h1 className="mx-1 font-bold">Aethir</h1>
    </div>
  );
}

import Image from "next/image";

type HeroProps = {
  imageUrl: string;
  imageAlt: string;
  text: string;
  subtext: string;
};

function Hero({ imageUrl, imageAlt, text, subtext }: HeroProps) {
  return (
    <div className="relative">
      <Image
        className=""
        src={imageUrl}
        alt={imageAlt}
        width={1780}
        height={1780}
      />
      <div className="flex flex-col justify-center items-center absolute inset-0">
        <h1 className="text-white text-6xl  md:text-7xl lg:text-8xl">{text}</h1>
        <p className="text-white text-lg md:text-2xl font-light">{subtext}</p>
      </div>
    </div>
  );
}

export default Hero;

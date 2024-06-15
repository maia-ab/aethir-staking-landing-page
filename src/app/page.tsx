import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="">
      <Hero
        imageUrl="/hero-image.png"
        imageAlt="Aethir hero image"
        text="Aethir Staking"
        subtext="Brief explanation, stake to recieve passive income etc."
      />
    </main>
  );
}

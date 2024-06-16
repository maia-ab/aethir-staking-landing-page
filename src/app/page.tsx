import SupportPanel from "@/components/supportPanel";
import Hero from "@/components/hero";
import TextPanel from "@/components/textPanel";
import CardPanel from "@/components/cardPanel";

export default function Home() {
  return (
    <main className="mx-20">
      <Hero
        imageUrl="/hero-image.png"
        imageAlt="Aethir hero image"
        text="Aethir Staking"
        subtext="Brief explanation, stake to recieve passive income etc."
      />
      <TextPanel title="Total Value Locked" text="300.00 ATH" />
      <CardPanel />
      <SupportPanel
        text="Still not sure? We got you!"
        buttonText="Get Support"
      />
    </main>
  );
}

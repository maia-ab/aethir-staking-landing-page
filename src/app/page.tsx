import SupportPanel from "@/components/support-panel";
import Hero from "@/components/hero";
import TextPanel from "@/components/text-panel";
import CardPanel from "@/components/card-panel";

export default function Home() {
  return (
    <main className="mx-20 bg-red-500">
      <Hero
        imageUrl="/hero-image.png"
        imageAlt="Aethir hero image"
        text="Aethir Staking"
        subtext="Brief explanation, stake to recieve passive income etc."
      />
      <TextPanel title="Total Value Locked" text="300.00 ATH" />
      <SupportPanel
        text="Still not sure? We got you!"
        buttonText="Get Support"
      />
      <CardPanel />
    </main>
  );
}

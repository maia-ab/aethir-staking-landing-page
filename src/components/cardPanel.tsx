import Card from "./card";

function CardPanel() {
  return (
    <div className="bg-beige  px-30 py-8 rounded-xl flex flex-col items-center md:flex-row place-content-around flex-wrap">
      <Card
        amount={100.0}
        heading="Stake to Gaming Ecosystem"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam ratione fuga, ad assumenda ipsa fugit dolores deserunt dicta? Soluta quidem perferendis perspiciatis accusamus ea hic repellendus tempora et unde! Voluptas, dolorem."
        buttonLink="/explore/gaming"
      />
      <Card
        amount={100.0}
        heading="Stake to AI Ecosystem"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam ratione fuga, ad assumenda ipsa fugit dolores deserunt dicta? Soluta quidem perferendis perspiciatis accusamus ea hic repellendus tempora et unde! Voluptas, dolorem."
        buttonLink="/explore/ai"
      />
      <Card
        amount={100.0}
        heading="Stake to Ecosystem"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam ratione fuga, ad assumenda ipsa fugit dolores deserunt dicta? Soluta quidem perferendis perspiciatis accusamus ea hic repellendus tempora et unde! Voluptas, dolorem."
        buttonLink="/explore/ecosystem"
      />
    </div>
  );
}

export default CardPanel;

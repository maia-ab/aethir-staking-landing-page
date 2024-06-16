
import Card from "./card";

function CardPanel() {


  return (
    <div className="bg-beige flex place-content-around px-30 py-8 rounded-xl">
      <Card
        amount={100.0}
        heading="Stake to Gaming Ecosystem"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam ratione fuga, ad assumenda ipsa fugit dolores deserunt dicta? Soluta quidem perferendis perspiciatis accusamus ea hic repellendus tempora et unde! Voluptas, dolorem."
      />
      <Card
        amount={100.0}
        heading="Stake to AI Ecosystem"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam ratione fuga, ad assumenda ipsa fugit dolores deserunt dicta? Soluta quidem perferendis perspiciatis accusamus ea hic repellendus tempora et unde! Voluptas, dolorem."
      />
      <Card
        amount={100.0}
        heading="Stake to Ecosystem"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam ratione fuga, ad assumenda ipsa fugit dolores deserunt dicta? Soluta quidem perferendis perspiciatis accusamus ea hic repellendus tempora et unde! Voluptas, dolorem."
      />
    </div>
  );
}

export default CardPanel;

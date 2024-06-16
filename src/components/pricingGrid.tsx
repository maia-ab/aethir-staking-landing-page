type PricingGridProps = {
  prices: [number, number, number, number, number];
  percenteges: [number, number, number, number, number];
};

function PricingGrid({ prices, percenteges }: PricingGridProps) {
  return (
    <div className="flex gap-3">
      {prices.map((price, index) => (
        <div key={index}>
          <p>{price}d</p>
          <p>{percenteges[index].toFixed(2)}%</p>
        </div>
      ))}
    </div>
  );
}

export default PricingGrid;

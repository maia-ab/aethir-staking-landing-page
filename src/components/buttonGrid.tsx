import { RiArrowRightSLine } from "react-icons/ri";

const ButtonGrid = () => {
  const buttons = Array.from({ length: 12 }, (_, index) => (
    <div key={index} className="text-white text-lg flex py-4">
      <div className="my-auto">
        <RiArrowRightSLine />
      </div>
      <button>Button</button>
    </div>
  ));

  return <div className="w-[400px] grid grid-cols-3">{buttons}</div>;
};
export default ButtonGrid;

import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

type SupportPanelProps = {
  text: string;
  buttonText: string;
};

function SupportPanel({ text, buttonText }: SupportPanelProps) {
  return (
    <div className="bg-beige text-darkgreen px-20 my-16 max-w-[1780px] h-[200px] rounded-xl  flex items-center justify-center flex-wrap lg:justify-between ">
      <h2 className="text-4xl md:text-5xl">{text}</h2>
      <Link className="" href={"/support"}>
        <button className="bg-green flex gap-3 text-lg px-4 py-2 md:text-2xl md:px-6 md:py-4 rounded-xl hover:bg-[#CEEA5C] ">
          {buttonText}
          <MdArrowOutward size={30} />
        </button>
      </Link>
    </div>
  );
}

export default SupportPanel;


import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

type SupportPanelProps = {
  text: string;
  buttonText: string;
};

function SupportPanel({ text, buttonText }: SupportPanelProps) {
  return (
    <div className="bg-beige text-darkgreen flex items-center px-20 my-16 mx-auto max-w-[1780px] h-[200px] rounded-xl ">
      <h2 className="text-5xl">{text}</h2>
      <Link className=" ml-auto " href={"/support"}>
        <button className="bg-green flex gap-3 text-2xl px-6 py-4 rounded-xl">
          {buttonText}
          <MdArrowOutward size={30} />
        </button>
      </Link>
    </div>
  );
}

export default SupportPanel;


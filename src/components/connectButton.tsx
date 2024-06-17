import Link from "next/link";

function ConnectButton() {
  return (
    <Link href={"/connectWallet"}>
      <button className="bg-fluorescent-green border-green text-darkgreen w-[200px] h-[50px] rounded-xl border-[1px] hover:bg-[#E4FF71]">
        Connect Wallet
      </button>
    </Link>
  );
}

export default ConnectButton;

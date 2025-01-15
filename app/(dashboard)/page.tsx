import ModeToggle from "@/components/ToggleMode";
import Image from "next/image";

export default function Page() {
  return (
    <div className="px-3 w-full">
      <div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center ">
            <Image src="/logo.svg" height={70} width={70} alt="Logo" />
            <h1 className="font-bold text-3xl px-3">DoIt</h1>
          </div>

          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
}

import { UserButton } from "@clerk/nextjs";
import ModeToggle from "@/components/ToggleMode";
import Image from "next/image";

export default function Page() {
  return (
    <div className="px-3">
      <div>
        <div className="flex items-center"> 
          {/* 3 line menu box here */}
          <div className="flex items-center justify-center">
            <Image src='/logo.svg' height={30} width={30} alt="Logo"/>
            <h1>DoIt</h1>
          </div>
          <UserButton afterSignOutUrl="/" />
          <h1>This is dashboard page</h1>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
}

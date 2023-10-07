import Image from "next/image";
import { ThemeButton } from "@/components/theme-button";

export default function Home() {
  return (
    <div className="grid h-[100vh]" style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}>
      <div className="col-span-1 border-r border-slate-[#D7D7D7]"></div>
      <div className="col-span-12">
        <div className="flex gap-2">
          <Image
            width={51}
            height={29}
            alt="logo"
            src={"/assets/svg/fg_logo.svg"}
          ></Image>
          <h1 className="font-hauora font-bold text-5xl text-[36px]">
            FIXED.G
          </h1>
        </div>
      </div>
      <div className="col-span-1 border-l border-slate-[#D7D7D7]"></div>
      <div className="my-[60px]"></div>
    </div>
  );
}

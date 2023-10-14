"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { initializeSmoothScrollbar } from "@/lib/scrollbar-init";
import { ThemeButton } from "@/components/theme-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    const scrollbar = initializeSmoothScrollbar();

    return () => {
      scrollbar.destroy(); // Clean up when the component unmounts
    };
  }, []);

  return (
    <div id="my-scrollbar" className="h-screen overflow-x-hidden">
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}
      >
        {/* Top Bar */}
        <div className="col-span-1 h-[60px] border-b border-[#D7D7D7]"></div>
        <div className="col-span-12 h-[60px] border-x border-b border-[#D7D7D7]">
          <div className="flex justify-end h-full pr-3">
            <div className="my-auto">
              <ThemeButton />
            </div>
          </div>
        </div>
        <div className="col-span-1 h-[60px] border-b border-[#D7D7D7]"></div>

        {/* Hero Section */}
        <div className="col-span-1"></div>
        <div className="col-span-12 border-x pb-[50px] border-[#D7D7D7]">
          <div className="flex gap-2 m-[10px]">
            <Image
              width={41}
              height={19}
              alt="logo"
              src={"/assets/svg/fg_logo.svg"}
            ></Image>
            <h1 className="font-bold my-auto text-5xl text-[20px] lg:text-[36px]">
              FIXED.G
            </h1>
            <div className="bg-[#F7484E] h-[15px] w-[15px] lg:h-[25px] lg:w-[24px] my-auto"></div>
            <div className="bg-[#292929] h-[15px] w-[15px] lg:h-[25px] lg:w-[24px] my-auto"></div>
          </div>
          <div className="flex relative h-fit mt-10 md:mt-0">
            <Image
              className="invisible md:visible absolute -z-50 -right-10 -bottom-[150px]"
              width={200}
              height={200}
              src={"/assets/svg/nut_element.svg"}
              alt={"nut_element.svg"}
            ></Image>
            <Image
              className="invisible md:visible absolute -z-50 -left-[300px]"
              width={1400}
              height={1400}
              src={"/assets/svg/bike_parts_element.svg"}
              alt={"bike_parts.svg"}
            ></Image>
            <div className="flex flex-col-reverse md:flex-row gap-5 justify-between mx-3 sm:mx-0 md:mx-5 xl:mx-[41px] z-10 w-full">
              <div className="flex my-auto flex-col 2xl:mt-[320px]">
                <h1 className="sm:w-[622px] md:w-full text-[20px] lg:text-[30px] 2xl:text-[48px] text-center font-bold">
                  Your very first stop to buy, repair, and sell fixed gear.
                </h1>
                <p className="sm:w-[622px] md:w-full text-[16px] 2xl:text-[36px] text-center font-regular">
                  and also to eat and drink!
                </p>
                <div className="flex flex-col gap-2 text-center mt-5 2xl:mt-[170px]">
                  <div className="text-[#9B9B9B] text-xs 2xl:text-base">
                    scroll to explore
                  </div>
                  <a href="#bikes">
                    <img
                      className="mx-auto w-[16px] h-[16px] animate-bounce"
                      src="/assets/svg/chevron_down_blue.svg"
                      alt="chev_down"
                    />
                  </a>
                </div>
              </div>
              <div className="max-[768px]:w-full max-[1600px]:w-1/2 max-w-[742px] max-h-[863px]">
                <Image
                  width={1000}
                  height={1000}
                  src={"/assets/img/cycle.png"}
                  alt={"cycle.png"}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        {/*  Separator */}
        <div
          className="col-span-1 h-[60px] border-y border-[#D7D7D7]"
          id="bikes"
        >
          <div className="w-full h-full flex items-center">
            <div className="text-[#D7D7D7] font-thin mx-auto">#</div>
          </div>
        </div>
        <div className="col-span-12 h-[60px] border-r border-b border border-[#D7D7D7] px-10 py-4">
          <h1 className="text-[#D7D7D7] font-thin ">fixed.g/bikes</h1>
        </div>
        <div className="col-span-1 h-[60px] border-y border-[#D7D7D7]"></div>

        {/* Bike Section */}
        <div className="col-span-1">
          <h1
            className="mx-auto mt-10 text-[#D7D7D7] font-thin [writing-mode:vertical-lr]"
            style={{ transform: "rotate(180deg)" }}
          >
            01 - FG
          </h1>
        </div>
        <div className="col-span-12 relative border-x pb-[50px] border-[#D7D7D7]">
          {/* absolute bg element */}
          <Image
            className="invisible md:visible absolute -z-50 -bottom-[300px] right-[30%]"
            width={500}
            height={500}
            src={"/assets/svg/wrench_element.svg"}
            alt={"wrench.svg"}
          ></Image>
          {/* ------------------- */}
          <div className="flex flex-col md:flex-row justify-between m-[12px] md:m-[20px] 2xl:m-[50px]">
            <div className="basis-2/3 grid grid-cols-4 gap-3">
              <img
                className="col-span-2 w-full h-full"
                src="/assets/img/bike - 01.png"
                alt="bike - 01"
              ></img>
              <img
                className="col-span-2 w-full h-full"
                src="/assets/img/bike - 02.png"
                alt="bike - 02"
              ></img>
              <img
                className="col-span-3 w-full h-full"
                src="/assets/img/bike - 03.png"
                alt="bike - 03"
              ></img>
              <img
                className="col-span-1 w-full h-full"
                src="/assets/img/bike - 04.png"
                alt="bike - 04"
              ></img>
              <div className="col-span-4 flex gap-5">
                <hr className="w-full my-auto border-t border-gray-200" />
                <p className="w-fit whitespace-nowrap text-[#D7D7D7] font-light text-[10px] md:text-[16px]">
                  fixed.g/bikes 001 - 004
                </p>
              </div>
            </div>
            <div className="basis-1/2 mt-10 md:mt-0 flex flex-col mx-5 lg:mx-10 2xl:mx-20">
              <div className="flex flex-col gap-5 my-auto">
                <h1 className="text-[20px] lg:text-[30px] 2xl:text-[48px] text-center font-bold">
                  We provide wide variety of fixed gears.
                </h1>
                <p className="text-center text-[16px] 2xl:text-[24px] font-normal">
                  From NJS to Dosnoventa, we have them! Whatever type you
                  choose, we always provide high quality products.
                  <br />
                  <br /> We also sell used bikes, but don’t worry! We’ve
                  restored them like new again :)
                </p>
                <div className="flex justify-center w-full">
                  <Button className="flex justify-center h-fit w-fit px-6 py-3 lg:px-10 lg:py-6 2xl:text-[24px] font-normal bg-[#4871F7] hover:bg-[#3C5ECC]">
                    Explore Now!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>

        {/*  Separator */}
        <div className="col-span-1 h-[60px] border-y border-[#D7D7D7]"></div>
        <div className="col-span-12 h-[60px] border-r border-b border border-[#D7D7D7] px-10 py-4">
          <div className="flex justify-end">
            <h1 className="text-[#D7D7D7] font-thin">fixed.g/repair</h1>
          </div>
        </div>
        <div className="col-span-1 h-[60px] border-y border-[#D7D7D7]"></div>

        {/* Repair Bike Section */}
        <div className="col-span-1"></div>
        <div className="col-span-12 relative border-x pb-[50px] border-[#D7D7D7]">
          {/* absolute bg element */}
          <Image
            className="invisible md:visible absolute -z-50 bottom-0"
            width={200}
            height={200}
            src={"/assets/svg/gear_element.svg"}
            alt={"gear.svg"}
          ></Image>
          {/* ------------------- */}
          <div className="flex flex-col gap-3 md:flex-row justify-between m-[12px] md:m-[20px] 2xl:m-[50px]">
            <div className="basis-1/2 mt-10 md:mt-0 flex flex-col mx-5 lg:mx-10 2xl:mx-20">
              <div className="flex flex-col gap-5 my-auto">
                <h1 className="text-[20px] lg:text-[30px] 2xl:text-[48px] text-center font-bold">
                  Something happened with your bike? We’ll handle it.
                </h1>
                <p className="text-center text-[16px] 2xl:text-[24px] font-normal">
                  Experience the thrill of seamless cycling once again at our
                  shop, where we specialize in repairing fixed gear bikes. Say
                  goodbye to wobbly rides and hello to precision and performance
                  – let's get your fixed gear bike back in its prime!
                </p>
                <div className="flex justify-center w-full">
                  <Button className="flex justify-center h-fit w-fit px-6 py-3 lg:px-10 lg:py-6 2xl:text-[24px] font-normal bg-[#4871F7] hover:bg-[#3C5ECC]">
                    Browse Repair Types
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {/* vertical line */}
              <div className="flex flex-col gap-5">
                <p
                  className="w-fit whitespace-nowrap text-[#D7D7D7] text-[10px] md:text-[16px] font-light [writing-mode:vertical-lr]"
                  style={{ transform: "rotate(180deg)" }}
                >
                  fixed.g/mechanics
                </p>
                <div className="border-l border-[#D7D7D7] h-full mx-auto"></div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <img
                  className="col-span-2 w-full h-full"
                  src="/assets/img/repair guy - 01.png"
                  alt="repair guy - 01"
                ></img>
                <img
                  className="col-span-2 w-full h-full"
                  src="/assets/img/repair guy - 02.png"
                  alt="repair guy - 02"
                ></img>
                <img
                  className="col-span-4 w-full h-full"
                  src="/assets/img/repair guy - 03.png"
                  alt="repair guy - 03"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="mx-auto mt-10 text-[#D7D7D7] font-thin [writing-mode:vertical-lr]">
            02 - FG
          </h1>
        </div>
      </div>
    </div>
  );
}

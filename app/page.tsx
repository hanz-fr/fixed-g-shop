"use client";

import React, { useEffect, useState } from "react";
import { initializeSmoothScrollbar } from "@/lib/scrollbar-init";
import { ThemeButton } from "@/components/theme-button";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CafeImgCaruosel from "@/components/ui/cafe-img-carousel";
import CafeImgNormal from "@/components/ui/cafe-img-normal";

export default function Home() {
  useEffect(() => {
    const scrollbar = initializeSmoothScrollbar();

    return () => {
      scrollbar.destroy();
    };
  }, []);

  const { theme } = useTheme();

  const [objectPosition, setObjectPosition] = useState<string>("");
  const [currentWidth, setCurrentWidth] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      const newPosition = window.innerWidth >= 768 ? "50% 30%" : "50% 50%";
      const newWidth = window.innerWidth >= 768 ? "md" : "sm";
      setObjectPosition(newPosition);
      setCurrentWidth(newWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="my-scrollbar" className="h-screen overflow-x-hidden">
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}
      >
        {/* Top Bar */}
        <div className="col-span-1 h-[60px] border-b border-[#D7D7D7] dark:border-[#292929]"></div>
        <div className="col-span-12 h-[60px] border-x border-b border-[#D7D7D7] dark:border-[#292929]">
          <div className="flex justify-end h-full pr-3">
            <div className="my-auto">
              <ThemeButton />
            </div>
          </div>
        </div>
        <div className="col-span-1 h-[60px] border-b border-[#D7D7D7] dark:border-[#292929]"></div>

        {/* --  Hero Section -- */}
        <div className="col-span-1"></div>
        <div className="col-span-12 border-x pb-[50px] border-[#D7D7D7] dark:border-[#292929]">
          <div className="flex gap-2 m-[10px]">
            {/* {theme == "light" && (
              <Image
                width={41}
                height={19}
                alt="logo"
                src={"/assets/svg/fg_logo.svg"}
              ></Image>
            )} */}
            <svg
              className="my-auto"
              width="51"
              height="29"
              viewBox="0 0 51 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_4)">
                <path
                  d="M41.4375 9.96875C39.6853 9.96875 38.0469 10.4482 36.6326 11.2701L30.4388 1.8125H39.1807C39.1689 2.26381 39.0633 3.01872 38.5442 3.61231C38.0096 4.22222 37.1453 4.53125 35.9732 4.53125C35.8524 4.53125 35.7366 4.57899 35.6512 4.66397C35.5658 4.74894 35.5179 4.8642 35.5179 4.98438C35.5179 5.10455 35.5658 5.21981 35.6512 5.30478C35.7366 5.38976 35.8524 5.4375 35.9732 5.4375C37.4203 5.4375 38.5159 5.02425 39.2299 4.20862C40.2891 2.99787 40.0769 1.36663 40.0669 1.29775C40.0519 1.18932 39.998 1.08994 39.9152 1.01798C39.8323 0.946015 39.7261 0.906328 39.6161 0.90625H29.5982C29.5159 0.905676 29.4349 0.927418 29.3641 0.969143C29.2932 1.01087 29.2351 1.071 29.196 1.14309C29.1569 1.21519 29.1382 1.29652 29.142 1.37837C29.1458 1.46021 29.1719 1.53949 29.2175 1.60769L31.7958 5.54444H17.3473L14.5396 0.90625H19.5804C19.7011 0.90625 19.8169 0.85851 19.9023 0.773533C19.9877 0.688555 20.0357 0.573301 20.0357 0.453125C20.0357 0.332949 19.9877 0.217695 19.9023 0.132717C19.8169 0.0477398 19.7011 0 19.5804 0L11.3839 0C11.2632 0 11.1473 0.0477398 11.0619 0.132717C10.9765 0.217695 10.9286 0.332949 10.9286 0.453125C10.9286 0.573301 10.9765 0.688555 11.0619 0.773533C11.1473 0.85851 11.2632 0.90625 11.3839 0.90625H13.4913C13.5004 0.927094 13.5022 0.94975 13.5141 0.969688L16.6214 6.10087L13.8401 10.9856C12.5138 10.3183 11.0487 9.97002 9.5625 9.96875C4.28946 9.96875 0 14.2372 0 19.4844C0 24.7316 4.28946 29 9.5625 29C14.6516 29 18.8126 25.0207 19.0521 19.9375H29.1429C29.1693 20.4622 29.0554 21.1772 28.5564 21.74C28.0172 22.3481 27.142 22.6562 25.9554 22.6562C25.8346 22.6562 25.7188 22.704 25.6334 22.789C25.548 22.8739 25.5 22.9892 25.5 23.1094C25.5 23.2296 25.548 23.3448 25.6334 23.4298C25.7188 23.5148 25.8346 23.5625 25.9554 23.5625C27.4198 23.5625 28.5272 23.1483 29.2467 22.3318C30.2867 21.1501 30.0909 19.5804 30.0827 19.5143C30.0683 19.4052 30.0146 19.3051 29.9315 19.2325C29.8484 19.16 29.7416 19.12 29.631 19.1201H26.0537L32.4715 6.57756L35.8685 11.7649C33.4551 13.4932 31.875 16.3053 31.875 19.4844C31.875 24.7316 36.1645 29 41.4375 29C46.7105 29 51 24.7316 51 19.4844C51 14.2372 46.7105 9.96875 41.4375 9.96875ZM31.5153 6.34375L25.2787 18.6398L17.8964 6.34375H31.5153ZM17.1606 6.99172L24.5055 19.1201H19.1068C19.047 17.5728 18.6081 16.0636 17.8285 14.7236C17.0488 13.3836 15.952 12.2534 14.6334 11.4314L17.1606 6.99172ZM18.1961 19.1201H10.2556L14.1844 12.219C15.363 12.9618 16.3435 13.9774 17.0421 15.1792C17.7406 16.3809 18.1366 17.733 18.1961 19.1201ZM9.5625 28.0938C4.79218 28.0938 0.910714 24.2313 0.910714 19.4844C0.910714 14.7374 4.79218 10.875 9.5625 10.875C10.9377 10.875 12.2345 11.2049 13.3911 11.7749L9.078 19.3493C9.03861 19.4182 9.01812 19.4961 9.0186 19.5754C9.01908 19.6546 9.04051 19.7323 9.08073 19.8007C9.16179 19.9393 9.31205 20.0254 9.47416 19.9366H18.187C17.9037 24.5204 14.1498 28.0938 9.5625 28.0938ZM41.4375 28.0938C36.6672 28.0938 32.7857 24.2313 32.7857 19.4844C32.7857 16.6233 34.201 14.0904 36.3666 12.5244L41.1452 19.8206C41.2114 19.9209 41.3148 19.9911 41.4329 20.0159C41.5509 20.0407 41.674 20.0181 41.7754 19.9529C41.8762 19.887 41.9468 19.7841 41.9717 19.6666C41.9966 19.5491 41.9738 19.4266 41.9083 19.3258L37.1298 12.0296C38.4383 11.2735 39.9244 10.8752 41.4375 10.875C46.2078 10.875 50.0893 14.7374 50.0893 19.4844C50.0893 24.2313 46.2078 28.0938 41.4375 28.0938Z"
                  fill={theme == "light" ? "black" : "white"}
                />
              </g>
              <defs>
                <clipPath id="clip0_1_4">
                  <rect width="51" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="font-bold my-auto text-5xl text-[20px] lg:text-[36px]">
              FIXED.G
            </h1>
            <div className="bg-[#F7484E] h-[15px] w-[15px] lg:h-[25px] lg:w-[24px] my-auto"></div>
            <div className="bg-[#292929] h-[15px] w-[15px] lg:h-[25px] lg:w-[24px] my-auto"></div>
          </div>
          <div className="flex relative h-fit mt-10 md:mt-0">
            <Image
              className="invisible md:visible element-dark absolute -z-50 -right-10 -bottom-[150px] spin-slow"
              width={200}
              height={200}
              src={"/assets/svg/nut_element.svg"}
              alt={"nut_element.svg"}
            ></Image>
            <Image
              className="invisible md:visible element-dark absolute -z-50 -left-[300px]"
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
                  <img
                    className="mx-auto w-[16px] h-[16px] animate-bounce"
                    src="/assets/svg/chevron_down_blue.svg"
                    alt="chev_down"
                  />
                </div>
              </div>
              <div className="flex justify-center w-full h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[1000px] 2xl:h-[800px] gap-2 sm:gap-5">
                <div className="w-fit flex flex-col gap-2 sm:gap-5">
                  <svg
                    className="w-fit mx-auto"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8.5" cy="8.5" r="8" stroke="#D7D7D7" />
                  </svg>
                  <div className="mx-auto border-r border-[#D7D7D7] dark:border-[#292929] h-full"></div>
                  <p
                    className="w-fit whitespace-nowrap text-[#D7D7D7] text-[10px] md:text-[16px] font-light [writing-mode:vertical-lr]"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    fixed.g/doc
                  </p>
                </div>
                <video autoPlay loop muted className="rounded-lg">
                  <source
                    src="/assets/videos/cycle-dsnv.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              {/* <div className="max-[768px]:w-full max-[1600px]:w-1/2 max-w-[742px] max-h-[863px]">
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
        {/*  Separator */}
        <div
          className="col-span-1 h-[60px] border-y border-[#D7D7D7] dark:border-[#292929]"
          id="bikes"
        >
          <div className="w-full h-full flex items-center">
            <div className="text-[#D7D7D7] font-thin mx-auto">#</div>
          </div>
        </div>
        <div className="col-span-12 h-[60px] border-r border-b border border-[#D7D7D7] dark:border-[#292929] px-10 py-4">
          <h1 className="text-[#D7D7D7] font-thin ">fixed.g/bikes</h1>
        </div>
        <div className="col-span-1 h-[60px] border-y border-[#D7D7D7] dark:border-[#292929]"></div>

        {/* -- Bikes Section -- */}
        <div className="col-span-1">
          <h1
            className="mx-auto mt-10 text-[#D7D7D7] font-thin [writing-mode:vertical-lr]"
            style={{ transform: "rotate(180deg)" }}
          >
            01 - FG
          </h1>
        </div>
        <div className="col-span-12 relative border-x pb-[50px] border-[#D7D7D7] dark:border-[#292929]">
          {/* absolute bg element */}
          <Image
            className="invisible md:visible element-dark absolute -z-50 -bottom-[300px] right-[30%]"
            width={500}
            height={500}
            src={"/assets/svg/wrench_element.svg"}
            alt={"wrench.svg"}
          ></Image>
          {/* ------------------- */}
          <div className="flex flex-col md:flex-row justify-between m-[12px] md:m-[20px] 2xl:m-[50px]">
            <div className="basis-2/3 grid grid-cols-4 gap-3">
              <img
                className="col-span-2 w-full h-full rounded-lg"
                src="/assets/img/bike - 01.png"
                alt="bike - 01"
              ></img>
              <img
                className="col-span-2 w-full h-full rounded-lg"
                src="/assets/img/bike - 02.png"
                alt="bike - 02"
              ></img>
              <img
                className="col-span-3 w-full h-full rounded-lg"
                src="/assets/img/bike - 03.png"
                alt="bike - 03"
              ></img>
              <img
                className="col-span-1 w-full h-full rounded-lg"
                src="/assets/img/bike - 04.png"
                alt="bike - 04"
              ></img>
              <div className="col-span-4 flex gap-5">
                <hr className="w-full my-auto border-t border-[#D7D7D7] dark:border-[#292929]" />
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
        <div className="col-span-1 h-[60px] border-y border-[#D7D7D7] dark:border-[#292929]"></div>
        <div className="col-span-12 h-[60px] border-r border-b border border-[#D7D7D7] dark:border-[#292929] px-10 py-4">
          <div className="flex justify-end">
            <h1 className="text-[#D7D7D7] font-thin">fixed.g/repair</h1>
          </div>
        </div>
        <div className="col-span-1 h-[60px] border-y border-[#D7D7D7] dark:border-[#292929]"></div>

        {/* -- Repair Bike Section -- */}
        <div className="col-span-1"></div>
        <div className="col-span-12 relative border-x pb-[50px] border-[#D7D7D7] dark:border-[#292929]">
          {/* absolute bg element */}
          <Image
            className="invisible md:visible element-dark absolute -z-50 -bottom-[100px] -left-[15%] spin-slow"
            width={500}
            height={500}
            src={"/assets/svg/gear_element.svg"}
            alt={"gear_element.svg"}
          ></Image>
          {/* ------------------- */}
          <div className="flex flex-col-reverse gap-3 md:flex-row justify-between m-[12px] md:m-[20px] 2xl:m-[50px]">
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
                <div className="border-l border-[#D7D7D7] dark:border-[#292929] h-full mx-auto"></div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <img
                  className="col-span-2 w-full h-full rounded-lg object-cover"
                  src="/assets/img/repair guy - 01.png"
                  alt="repair guy - 01"
                ></img>
                <img
                  className="col-span-2 w-full h-full rounded-lg object-cover"
                  src="/assets/img/repair guy - 02.png"
                  alt="repair guy - 02"
                ></img>
                <img
                  className="col-span-4 w-full h-full rounded-lg object-cover"
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

        {/*  Separator */}
        <div className="col-span-1 h-[60px] border-y border-[#D7D7D7] dark:border-[#292929]"></div>
        <div className="col-span-12 h-[60px] border-r border-b border border-[#D7D7D7] dark:border-[#292929] px-10 py-4"></div>
        <div className="col-span-1 h-[60px] border-y border-[#D7D7D7] dark:border-[#292929]"></div>
        <div className="col-span-1"></div>
        <div className="col-span-12 relative border-x pb-[50px] border-[#D7D7D7] dark:border-[#292929]">
          <div className="mr-4 2xl:mr-36 mt-9 md:mt-20 flex justify-end gap-5">
            <p className="w-fit whitespace-nowrap text-[#D7D7D7] font-light text-[10px] md:text-[16px]">
              fixed.g/cafe
            </p>
            <hr className="w-1/3 my-auto border-t border-[#D7D7D7] dark:border-[#292929]" />
            <svg
              className="w-fit my-auto"
              width="15"
              height="15"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r="8" stroke="#D7D7D7" />
            </svg>
          </div>
          <div className="grid grid-rows-1 md:grid-cols-3 m-[12px] md:m-[20px] 2xl:my-[50px] 2xl:mx-[150px] md:flex-row md:gap-5 2xl:gap-10">
            {currentWidth == "md" ? (
              <CafeImgNormal objectPosition={objectPosition} />
            ) : (
              <CafeImgCaruosel objectPosition={objectPosition} />
            )}
          </div>
          <div className="ml-4 2xl:ml-36 mb-9 md:mb-20 flex justify-start gap-5">
            <svg
              className="w-fit my-auto"
              width="15"
              height="15"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.5" cy="8.5" r="8" stroke="#D7D7D7" />
            </svg>
            <hr className="w-1/3 my-auto border-t border-[#D7D7D7] dark:border-[#292929]" />
            <p className="w-fit whitespace-nowrap text-[#D7D7D7] font-light text-[10px] md:text-[16px]">
              fixed.g/cafe
            </p>
          </div>
          <div className="grid grid-cols-5 w-full">
            <div></div>
            <div className="col-span-3 flex flex-col gap-5 2xl:gap-9 w-full">
              <h1 className="text-[20px] lg:text-[30px] 2xl:text-[48px] text-center font-bold">
                Need something to eat or drink?
                <br />
                Come over to FXG Cafe
              </h1>
              <p className="w-full lg:px-32 text-center text-[16px] 2xl:text-[24px] font-normal">
                If you’re repairing your bike and it takes some time, don’t just
                wait there and stare at the mechanics. Instead, you should come
                to FXG Cafe and try our new and tasty frappucino!
              </p>
              <div className="flex justify-center w-full">
                <Button className="flex justify-center h-fit w-fit px-6 py-3 lg:px-10 lg:py-6 2xl:text-[24px] font-normal bg-[#4871F7] hover:bg-[#3C5ECC]">
                  Explore Menus
                </Button>
              </div>
            </div>
            <div>
              <Image
                className="invisible md:visible element-dark absolute -z-50 -right-[5%]"
                width={300}
                height={300}
                src={"/assets/svg/cup_element.svg"}
                alt={"gear_element.svg"}
                style={{ transform: "rotate(-30deg)" }}
              ></Image>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

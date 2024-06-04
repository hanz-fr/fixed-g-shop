import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./carousel";
import Autoplay from "embla-carousel-autoplay";

const CafeImgCaruosel = (props: {
    objectPosition: string
}) => {
  return (
    <Carousel
      className="row-span-1 md:col-span-1"
      plugins={[Autoplay({ delay: 2000 })]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        <CarouselItem>
          <img
            className="rounded-lg w-full object-cover h-64"
            style={{ objectPosition: props.objectPosition }}
            src="/assets/img/cafe - 01.png"
            alt="cafe - 01"
          ></img>
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-lg w-full object-cover h-64"
            style={{ objectPosition: props.objectPosition }}
            src="/assets/img/cafe - 02.png"
            alt="cafe - 02"
          ></img>
        </CarouselItem>
        <CarouselItem>
          <img
            className="rounded-lg w-full object-cover h-64"
            style={{ objectPosition: props.objectPosition }}
            src="/assets/img/cafe - 03.png"
            alt="cafe - 03"
          ></img>
        </CarouselItem>
      </CarouselContent>
      <CarouselDots className="py-2" />
    </Carousel>
  );
};

export default CafeImgCaruosel;

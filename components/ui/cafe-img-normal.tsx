import React from "react";

const CafeImgNormal = (props: {
    objectPosition: string
}) => {
  return (
    <>
      <img
        className="row-span-1 md:col-span-1 rounded-lg w-full object-cover h-5/6 self-end"
        style={{ objectPosition: props.objectPosition }}
        src="/assets/img/cafe - 01.png"
        alt="cafe - 01"
      ></img>
      <img
        className="row-span-1 md:col-span-1 rounded-lg w-full object-cover h-5/6 self-start"
        style={{ objectPosition: props.objectPosition }}
        src="/assets/img/cafe - 02.png"
        alt="cafe - 02"
      ></img>
      <img
        className="row-span-1 md:col-span-1 rounded-lg w-full object-cover h-5/6 self-end"
        style={{ objectPosition: props.objectPosition }}
        src="/assets/img/cafe - 03.png"
        alt="cafe - 03"
      ></img>
    </>
  );
};

export default CafeImgNormal;

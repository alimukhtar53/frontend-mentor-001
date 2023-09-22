import React from "react";
import Image from "next/image";
import qrImage from "../images/qr-code.png";

function QrcodeCard({ currentColor }: any) {
  return (
    <>
      <div className="bg-white p-4 rounded-[20px] w-min">
        <div
          className={`bg-${currentColor}-300 relative flex justify-center items-center rounded-xl overflow-clip w-[306px] h-[306px]`}
        >
          <Image src={qrImage} alt="qr-image" width={200} />
          <div
            className={`bg-${currentColor}-500/25 w-36 h-36 absolute top-0 rounded-full`}
          ></div>
        </div>
        <div className="my-8">
          <h1 className="text-2xl font-bold text-center text-slate-800">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-center text-neutral-400 font-medium mt-4 leading-5">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default QrcodeCard;

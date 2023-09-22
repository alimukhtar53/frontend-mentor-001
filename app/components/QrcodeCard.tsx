import React from "react";
import Image from "next/image";
import qrImage from "../images/qr-code.png";
import { COLOR_CLASSES, TEXT_COLOR_CLASSES } from "../lib/colorClasses";
import { getTotalExperience } from "../lib/totalExperience";

function QrcodeCard({ currentColor }: any) {
  return (
    <>
      <div className="bg-white p-4 rounded-[20px] w-min shadow-sm">
        <div
          className={`bg-${currentColor}-300 transition-all isolate relative flex justify-center items-center rounded-xl overflow-clip w-[306px] h-[306px]`}
        >
          <Image className="z-10" src={qrImage} alt="qr-image" width={200} />
          <div
            className={`bg-black/5 w-36 h-36 z-0 absolute bottom-0 right-0 -mr-20 -mb-20 rounded-full`}
          ></div>
          <div
            className={`bg-black/5 w-56 h-56 z-0 absolute top-0 left-0 -ml-16 -mt-20 rounded-full`}
          ></div>
        </div>
        <div className="my-8">
          <h1 className="text-2xl font-bold text-center text-slate-800">
            Let&apos;s Boost Front-End Skills Together!
          </h1>
          <p className="text-center text-neutral-400 font-medium mt-4 leading-6">
            Hey there, I&apos;m{" "}
            <span
              className={` px-1 py-[0.05rem] ${TEXT_COLOR_CLASSES[currentColor]} ${COLOR_CLASSES[currentColor]} rounded-md`}
            >
              Ali Mukhtar
            </span>
            , your friendly {getTotalExperience()}-year UI/UX and frontend
            enthusiast! Scan the QR code, and let&apos;s join the fun on
            LinkedIn. 🚀
          </p>
        </div>
      </div>
    </>
  );
}

export default QrcodeCard;

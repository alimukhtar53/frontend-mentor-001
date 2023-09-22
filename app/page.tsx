import Image from "next/image";
import qrImage from "./images/image-qr-code.png";

export default function Home() {
  return (
    <div className="h-full m-auto w-100 flex justify-center items-center bg-[#D5E1EF] shadow-2xl">
      <div className="bg-white p-4 rounded-[20px] w-min">
        <div className="rounded-xl overflow-clip w-[296px] h-[296px]">
          <Image src={qrImage} alt="qr-image" />
        </div>
        <div className="my-8">
          <h1 className="text-2xl font-bold text-center text-slate-800">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-center text-neutral-500 font-semibold mt-4 leading-5">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

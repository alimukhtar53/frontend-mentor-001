"use client";
import React, { useEffect } from "react";
import ColorPalette from "./components/ColorPalette";
import QrcodeCard from "./components/QrcodeCard";

const COLORS = ["orange", "sky", "lime", "indigo", "yellow", "slate", "rose"];

export default function Home() {
  const [currentColor, setCurrentColor] = React.useState("slate");

  const handleChangeColor = (index: number) => {
    setCurrentColor(COLORS[index]);
  };

  useEffect(() => {
    console.log(currentColor);
  }, [currentColor]);

  return (
    <div className="h-full m-auto w-100 flex justify-center items-center bg-[#D5E1EF] shadow-2xl">
      <div className="flex flex-col">
        <QrcodeCard currentColor={currentColor} />
        <ColorPalette handleChangeColor={handleChangeColor} />
      </div>
    </div>
  );
}
